"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { createClient } from "@/lib/supabase/client"
import { User } from "@supabase/supabase-js"

interface ApplicationFormProps {
  user: User
}

export function ApplicationForm({ user }: ApplicationFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const supabase = createClient()

  const [formData, setFormData] = useState({
    companyName: "",
    businessType: "",
    yearsFounded: "",
    phoneNumber: "",
    address: "",
    equipmentType: "",
    estimatedValue: "",
    leaseTerm: "36",
    additionalInfo: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Submit to Supabase table
      const { error } = await supabase
        .from('lease_applications')
        .insert({
          user_id: user.id,
          company_name: formData.companyName,
          business_type: formData.businessType,
          years_founded: formData.yearsFounded,
          phone_number: formData.phoneNumber,
          address: formData.address,
          equipment_type: formData.equipmentType,
          estimated_value: formData.estimatedValue,
          lease_term: formData.leaseTerm,
          additional_info: formData.additionalInfo,
          status: 'pending'
        })

      if (error) throw error

      toast({
        title: "Application Submitted",
        description: "We'll be in touch soon regarding your application.",
      })

      router.push('/dashboard')
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      })
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Business Information</h2>
        <Separator />
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="businessType">Business Type</Label>
            <Input
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="yearsFounded">Years in Business</Label>
            <Input
              id="yearsFounded"
              name="yearsFounded"
              type="number"
              value={formData.yearsFounded}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Business Address</Label>
          <Textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Leasing Information</h2>
        <Separator />
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="equipmentType">Equipment Type</Label>
            <Input
              id="equipmentType"
              name="equipmentType"
              value={formData.equipmentType}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="estimatedValue">Estimated Value (EUR)</Label>
            <Input
              id="estimatedValue"
              name="estimatedValue"
              type="number"
              value={formData.estimatedValue}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="leaseTerm">Lease Term (Months)</Label>
            <select
              id="leaseTerm"
              name="leaseTerm"
              value={formData.leaseTerm}
              onChange={handleChange}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="12">12 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
              <option value="48">48 months</option>
              <option value="60">60 months</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="additionalInfo">Additional Information</Label>
          <Textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Tell us more about your leasing needs..."
            className="min-h-32"
          />
        </div>
      </div>
      
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  )
} 