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

    if (!title || !description || !projectId ) return null;
    
    // verificar que tengan valores validos status y priority
    const priorityValue = formData.get("priority");
    const statusValue = formData.get("status");
    
    if (!priorityValue || !Object.values(Priority).includes(priorityValue as Priority))
        throw new Error("Prioridad no correcta");
    const priority  = priorityValue as Priority;
    
    if (!statusValue || !Object.values(Status).includes(statusValue as Status))
        throw new Error("Estado no correcto");;
    const status  = statusValue as Status;
    
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
    } catch(error) {
        console.error("Error al crear tarea",error);
        return null;
    }
}