import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

interface PackageCardProps {
  name: string
  duration: string
  price: string
  includes: string[]
}

export default function PackageCard({ name, duration, price, includes }: PackageCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-smooth border border-border flex flex-col h-full">
      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-foreground/60 mb-6">{duration}</p>

        <div className="mb-8">
          <span className="text-4xl font-bold text-primary">{price}</span>
        </div>

        <div className="space-y-4">
          {includes.map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground/70">{item}</span>
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
