import CardTask from "@/components/CardTask";
import { getTasksByProject } from "@/actions/tasks-actions";

interface Props {
    projectId: string;
    layout?: "grid" | "list";
}

const ContainerTasks = async ({ projectId, layout = "list" }: Props) => {
    const tasks = await getTasksByProject(projectId);

    if (!tasks || tasks.length === 0) {
        return (
            <p className="text-sm text-zinc-400">No hay tareas aún.</p>
        );
    }

    const containerClass = layout === "grid"
        ? "grid grid-cols-4 gap-4"
        : "flex flex-col gap-3";

    return (
        <div className={containerClass}>
            {tasks.map((task) =>
                <CardTask
                    key={task.id}
                    task={task}
                />
            )}
        </div>
    );
};

export default ContainerTasks;