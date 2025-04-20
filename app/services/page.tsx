export const metadata = {
  title: 'Our Services | MALTA - Financial Leasing Services',
  description: 'Explore our specialized machinery and automotive leasing solutions tailored for businesses of all sizes.',
}

export default function ServicesPage() {
  return (
    <div className="container py-10 md:py-16 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Our Leasing Services</h1>
        <p className="text-xl text-muted-foreground">
          Flexible financial solutions tailored to your business needs
        </p>
      </div>

      {/* Service Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Machinery Leasing */}
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted h-60 flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-lg font-medium">Industrial Machinery Image</p>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">Machinery Leasing</h2>
            <p className="text-muted-foreground">
              Access the latest industrial equipment and machinery without the burden of ownership. Our 
              machinery leasing solutions help businesses stay competitive with up-to-date technology.
            </p>
            <a 
              href="/contact" 
              className="inline-block text-primary font-medium hover:underline"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* Automotive Leasing */}
        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted h-60 flex items-center justify-center">
            <div className="text-center p-6">
              <p className="text-lg font-medium">Commercial Vehicles Image</p>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">Automotive Leasing</h2>
            <p className="text-muted-foreground">
              From commercial trucks to company cars, our automotive leasing services provide businesses 
              with flexible transportation solutions that scale with your needs.
            </p>
            <a 
              href="/contact" 
              className="inline-block text-primary font-medium hover:underline"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="space-y-6 py-8">
        <h2 className="text-3xl font-bold text-center">How Our Leasing Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold">Consultation</h3>
            <p className="text-muted-foreground">
              We assess your business needs and identify the most suitable leasing arrangement.
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold">Proposal</h3>
            <p className="text-muted-foreground">
              We provide a transparent leasing proposal with clear terms and conditions.
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold">Acquisition</h3>
            <p className="text-muted-foreground">
              Once approved, we acquire the equipment or vehicles and deliver them to you.
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto text-xl font-bold">4</div>
            <h3 className="text-xl font-semibold">Management</h3>
            <p className="text-muted-foreground">
              Throughout the leasing period, we provide ongoing support and maintenance options.
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Services */}
      <div className="space-y-10">
        <h2 className="text-3xl font-bold text-center">Our Detailed Services</h2>
        
        {/* Machinery Leasing Details */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Machinery Leasing Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg space-y-3">
              <h4 className="text-xl font-semibold">Manufacturing Equipment</h4>
              <p className="text-muted-foreground">
                CNC machines, assembly lines, robotics, and specialized manufacturing tools to 
                enhance your production capabilities.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg space-y-3">
              <h4 className="text-xl font-semibold">Construction Machinery</h4>
              <p className="text-muted-foreground">
                Excavators, bulldozers, cranes, and other heavy equipment necessary for 
                construction projects of all sizes.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg space-y-3">
              <h4 className="text-xl font-semibold">Agricultural Equipment</h4>
              <p className="text-muted-foreground">
                Tractors, harvesters, irrigation systems, and specialized farming equipment 
                to maximize agricultural productivity.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg space-y-3">
              <h4 className="text-xl font-semibold">Medical Equipment</h4>
              <p className="text-muted-foreground">
                Diagnostic machines, surgical equipment, and other healthcare technology 
                for medical facilities.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg space-y-3">
              <h4 className="text-xl font-semibold">Office Equipment</h4>
              <p className="text-muted-foreground">
                Advanced printers, copiers, telecommunication systems, and other office 
                machinery to streamline your operations.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg space-y-3">
              <h4 className="text-xl font-semibold">Technology & IT</h4>
              <p className="text-muted-foreground">
                Servers, networking equipment, specialized computing systems, and other 
                IT infrastructure.
              </p>
            </div>
          </div>
        </div>
        
        {/* Automotive Leasing Details */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Automotive Leasing Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg space-y-3">
              <h4 className="text-xl font-semibold">Commercial Trucks</h4>
              <p className="text-muted-foreground">
                Delivery trucks, semi-trucks, and specialized commercial vehicles for 
                logistics and transportation needs.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg space-y-3">
              <h4 className="text-xl font-semibold">Fleet Vehicles</h4>
              <p className="text-muted-foreground">
                Company cars, service vehicles, and sales fleet vehicles with comprehensive 
                management and maintenance options.
              </p>
            </div>
            
            <div className="p-6 border rounded-lg space-y-3">
              <h4 className="text-xl font-semibold">Specialty Vehicles</h4>
              <p className="text-muted-foreground">
                Food trucks, mobile service units, and other customized vehicles for 
                specific business applications.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Benefits of MALTA Leasing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 text-primary p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Preserve Capital</h3>
              <p className="text-muted-foreground">
                Maintain your cash reserves for other business opportunities and operational expenses.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 text-primary p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Flexible Terms</h3>
              <p className="text-muted-foreground">
                Choose from various lease durations and payment schedules that align with your business cycle.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 text-primary p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Tax Advantages</h3>
              <p className="text-muted-foreground">
                Potential tax benefits as lease payments may be considered business expenses.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-primary/10 text-primary p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Stay Current</h3>
              <p className="text-muted-foreground">
                Easily upgrade to newer models at the end of your lease term, keeping your business competitive.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center space-y-6 py-8">
        <h2 className="text-3xl font-bold">Ready to Explore Your Leasing Options?</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Contact us today to discuss how our leasing solutions can be tailored to your specific needs.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/contact" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md">
            Get in Touch
          </a>
          <a href="/apply" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-md">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  )
} 