import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

interface PackageCardProps {
  title: string
  duration: 'weekly' | 'monthly' | 'custom'
  customDuration?: string
  pricing: number
  features: string[]
}

export default function PackageCard({ title, duration, customDuration, pricing, features }: PackageCardProps) {
  // Format duration display
  const displayDuration = duration === 'custom' && customDuration 
    ? customDuration 
    : duration === 'weekly' 
      ? '1 Week' 
      : duration === 'monthly' 
        ? '1 Month' 
        : duration

  // Format price
  const displayPrice = `₹${pricing.toLocaleString('en-IN')}`
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-smooth border border-border flex flex-col h-full">
      <div className="p-8 grow">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-foreground/60 mb-6">{displayDuration}</p>

        <div className="mb-8">
          <span className="text-4xl font-bold text-primary">{displayPrice}</span>
        </div>

        <div className="space-y-4">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground/70">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 border-t border-border">
        <Link href="/book" className="block">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Book Now</Button>
        </Link>
      </div>
    </div>
  )
}
