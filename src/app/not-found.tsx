import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6">
            <div className="text-center space-y-2">
                <h1 className="text-8xl font-bold text-teal-500">404</h1>
                <h2 className="text-2xl font-semibold text-teal-700">Página no encontrada</h2>
                <p className="text-gray-400 text-sm">
                    La dirección que ingresaste no existe.
                </p>
            </div>
            <Link
                href="/"
                className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-medium"
            >
                Volver al inicio
            </Link>
        </div>
    )
}