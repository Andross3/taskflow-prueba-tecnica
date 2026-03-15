// import ContainerTask from "@/components/ContainerTasks";
import SectionHeader from "@/components/SectionHeader";
import CreateFormTask from "@/components/CreateTaskForm";

interface Props {
    params: Promise<{ id: string }>;
}

const TaskList = async ({ params }: Props) => {
    const { id } = await params;
    return (
        <div className="min-h-screen bg-zinc-50 ">
            <div className="w-full bg-white border-b border-zinc-200 shadow-sm px-8">
                {/* <SectionHeader
                    title="Tareas"
                    description="Gestiona tus tareas pendientes"
                    buttonLabel="Nueva Tarea"
                    dialogContent={(onClose) => <CreateTaskForm onClose={onClose} />}
                /> */}
                <CreateFormTask
                    projectId={id}
                >
                </CreateFormTask>
            </div>
        </div>
    )
}

export default TaskList;