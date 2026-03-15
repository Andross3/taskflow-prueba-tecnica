import ProjectHeader  from "@/components/projectHeader";
import ContainerProjects from "@/components/ContainerProjects";

const ProjectsList = () => {
    return (
        <div className="min-h-screen bg-zinc-50 ">

            <div className="w-full bg-white border-b border-zinc-200 shadow-sm px-8">
                <ProjectHeader />
            </div>

            <div className="px-8 py-8">
                <ContainerProjects />
            </div>

        </div>
    )
}

export default ProjectsList;    