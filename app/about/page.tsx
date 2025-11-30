import { CheckCircle2, Heart, Leaf, ShieldCheck, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import WhoWeAre from "@/components/who-we-are";

const checklist = [
  "Certified & Experienced Dieticians",
  "Science-Based Nutrition Plans",
  "Personalized Approach to Health",
  "Ongoing Support & Monitoring",
];

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
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="bg-white pt-[60px]">
        <section className="px-2 py-10 sm:px-4 sm:py-20">
          <div className="mx-auto flex flex-col max-w-6xl gap-6 md:flex-row md:gap-10 md:items-center">
            <div className="flex-1 space-y-4 mt-10 md:mt-0">
              {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">Founder Profile</p> */}
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground w-full">
                Meet Sukriti Kumari
              </h2>
              <p className="text-base sm:text-lg text-foreground/70">
                B.Sc. in Clinical Nutrition & Dietetics · M.Sc. in Food
                Nutrition & Dietetics (Gold Medalist) from SHUATS Allahabad.
                Internship experience at CMC Ludhiana and AIIMS New Delhi.
              </p>
              <p className="text-base sm:text-lg text-foreground/70">
                Research scholar at Patna University with over 15 years in
                multi-speciality hospitals. Twice honored as the Best Dietician
                of Bihar by the Bihar Medical Summit with multiple publications
                in international journals.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-foreground/80">
                <li>Total Experience: 15+ Years</li>
                <li>Accolades: Two-time Best Dietician of Bihar Award</li>
                <li>Research: Published papers in international journals</li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 text-sm sm:text-base text-foreground/80">
                <a
                  href="mailto:sukriti.dietician23@gmail.com"
                  className="text-primary font-semibold"
                >
                  Email: sukriti.dietician23@gmail.com
                </a>
                <a
                  href="tel:+916287094615"
                  className="text-primary font-semibold"
                >
                  Phone: +91 62870 94615
                </a>
              </div>
            </div>

            <div className="flex-1 mt-10 md:mt-0">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-1 rounded-[40px]" aria-hidden />
                <div className="relative overflow-hidden rounded-[34px] border border-white/15 bg-slate-900/80 text-white shadow-[0_25px_80px_rgba(9,9,26,0.65)]">
                  <div className="relative h-[480px] sm:h-[520px]">
                    <Image
                      src="/founder.JPG"
                      alt="Sukriti Kumari"
                      fill
                      sizes="(max-width: 640px) 320px, 420px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/40 to-slate-950" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-6 pb-10 pt-16 text-white sm:px-10">
                      <h3 className="text-3xl font-bold">Sukriti Kumari</h3>
                      <p className="text-sm uppercase tracking-[0.4em] text-emerald-200">
                        Founder & Head Dietician
                      </p>
                      <p className="text-base text-white/80">
                        Clinical Nutritionist · Research Scholar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhoWeAre />

        <section className="bg-primary px-2 py-10 sm:px-4 sm:py-16 text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Ready to Work With Our Team?
            </h2>
            <p className="mt-4 text-base sm:text-lg opacity-90">
              Schedule a consultation to receive a customized plan and
              continuous support from our certified dieticians.
            </p>
            <Link href="/book" className="mt-8 inline-flex">
              <Button
                size="lg"
                variant="secondary"
                className="text-black bg-white font-semibold hover:bg-gray-300 cursor-pointer"
              >
                Book Your Appointment
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
