import { Status, Priority } from "@/generated/prisma/enums"

export interface Task {
    id: string;
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    createdAt: Date;
    updatedAt: Date;
    projectId: string;
}

export interface CreateTask {
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    project: {
        connect: { id: string };
    };
}