import prisma from "@/lib/prisma";

// verifica que el usuario sea dueno del projecto
export async function verifyProjectOwnership(projectId: string, userId: string) {
    const project = await prisma.projects.findFirst({
        where: { id: projectId, userId },
    });
    return project ? true: false;
}