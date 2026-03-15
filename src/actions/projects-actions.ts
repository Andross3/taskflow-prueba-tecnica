"use server";

import prisma from "@/lib/prisma";
import { CreateProjects } from "@/types/project";
import { createClient } from "@/lib/supabase/server";

export const createProject = async (formData: FormData) => {
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const color = formData.get("color")?.toString();

    if (!name || !description || !color) return null;

    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
        return null;
    }

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

    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) return null;

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