'use server';

import { supabaseServerClient } from "@/utils/supabaseServer";


export async function registerWithEmailAndPasword({
  email,
}: {
  email: string;
}) {
  console.log(email);
  const supabase = await supabaseServerClient()
  const res = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/login`
    }
  })
  return JSON.stringify(res)

}
