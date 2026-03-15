import SectionHeader from "@/components/SectionHeader";
import CreateTaskForm from "@/components/CreateTaskForm";
import ContainerTasks from "@/components/ContainerTasks";
interface Props {
    params: Promise<{ id: string }>;
}

const TaskList = async ({ params }: Props) => {
    const { id: projectId } = await params;

    return (
        <div>
            <SectionHeader
                title="Tareas"
                description="Lista de tareas"
                buttonLabel="Crear Tarea"
                dialogContent={
                    <CreateTaskForm projectId={projectId} />
                }
            />

            <div>
                <ContainerTasks
                    projectId={projectId}
                />
            </div>
            
        </div>
    )
}
export default TaskList;