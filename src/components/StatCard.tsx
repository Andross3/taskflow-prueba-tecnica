import { ReactNode } from "react"

interface StatCardProps {
    title: string
    value: number
    icon: ReactNode
    description?: string
}

export default function StatCard({ title, value, icon, description }: StatCardProps) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">{title}</span>
                <div className="p-2 bg-gray-50 rounded-xl text-gray-600">
                    {icon}
                </div>
            </div>
            <div>
                <p className="text-3xl font-bold text-gray-900">{value}</p>
                {description && (
                    <p className="text-xs text-gray-400 mt-1">{description}</p>
                )}
            </div>
        </div>
    )
}