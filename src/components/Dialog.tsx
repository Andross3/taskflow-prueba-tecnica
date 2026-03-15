interface Props {
    open: boolean
    onClose: () => void
    children: React.ReactNode
}

function Dialog({ open, onClose, children }: Props) {
    if (!open) return null

    return (
        <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="
                    bg-white rounded-2xl shadow-2xl
                    w-full max-w-md
                    p-6
                    animate-in fade-in zoom-in-95 duration-200
                "
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}
export default Dialog;