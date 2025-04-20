import { ThemeToggle } from '@/components/theme-toggle'
import { MaltaLogo } from '@/components/malta-logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <MaltaLogo className="h-10 w-auto scale-120" /> {/* 20% larger */}
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link href="/apply">
            <Button variant="outline">Apply Now</Button>
          </Link>
          <Link href="/auth">
            <Button>Sign In</Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 