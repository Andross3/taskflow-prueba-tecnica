import { createClient } from "@/lib/supabase/server";
// verifica si el usuario esta autentificado
async function getAuthenticatedUser() {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) return null;
    return user;
}
export default getAuthenticatedUser;