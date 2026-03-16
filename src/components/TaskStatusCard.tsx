interface TaskStatusCardProps {
    todo: number
    inProgress: number
    done: number
}

const statuses = [
    { key: "todo", label: "Por hacer", color: "bg-slate-100 text-slate-600" },
    { key: "inProgress", label: "En progreso", color: "bg-amber-100 text-amber-600" },
    { key: "done", label: "Terminado", color: "bg-emerald-100 text-emerald-600" },
]

export default function TaskStatusCard({ todo, inProgress, done }: TaskStatusCardProps) {
    const values = { todo, inProgress, done }
    const total = todo + inProgress + done

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">Tareas por estado</span>
                <span className="text-xs text-gray-400">{total} total</span>
            </div>

            {/* barra de progreso */}
            <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
                {total > 0 && (
                    <>
                        <div className="bg-slate-300 rounded-full" style={{ width: `${(todo / total) * 100}%` }} />
                        <div className="bg-amber-400 rounded-full" style={{ width: `${(inProgress / total) * 100}%` }} />
                        <div className="bg-emerald-400 rounded-full" style={{ width: `${(done / total) * 100}%` }} />
                    </>
                )}
            </div>

            <div className="flex flex-col gap-2">
                {statuses.map(({ key, label, color }) => (
                    <div key={key} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>
                                {label}
                            </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">
                            {values[key as keyof typeof values]}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}