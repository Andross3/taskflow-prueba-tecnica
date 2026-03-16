"use server";

import prisma from "@/lib/prisma";
import { CreateProjects } from "@/types/project";
// import { createClient } from "@/lib/supabase/server";
import getAuthenticatedUser from "@/lib/auth";

export const createProject = async (formData: FormData) => {
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const color = formData.get("color")?.toString();
    
    const user = await getAuthenticatedUser();
    if (!user) return null;

    if (!name || !description || !color) return null;

    const projectData: CreateProjects = {
        title: name,
        description: description,
        color: color,
        user: {
            connect: { id: user.id }
        }
    };

    try {
        const newProject = await prisma.projects.create({
            data: projectData
        })
        return newProject;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getAllProjects() {

    const user = await getAuthenticatedUser();
    if (!user) return null;

    try {
        const projects = await prisma.projects.findMany({
            where: { userId: user.id }
        });
        return projects;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getTotalProjects() {
    const user = await getAuthenticatedUser();
    if (!user) return null;

    try {
        const totalProjects = await prisma.projects.count({
            where: { userId: user.id }
        });
        return totalProjects;
    } catch (error) {
        console.error('Error al obtener todos los proyectos', error);
        return null;
    }
}


export async function projectsWithPendingTasks() {
    const user = await getAuthenticatedUser();
    if (!user) return null;

    try {
        const topProjects = await prisma.projects.findMany({
            where: {
                userId: user.id
            },
            select: {
                title: true,
                _count: {
                    select: {
                        tasks: {
                            where: {
                                status: {
                                    in: ['TODO', 'IN_PROGRESS']
                                }
                            }
                        }
                    }
                }
            },
            orderBy: {
                tasks: {
                    _count: 'desc'
                }
            },
            take: 3
        });

        return topProjects;
    } catch (error) {
        console.error('Error al obtener todos los proyectos', error);
        return null;
    }
}

