import { CheckCircle2, Heart, Leaf, ShieldCheck, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

const checklist = [
  "Certified & Experienced Dieticians",
  "Science-Based Nutrition Plans",
  "Personalized Approach to Health",
  "Ongoing Support & Monitoring",
]

const featureCards = [
  {
    title: "Trusted Care",
    description: "Evidence-based approaches",
    icon: ShieldCheck,
  },
  {
    title: "Goal Focused",
    description: "Achieve your health targets",
    icon: Target,
  },
  {
    title: "Holistic Health",
    description: "Mind & body wellness",
    icon: Heart,
  },
  {
    title: "Natural Solutions",
    description: "Sustainable nutrition",
    icon: Leaf,
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white">
      

      <section className="px-2 py-10 sm:px-4 sm:py-20">
        <div className="mx-auto flex flex-col max-w-6xl gap-8 md:flex-row md:gap-10 md:items-center">
          <div className="flex-1 space-y-4">
            {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">Founder Profile</p> */}
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center w-full">Meet Sukriti Kumari</h2>
            <p className="text-base sm:text-lg text-foreground/70">
              B.Sc. in Clinical Nutrition & Dietetics · M.Sc. in Food Nutrition & Dietetics (Gold Medalist) from SHUATS
              Allahabad. Internship experience at CMC Ludhiana and AIIMS New Delhi.
            </p>
            <p className="text-base sm:text-lg text-foreground/70">
              Research scholar at Patna University with over 15 years in multi-speciality hospitals. Twice honored as
              the Best Dietician of Bihar by the Bihar Medical Summit with multiple publications in international
              journals.
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-foreground/80">
              <li>Total Experience: 15+ Years</li>
              <li>Accolades: Two-time Best Dietician of Bihar Award</li>
              <li>Research: Published papers in international journals</li>
            </ul>

            <div className="mt-6 flex flex-col gap-3 text-sm sm:text-base text-foreground/80">
              <a href="mailto:sukriti.dietician23@gmail.com" className="text-primary font-semibold">
                Email: sukriti.dietician23@gmail.com
              </a>
              <a href="tel:+916287094615" className="text-primary font-semibold">
                Phone: +91 62870 94615
              </a>
            </div>
          </div>

          <div className="flex-1 mt-10 md:mt-0">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#d5f5e7] via-white to-[#e1edff] p-4 sm:p-8 shadow-[0_25px_80px_rgba(16,83,60,0.18)]">
              <div className="absolute inset-0 opacity-70">
                <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.65),rgba(199,243,223,0.4))]" />
              </div>
              <div className="relative flex flex-col items-center gap-4 sm:gap-5 rounded-2xl border border-white/40 bg-white/85 p-4 sm:p-6 text-center backdrop-blur">
                <div className="relative h-40 w-40 sm:h-60 sm:w-60 overflow-hidden rounded-[20px] sm:rounded-[28px] shadow-[0_20px_60px_rgba(16,83,60,0.18)]">
                  <Image src="/founder.JPG" alt="Sukriti Kumari" fill sizes="160px, 240px" className="object-cover" priority />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">Your Dietician</p>
                  <h3 className="mt-2 sm:mt-3 text-lg sm:text-2xl font-bold text-foreground">Sukriti Kumari</h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-base text-foreground/70">Clinical Nutritionist & Research Scholar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <section className="bg-primary px-2 py-10 sm:px-4 sm:py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Ready to Work With Our Team?</h2>
          <p className="mt-4 text-base sm:text-lg opacity-90">
            Schedule a consultation to receive a customized plan and continuous support from our certified dieticians.
          </p>
          <Link href="/book" className="mt-8 inline-flex">
            <Button size="lg" variant="secondary">
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
