import Link from "next/link";
import { signup } from "@/actions/auth";

const SignUp = () => {

    return (
        <>
            <div className=" bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <form action="" className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold text-gray-800">Crear Cuenta</h1>

                    <h2 className="text-gray-500 mt-2">Comienza registrandote en nuestra plataforma</h2>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Tu nombre completo"
                            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="correo@ejemplo.com"
                            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
                        />
                    </div>

                    <p className="text-sm text-gray-600 mt-2 text-center">
                        ¿Ya tienes una cuenta?{' '}
                        <Link href="/login" className="text-teal-600 font-semibold hover:underline transition-all">
                            Inicia sesión
                        </Link>
                    </p>

                    <button
                        formAction={signup}
                        type="submit"
                        className="mt-4 bg-teal-500 hover:bg-sky-700 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-sky-200 transition-all active:scale-[0.98]"
                    >
                        Crear Cuenta
                    </button>
                </form>
            </div>
        </>
    )
}
export default SignUp;