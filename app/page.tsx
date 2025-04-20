import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Financial Leasing Solutions for Your Business
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  MALTA offers specialized machinery and automotive leasing services to help you grow your business without the burden of large upfront investments.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/apply">
                  <Button size="lg">Apply for Leasing</Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] rounded-lg bg-muted/70">
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  Image Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose MALTA</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer flexible leasing solutions tailored to your business needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 border">
              <div className="rounded-full bg-primary/10 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                  <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12Z" />
                  <path d="M12 10h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Flexible Terms</h3>
              <p className="text-sm text-muted-foreground text-center">
                Customize lease agreements to fit your business cycle and cash flow.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 border">
              <div className="rounded-full bg-primary/10 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Quick Approval</h3>
              <p className="text-sm text-muted-foreground text-center">
                Streamlined application process with fast approvals and minimal paperwork.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center space-y-2 rounded-lg p-4 border">
              <div className="rounded-full bg-primary/10 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Tax Benefits</h3>
              <p className="text-sm text-muted-foreground text-center">
                Take advantage of potential tax deductions for lease payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Apply today and get the equipment your business needs to succeed.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/apply">
                <Button size="lg">Apply Now</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 