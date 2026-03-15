// cardProject.tsx — sin cambios, estaba correcto
import Link from "next/link";
import { Project } from "@/types/project";

const CardProject = ({ project }: { project: Project }) => {
    return (
        <Link href={`/projects/${project.id}/tasks`} className="w-44 h-44 shrink-0">
            <div
                className="
                    group relative flex flex-col w-full h-full
                    rounded-2xl overflow-hidden
                    bg-white border border-zinc-100
                    shadow-sm
                    hover:shadow-xl hover:-translate-y-1 hover:border-zinc-200
                    transition-all
                    cursor-pointer
                "
            >
                <div
                    className="w-full h-1.5 shrink-0 transition-all duration-300 group-hover:h-3"
                    style={{ backgroundColor: project.color }}
                />

                <div className="flex flex-col gap-2 px-4 py-3 flex-1 min-h-0">
                    <h3 className="text-sm font-semibold text-zinc-800">
                        {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 ">
                        {project.description}
                    </p>
                </div>

            </div>
        </Link>
    );
};

export default CardProject;