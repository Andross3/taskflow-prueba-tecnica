type Project = {
    title: string
    _count: { tasks: number }
}

interface TopProjectsCardProps {
    projects: Project[]
}

export default function TopProjectsCard({ projects }: TopProjectsCardProps) {
    const max = Math.max(...projects.map(p => p._count.tasks), 1)

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Proyectos con más tareas pendientes</span>
            </div>

            <div className="flex flex-col gap-4">
                {projects.map((project, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">{project.title}</span>
                            <span className="text-sm font-bold text-gray-900">{project._count.tasks}</span>
                        </div>
                        {/* barra de progreso */}
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-amber-400 rounded-full transition-all"
                                style={{ width: `${(project._count.tasks / max) * 100}%` }}
                            />
                        </div>
                        <span className="text-xs text-gray-400">
                            {project._count.tasks} tarea{project._count.tasks !== 1 ? "s" : ""} pendiente{project._count.tasks !== 1 ? "s" : ""}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}