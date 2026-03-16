"use server";

import prisma from "@/lib/prisma";
import { verifyProjectOwnership } from "@/lib/permissions";
import getAuthenticatedUser from "@/lib/auth";
import { CreateTask } from "@/types/task";
import { Status, Priority } from "@/generated/prisma/enums";

export async function getTasksByProject(projectId: string) {
    const user = await getAuthenticatedUser();
    if (!user) return null;

    const isOwner = await verifyProjectOwnership(projectId, user.id);
    if (!isOwner) return null;

    if (!projectId) return null;

    try {
        const tasks = await prisma.tasks.findMany({
            where: { projectId },
            orderBy: { createdAt: "desc" },
        });
        return tasks;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function createTask(formData: FormData) {
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const projectId = formData.get("projectId")!.toString();

    const user = await getAuthenticatedUser();
    if (!user) return null;

    const isOwner = await verifyProjectOwnership(projectId, user.id);
    if (!isOwner) return null;

    if (!title || !description || !projectId) return null;

    // verificar que tengan valores validos status y priority
    const priorityValue = formData.get("priority");
    const statusValue = formData.get("status");

    if (!priorityValue || !Object.values(Priority).includes(priorityValue as Priority))
        throw new Error("Prioridad no correcta");
    const priority = priorityValue as Priority;

    if (!statusValue || !Object.values(Status).includes(statusValue as Status))
        throw new Error("Estado no correcto");;
    const status = statusValue as Status;

    const taskData: CreateTask = {
        title: title,
        description: description,
        status: status,
        priority: priority,
        project: {
            connect: { id: projectId }
        }
    }

    try {
        const newTask = await prisma.tasks.create({
            data: taskData,
        })
        return newTask;
    } catch (error) {
        console.error("Error al crear tarea", error);
        return null;
    }
}

export async function getTotalTasks() {
    const user = await getAuthenticatedUser();
    if (!user) return null;

    try {
        const totalTasks = await prisma.tasks.count({
            where: {
                project: {
                    userId: user.id
                }
            }
        });
        return totalTasks;
    } catch (error) {
        console.error("Error al obtener las tareas", error);
        return null;
    }
}

export async function getTaskStatus() {
    const user = await getAuthenticatedUser();
    if (!user) return null;
    
    const taskByStatus = {
        TODO: 0,
        IN_PROGRESS: 0,
        DONE: 0
    };
    
    try {
        const taskStatus = await prisma.tasks.groupBy({
            by: ['status'],
            where: {
                project: {
                    userId: user.id
                }
            },
            _count: {
                status: true
            }
        });
        
        taskStatus.forEach(({ status, _count }) => {
            taskByStatus[status] = _count.status;
        });

        return taskByStatus;
    } catch (error) {
        console.error("Error al obtener los estados de las tareas", error);
        return null;
    }
}

export async function latestTasksCreated() {
    const user = await getAuthenticatedUser();
    if (!user) return null;
    
    try {
        const latestTasks = await prisma.tasks.findMany({
            where: {
                project: {
                    userId: user.id
                }
            },
            include: {
                project: {
                    select: { title: true }
                }
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 5
        });
        return latestTasks;
    } catch (error) {
        console.error("Error al obtener los ultimas 5 tareas", error);
        return null;
    }
}