import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    );

    // obtener el usuario actual para verificar si la sesión es válida
    const {
        data: { user },
    } = await supabase.auth.getUser();

    // rutas protegidas
    const protectedRoutes = ["/projects", "/tasks"];
    // rutas publicas
    const publicRoutes = ["/login", "/signup", "/error"];
    // verificar si la ruta actual es una ruta protegida
    const isProtectedRoute = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));
    const isRootRoute = request.nextUrl.pathname === "/";
    const isPublicRoute = publicRoutes.some(route => request.nextUrl.pathname.startsWith(route));

    if (!user && (isProtectedRoute || isRootRoute) && !isPublicRoute) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return supabaseResponse;
}