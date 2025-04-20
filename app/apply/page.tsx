import { createClient } from '@/lib/supabase/server'
import { ApplicationForm } from '@/components/apply/application-form'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Apply for Leasing - MALTA',
  description: 'Apply for our specialized machinery and automotive leasing services',
}

export default async function ApplyPage() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()

  // Redirect unauthenticated users to sign in
  if (!session) {
    redirect('/auth?redirect=/apply')
  }

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Apply for Leasing</h1>
          <p className="mt-2 text-muted-foreground">
            Fill out the form below to apply for our leasing services.
          </p>
        </div>
        
        <ApplicationForm user={session.user} />
      </div>
    </div>
  )
} 