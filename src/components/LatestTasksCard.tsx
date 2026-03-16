type Task = {
    title: string
    status: string
    priority: string
    createdAt: Date
    project: { title: string }
}

const statusStyles: Record<string, string> = {
    TODO: "bg-slate-100 text-slate-600",
    IN_PROGRESS: "bg-amber-100 text-amber-600",
    DONE: "bg-emerald-100 text-emerald-600",
}

const statusLabel: Record<string, string> = {
    TODO: "Por hacer",
    IN_PROGRESS: "En progreso",
    DONE: "Terminado",
}

const priorityStyles: Record<string, string> = {
    LOW: "text-gray-400",
    MEDIUM: "text-amber-500",
    HIGH: "text-red-500",
}

const priorityLabel: Record<string, string> = {
    LOW: "Baja",
    MEDIUM: "Media",
    HIGH: "Alta",
}

interface LatestTasksCardProps {
    tasks: Task[]
}

export default function LatestTasksCard({ tasks }: LatestTasksCardProps) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Últimas tareas creadas</span>
                <span className="text-xs text-gray-400">{tasks.length} tareas</span>
            </div>

            <div className="flex flex-col divide-y divide-gray-50">
                {tasks.map((task, i) => (
                    <div key={i} className="py-3 flex flex-col gap-1.5">
                        <div className="flex items-start justify-between gap-2">
                            <p className="text-sm font-medium text-gray-800 leading-snug">{task.title}</p>
                            <span className={`shrink-0 text-xs font-semibold ${priorityStyles[task.priority] ?? "text-gray-400"}`}>
                                {priorityLabel[task.priority] ?? task.priority}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusStyles[task.status] ?? "bg-gray-100 text-gray-600"}`}>
                                {statusLabel[task.status] ?? task.status}
                            </span>
                            <span className="text-xs text-gray-400">·</span>
                            <span className="text-xs text-gray-400">{task.project.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}