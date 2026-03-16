import { Task } from "@/types/task";

const badgeStatus: Record<string, string> = {
    TODO: "bg-zinc-100 text-zinc-500",
    IN_PROGRESS: "bg-blue-50 text-blue-500",
    DONE: "bg-emerald-50 text-emerald-600",
};

const labelStatus: Record<string, string> = {
    TODO: "Por hacer",
    IN_PROGRESS: "En progreso",
    DONE: "Terminado",
};

const badgePriority: Record<string, string> = {
    LOW: "bg-zinc-100 text-zinc-400",
    MEDIUM: "bg-amber-50 text-amber-500",
    HIGH: "bg-red-50 text-red-500",
};

const labelPriority: Record<string, string> = {
    LOW: "Bajo",
    MEDIUM: "Medio",
    HIGH: "Alto",
};

const CardTask = ({ task }: { task: Task }) => {
    return (
        <div className="
            flex items-center justify-between
            w-full px-5 py-3
            bg-white border border-zinc-100
            rounded-xl shadow-sm
            hover:shadow-md hover:border-zinc-200
        ">
            <div className="flex flex-col gap-0.5 min-w-0">
                <h3 className="text-sm font-semibold text-zinc-800 truncate">
                    {task.title}
                </h3>
                <p className="text-xs text-zinc-400 truncate">
                    {task.description}
                </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 ml-4">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badgeStatus[task.status]}`}>
                    {labelStatus[task.status]}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badgePriority[task.priority]}`}>
                    {labelPriority[task.priority]}
                </span>
            </div>
        </div>
    );
};

export default CardTask;