'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = await createClient()


    if (!email || !password) { 
        return redirect("/error?message=Missing fields");
    }

    const data = {
        email: email,
        password: password,
    }

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/jhazmin')
}

export async function signup(formData: FormData) {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const supabase = await createClient()

    if (!name || !email || !password) {
        return redirect("/error?message=Missing fields")
    }

    const data = {
        email: email,
        password: password,
        options: {
            data: {
                name: name
            }
        }
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/account')
}