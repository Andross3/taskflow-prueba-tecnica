import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import LogoutButton from './auth/LogoutButton'

export default async function Navbar() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    return (
        <nav className="bg-teal-500 text-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight hover:text-teal-100 transition-colors">
                    TaskFlow
                </Link>

                <div className="flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="hover:text-teal-100 transition-colors">
                        Dashboard
                    </Link>
                    <Link href="/projects" className="hover:text-teal-100 transition-colors">
                        Proyectos
                    </Link>
                </div>

                <div className="flex items-center gap-4 text-sm">
                    <span className="text-teal-100">{user?.email}</span>
                    <LogoutButton />
                </div>
            </div>
        </nav>
    )
}