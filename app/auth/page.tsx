import { AuthForm } from '@/components/auth/auth-form'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function AuthPage() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Sign in to your account to continue
          </p>
        </div>
        <AuthForm />
      </div>
    </div>
  )
} 