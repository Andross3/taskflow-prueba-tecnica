import CardProject from "@/components/CardProject";
import { getAllProjects } from "@/actions/projects-actions";

const ContainerProjects = async () => {
    const projects = await getAllProjects();

    if (!projects || projects.length === 0) {
        return (
            <p className="text-sm text-zinc-400">No hay proyectos aún.</p>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            {projects.map((project) =>
                <CardProject
                    key={project.id}
                    project={project}
                />
            )}
        </div>
    );
}

export default ContainerProjects;