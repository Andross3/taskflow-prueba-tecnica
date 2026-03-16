'use client'
import Dialog from "@/components/Dialog";
import CreateProjectForm from "@/components/CreateProjectForm";
import { useState } from "react";

const projectHeader = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex items-center justify-between px-1 py-4">
            {/* Títulos */}
            <div className="flex flex-col gap-0.5">
                <h1 className="text-xl font-semibold text-zinc-800">
                    Proyectos
                </h1>

            </div>

            {/* Botón */}
            <button
                onClick={() => setOpen(true)}
                className="
                    flex items-center gap-2
                    px-4 py-2 rounded-xl text-sm font-medium
                    bg-teal-500 text-white
                    hover:bg-teal-400 active:bg-teal-600
                    transition-colors duration-200 cursor-pointer
                "
            >
                <svg
                    className="w-4 h-4"
                    fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Nuevo Proyecto
            </button>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <CreateProjectForm onClose={() => setOpen(false)} />
            </Dialog>
        </div>
    )
}
export default projectHeader;