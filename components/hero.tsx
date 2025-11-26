import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-background via-secondary/5 to-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Dietify – Your Personal Online <span className="text-primary">Dietician</span>
          </h1>

          <p className="text-xl text-foreground/70 mb-8 text-balance leading-relaxed">
            Personalized diet plans, expert nutritional guidance, and disease-specific programs crafted just for you
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 w-full sm:w-auto"
              >
                Book Your Appointment
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto bg-transparent"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/50 rounded-lg backdrop-blur">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-foreground/70">Happy Clients</p>
          </div>
          <div className="text-center p-6 bg-white/50 rounded-lg backdrop-blur">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-foreground/70">Success Rate</p>
          </div>
          <div className="text-center p-6 bg-white/50 rounded-lg backdrop-blur">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <p className="text-foreground/70">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
