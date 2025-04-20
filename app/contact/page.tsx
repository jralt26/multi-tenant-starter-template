import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: 'Contact Us | MALTA - Financial Leasing Services',
  description: 'Get in touch with our team for any inquiries about our leasing solutions',
};

export default function ContactPage() {
  return (
    <div className="container py-10 md:py-16 space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Have questions about our leasing solutions? Get in touch with our team for personalized assistance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="(+34) XXX XXX XXX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" rows={5} required />
              </div>
              <Button type="submit" className="w-full">Submit Inquiry</Button>
            </form>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Our team is available Monday through Friday, 9am to 6pm.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Headquarters</h3>
              <address className="not-italic text-muted-foreground">
                Calle Principal 123<br />
                28001 Madrid, Spain
              </address>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-muted-foreground">+34 91 123 4567</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-muted-foreground">info@malta-leasing.com</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9am - 6pm<br />
                Saturday & Sunday: Closed
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 