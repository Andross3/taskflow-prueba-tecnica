import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectForm } from "@/components/ui/form";

const ButtonNewProject = () => {
    return (
        <Dialog>
            <DialogTrigger>Nuevo Proyecto</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Crear Nuevo Proyecto</DialogTitle>
                    <DialogDescription>
                        Agrega un nuevo proyecto a tu lista para organizar tus tareas.
                    </DialogDescription>
                </DialogHeader>
                <ProjectForm />
            </DialogContent>
        </Dialog>
    )
}

export default ButtonNewProject;