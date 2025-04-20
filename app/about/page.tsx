import Image from 'next/image'

export const metadata = {
  title: 'About Us | MALTA - Financial Leasing Services',
  description: 'Learn about MALTA Financial Leasing Services, our mission, vision, and commitment to providing specialized machinery and automotive leasing solutions.',
}

export default function AboutPage() {
  return (
    <div className="container py-10 md:py-16 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">About MALTA</h1>
        <p className="text-xl text-muted-foreground">
          Specialized machinery and automotive leasing solutions tailored to your business needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-muted-foreground">
            At MALTA, our mission is to provide flexible, transparent, and accessible leasing solutions 
            that empower businesses to acquire the machinery and vehicles they need to grow without 
            straining their capital resources.
          </p>
          <p className="text-muted-foreground">
            We believe that every business deserves access to high-quality equipment financing, 
            regardless of its size or industry. By offering customized leasing options, we help 
            our clients maintain their competitive edge in rapidly evolving markets.
          </p>
        </div>
        <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
          {/* Placeholder for image - you can replace this with an actual image */}
          <div className="text-center p-6">
            <p className="text-lg font-medium">Company Image</p>
            <p className="text-sm text-muted-foreground">Company offices or team photo</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg space-y-3">
            <h3 className="text-xl font-semibold">Transparency</h3>
            <p className="text-muted-foreground">
              We believe in clear communication and straightforward terms. No hidden fees, 
              no confusing jargon—just honest, upfront leasing agreements.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg space-y-3">
            <h3 className="text-xl font-semibold">Flexibility</h3>
            <p className="text-muted-foreground">
              Every business is unique. We craft leasing solutions tailored to your specific 
              needs, timeline, and financial situation.
            </p>
          </div>
          
          <div className="p-6 border rounded-lg space-y-3">
            <h3 className="text-xl font-semibold">Innovation</h3>
            <p className="text-muted-foreground">
              We continuously update our approach to match the evolving needs of modern businesses, 
              leveraging technology to simplify and streamline the leasing process.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center">Our History</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto">
          Founded in 2010, MALTA has grown from a small local leasing company to a trusted 
          provider of specialized financial solutions across multiple industries. Over the years, 
          we've helped hundreds of businesses modernize their equipment and fleet while 
          preserving their working capital.
        </p>
        
        <div className="border-l-4 border-primary pl-6 max-w-2xl mx-auto space-y-6">
          <div className="relative">
            <h3 className="text-xl font-semibold">2010: Our Beginning</h3>
            <p className="text-muted-foreground">
              MALTA was founded with a vision to make specialized equipment leasing accessible to small 
              and medium-sized businesses.
            </p>
          </div>
          
          <div className="relative">
            <h3 className="text-xl font-semibold">2015: Expanding Services</h3>
            <p className="text-muted-foreground">
              We expanded our services to include automotive fleet leasing and opened our second office.
            </p>
          </div>
          
          <div className="relative">
            <h3 className="text-xl font-semibold">2020: Digital Transformation</h3>
            <p className="text-muted-foreground">
              We launched our digital platform, allowing clients to apply, manage, and track their 
              leases online.
            </p>
          </div>
          
          <div className="relative">
            <h3 className="text-xl font-semibold">Today</h3>
            <p className="text-muted-foreground">
              MALTA continues to grow, innovate, and set new standards in the financial leasing industry.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Contact our team today to discuss how MALTA's leasing solutions can help your business 
          grow without compromising your financial flexibility.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md">
            Contact Us
          </a>
          <a href="/services" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2 rounded-md">
            Explore Our Services
          </a>
        </div>
      </div>
    </div>
  )
} 