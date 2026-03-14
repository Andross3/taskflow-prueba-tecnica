'use client';
import { createProject } from "@/actions/projects-actions";
import { toast } from 'sonner'

const createFormProject = () => {
    return (
        <>
            <div className="flex">
                <form
                    className="flex flex-col gap-4"
                    action={async formData => {
                        await createProject(formData)
                    }}
                >
                    <label htmlFor="">
                        Crear Proyecto
                    </label>

                    <label htmlFor="">
                        Nombre del Proyecto
                    </label>
                    <input type="text" name="name" id="name" />

                    <label htmlFor="">
                        Descripcion
                    </label>
                    <input type="text" name="description" id="description" />

                    <label htmlFor="">
                        Color
                    </label>
                    <input type="text" name="color" id="color" />

                    <button type="submit">Crear Proyecto</button>

                    <button type="reset">Limpiar</button>
                </form>
            </div>
        </>
    )
}

export default createFormProject;