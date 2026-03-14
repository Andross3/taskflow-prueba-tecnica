export interface CreateProjects{
    title: string;
    description: string;
    color: string;
    user: {
        connect: { id: string };
    }
}

export interface Project {
    id: string;
    title: string;
    description: string;
    color: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
}