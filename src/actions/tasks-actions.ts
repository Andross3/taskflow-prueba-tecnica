"use server";

import prisma from "@/lib/prisma";
import { verifyProjectOwnership } from "@/lib/permissions";
import getAuthenticatedUser from "@/lib/auth";

export async function getTasksByProject(projectId: string) {
    const user = await getAuthenticatedUser();
    if (!user) return null;

    const isOwner = await verifyProjectOwnership(projectId, user.id);
    if (!isOwner) return null;

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