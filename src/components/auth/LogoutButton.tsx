'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
    const router = useRouter()

    async function handleLogout() {
        await fetch('/auth/signout', { method: 'POST' })
        router.push('/login')
    }

    return (
        <button
            onClick={handleLogout}
            className="px-4 py-1.5 bg-white text-teal-600 rounded-lg font-medium hover:bg-teal-50 transition-colors"
        >
            Cerrar sesión
        </button>
    )
}