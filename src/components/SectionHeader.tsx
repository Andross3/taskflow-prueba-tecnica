'use client'
import { useState, ReactNode } from "react";
import Dialog from "@/components/Dialog";

interface SectionHeaderProps {
    title: string;
    description?: string;
    buttonLabel: string;
    dialogContent: (onClose: () => void) => ReactNode;
}

const SectionHeader = ({ title, description, buttonLabel, dialogContent }: SectionHeaderProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex items-center justify-between px-1 py-4">
            
            <div className="flex flex-col gap-0.5">
                <h1 className="text-xl font-semibold text-zinc-800">
                    {title}
                </h1>
                {description && (
                    <p className="text-sm text-zinc-500">{description}</p>
                )}
            </div>

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
                {buttonLabel}
            </button>

            <Dialog open={open} onClose={() => setOpen(false)}>
                {dialogContent(() => setOpen(false))}
            </Dialog>
        </div>
    );
};

export default SectionHeader;