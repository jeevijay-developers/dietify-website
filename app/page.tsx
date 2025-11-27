"use client";
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Heart, HeartPulse, Leaf, Scale, Shield, ShieldCheck, Sparkles, Target } from "lucide-react"
import WhyChoose from "@/components/why-choose"
import NavigationComponent from "@/components/navigation"
// import WhoWeAre from "@/components/who-we-are"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Faqs from "@/components/faqs"
import CtaBanner from "@/components/cta-banner"
import Footer from "@/components/footer"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"

export default function Home() {
  const focusAreas = [
    {
      title: "Heart Health",
      description: "Cardio-protective diets tailored for hypertension, cholesterol, and post-cardiac care.",
      icon: HeartPulse,
    },
    {
      title: "Weight Management",
      description: "Metabolism-friendly meal plans that balance satiety, macros, and lifestyle routines.",
      icon: Scale,
    },
    {
      title: "Immunity Boosting",
      description: "Antioxidant-rich protocols to strengthen defenses during stress or recovery phases.",
      icon: Shield,
    },
    {
      title: "Healthy Aging",
      description: "Nourishment strategies that protect bone density, cognition, and long-term vitality.",
      icon: Sparkles,
    },
  ]

  return (
    <>
      <NavigationComponent />
      <main>
        <Hero />
        {/* About Section */}
        <section className="py-14 px-2 sm:py-24 sm:px-4 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center sm:mb-16">
              <h2 className="text-2xl font-extrabold text-foreground mb-2 sm:text-4xl sm:mb-4">About <span className="text-primary">DietMentor</span></h2>
              <p className="text-[13px] text-foreground/70 text-balance sm:text-lg">Personalized nutrition care that meets you where you are.</p>
            </div>

            <div className="flex flex-col gap-8 sm:gap-16 md:flex-row md:items-center">
              <div className="flex-1 min-w-0 flex flex-col justify-center items-center sm:items-start">
                <h3 className="text-lg font-bold text-foreground mb-2 text-center sm:text-3xl md:text-4xl sm:text-left">Transforming Lives Through Nutrition</h3>
                <div className="space-y-3 sm:space-y-5 align-center">
                  <p className="text-[13px] text-foreground/70 text-balance sm:text-lg ">
                    We work with the vision to ease complications related to diseases, diagnosis, or lifestyle modifications.<br className="block sm:hidden" />
                    Our purpose is to serve nutrition in its best way as preventive care before you may face any complicated health issues.
                  </p>
                  <p className="text-[13px] text-foreground/70 text-balance sm:text-lg ">
                    Whether you are managing a chronic condition, looking to lose weight, or simply want to adopt a healthier lifestyle, we guide you every step of the way.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-4">
                  {["Certified & Experienced Dieticians",
                    "Science-Based Nutrition Plans",
                    "Personalized Approach to Health",
                    "Ongoing Support & Monitoring",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 bg-primary/5 rounded-lg px-2 py-1 sm:px-3 sm:py-2">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      <span className="text-xs sm:text-sm font-medium text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 min-w-0 mt-10 md:mt-0 flex flex-col justify-center items-center sm:items-start">
                {/* Mobile: Carousel */}
                <div className="hidden sm:block">
                  <Swiper
                    spaceBetween={16}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={true}
                    style={{ paddingBottom: "2.5rem" }}
                  >
                    {[
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
                    ].map((feature) => (
                      <SwiperSlide key={feature.title}>
                        <div
                          className="group relative overflow-hidden rounded-2xl border border-white/40 bg-linear-to-br from-[#F0FBF7] via-white to-[#EEF5FF] p-3 sm:p-6 shadow-[0_15px_40px_rgba(20,128,90,0.10)] transition-all duration-500 transform-gpu hover:-translate-y-2 hover:scale-105 hover:shadow-[0_25px_60px_rgba(20,128,90,0.12)] w-64 mx-auto"
                        >
                          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <div className="absolute -top-10 right-0 h-20 w-20 rounded-full bg-primary/20 blur-2xl" />
                          </div>
                          <div className="relative z-10">
                            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                              <feature.icon className="h-5 w-5" />
                            </div>
                            <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                            <p className="mt-1 text-xs text-foreground/60">{feature.description}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {/* Desktop: Grid */}
                <div className="hidden sm:grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 cursor-poi">
                  {[
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
                  ].map((feature) => (
                    <div
                      key={feature.title}
                      className="group relative overflow-hidden rounded-3xl border border-white/40 bg-linear-to-br from-[#F0FBF7] via-white to-[#EEF5FF] p-6 shadow-[0_25px_60px_rgba(20,128,90,0.12)] transition-all duration-500 transform-gpu hover:-translate-y-3 hover:scale-105 hover:shadow-[0_35px_90px_rgba(20,128,90,0.18)]"
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <div className="absolute -top-16 right-0 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
                      </div>
                      <div className="relative z-10">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                        <p className="mt-1 text-sm text-foreground/60">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />

        


  <Testimonials />

        <WhyChoose />

        <Faqs />

        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
