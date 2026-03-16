'use client';

import { createTask } from "@/actions/tasks-actions";
import { toast } from 'sonner';

const STATUS = [
    { value: "TODO", label: "Por Hacer" },
    { value: "IN_PROGRESS", label: "En Progreso" },
    { value: "DONE", label: "Terminado" },
];

const PRIORITY = [
    { value: "LOW", label: "Bajo" },
    { value: "MEDIUM", label: "Medio" },
    { value: "HIGH", label: "Alto" },
];

interface Props {
    projectId: string;
    onClose?: () => void;
}

const CreateFormTask = ({ projectId, onClose }: Props) => {

    return (
        <div className="w-full max-w-md">
            <form
                className="flex flex-col gap-5"
                action={async (formData) => {
                    await createTask(formData);
                    toast.success("Tarea creada");
                    onClose?.();
                }}
            >
                {/* cambiar esto? */}
                <input type="hidden" name="projectId" value={projectId} />

                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-zinc-800">
                        Crear nueva tarea
                    </h2>
                    {(
                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                w-8 h-8 flex items-center justify-center
                                rounded-lg text-zinc-400
                                hover:bg-zinc-100 hover:text-zinc-600
                                transition-colors duration-200 cursor-pointer
                            "
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="title" className="text-sm font-medium text-zinc-700">
                        Título
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Nombre de la tarea..."
                        className="
                            px-3 py-2 rounded-xl text-sm
                            border border-zinc-200 bg-zinc-50
                            focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent
                            placeholder:text-zinc-300
                            transition duration-200
                        "
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="description" className="text-sm font-medium text-zinc-700">
                        Descripción
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        rows={3}
                        placeholder="Describe la tarea..."
                        className="
                            px-3 py-2 rounded-xl text-sm resize-none
                            border border-zinc-200 bg-zinc-50
                            focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent
                            placeholder:text-zinc-300
                            transition duration-200
                        "
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="status" className="text-sm font-medium text-zinc-700">
                            Estado
                        </label>
                        <select
                            name="status"
                            id="status"
                            defaultValue=""
                            className="
                                px-3 py-2 rounded-xl text-sm
                                border border-zinc-200 bg-zinc-50
                                focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent
                                text-zinc-700 transition duration-200 cursor-pointer
                            "
                        >
                            <option value="" disabled>Seleccionar...</option>
                            {STATUS.map((e) => (
                                <option key={e.value} value={e.value}>{e.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="priority" className="text-sm font-medium text-zinc-700">
                            Prioridad
                        </label>
                        <select
                            name="priority"
                            id="priority"
                            defaultValue=""
                            className="
                                px-3 py-2 rounded-xl text-sm
                                border border-zinc-200 bg-zinc-50
                                focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent
                                text-zinc-700 transition duration-200 cursor-pointer
                            "
                        >
                            <option value="" disabled>Seleccionar...</option>
                            {PRIORITY.map((p) => (
                                <option key={p.value} value={p.value}>{p.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex gap-3 pt-1">
                    <button
                        type="submit"
                        className="
                            flex-1 py-2 px-4 rounded-xl text-sm font-medium
                            bg-teal-500 text-white
                            hover:bg-teal-400 active:bg-teal-600
                            transition-colors duration-200 cursor-pointer
                        "
                    >
                        Crear Tarea
                    </button>
                    <button
                        type="reset"
                        className="
                            py-2 px-4 rounded-xl text-sm font-medium
                            bg-zinc-100 text-zinc-500
                            hover:bg-zinc-200 active:bg-zinc-300
                            transition-colors duration-200 cursor-pointer
                        "
                    >
                        Limpiar
                    </button>
                </div>

            </form>
        </div>
    );
};

export default CreateFormTask;