import { createClient } from '@/lib/supabase/client'
import { createServerClient } from '@/lib/supabase/server'

export async function signUp(email: string, password: string, fullName: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      }
    }
  })

  if (error) throw error

  // Create user profile
  if (data.user) {
    const { error: profileError } = await supabase
      .from('users')
      .insert({
        id: data.user.id,
        email: data.user.email!,
        full_name: fullName,
        role: 'customer'
      })

    if (profileError) throw profileError
  }

  return data
}

export async function signIn(email: string, password: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) throw error
  return data
}

export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function getCurrentUser() {
  const supabase = createServerClient()
  
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) return null

  if (!user) return null

  const { data: profile } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single()

  return { ...user, profile }
}
