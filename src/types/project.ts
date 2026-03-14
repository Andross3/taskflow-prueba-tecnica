export interface CreateProjects{
    title: string;
    description: string;
    color: string;
    user: {
        connect: { id: string };
    }
}