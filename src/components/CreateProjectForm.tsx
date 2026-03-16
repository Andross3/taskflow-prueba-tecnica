'use client';

import { useState } from "react";
import { createProject } from "@/actions/projects-actions";
import { toast } from 'sonner';

const COLORS = [
    { hex: "#14B8A6", label: "Teal" },
    { hex: "#6366F1", label: "Indigo" },
    { hex: "#F59E0B", label: "Amber" },
    { hex: "#EF4444", label: "Red" },
    { hex: "#22C55E", label: "Green" },
    { hex: "#EC4899", label: "Pink" },
    { hex: "#64748B", label: "Slate" },
];

interface Props {
    onClose?: () => void;
}

const CreateFormProject = ({ onClose }: Props) => {
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0].hex);

    return (
        <div className="w-full max-w-md">
            <form
                className="flex flex-col gap-5"
                action={async (formData) => {
                    formData.set("color", selectedColor);
                    await createProject(formData);
                    toast.success("Proyecto creado");
                    onClose?.();
                }}
            >

                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-zinc-800">
                        Crear Proyecto
                    </h2>
                    {onClose && (
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
                    <label htmlFor="name" className="text-sm font-medium text-zinc-700">
                        Nombre del Proyecto
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Mi nuevo proyecto"
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
                        placeholder="Describe tu proyecto..."
                        className="
                            px-3 py-2 rounded-xl text-sm resize-none
                            border border-zinc-200 bg-zinc-50
                            focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent
                            placeholder:text-zinc-300
                            transition duration-200
                        "
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-700">Color</label>
                    <div className="flex gap-3">
                        {COLORS.map((color) => {
                            const isSelected = selectedColor === color.hex;
                            return (
                                <button
                                    key={color.hex}
                                    type="button"
                                    title={color.label}
                                    onClick={() => setSelectedColor(color.hex)}
                                    className={`
                                        w-8 h-8 rounded-full transition-all duration-200 cursor-pointer
                                        ${isSelected
                                            ? "scale-110 ring-2 ring-offset-2 ring-zinc-400"
                                            : "hover:scale-105 opacity-60 hover:opacity-100"
                                        }
                                    `}
                                    style={{ backgroundColor: color.hex }}
                                />
                            );
                        })}
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
                        Crear Proyecto
                    </button>
                    <button
                        type="reset"
                        onClick={() => setSelectedColor(COLORS[0].hex)}
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

export default CreateFormProject;