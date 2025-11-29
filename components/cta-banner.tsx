import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CtaBanner() {
  return (
    <section className="bg-primary px-4 py-16 text-primary-foreground">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-balance">Ready to Start Your Health Journey?</h2>
        <p className="mb-8 text-lg opacity-90 text-balance">
          Book your first consultation with our certified dieticians today
        </p>
        <Link href="/book">
          <Button size="lg" variant="secondary" className="flex items-center gap-2 mx-auto text-black bg-white font-semibold hover:bg-gray-300 cursor-pointer">
            Book Appointment
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
