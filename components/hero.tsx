"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, CalendarCheck, Users } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

const stats = [
  { label: "Happy Clients", value: "5000+", icon: Users },
  { label: "Success Rate", value: "98%", icon: Award },
  { label: "Years Experience", value: "10+", icon: CalendarCheck },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#EAF7F1] via-white to-[#E7F0FF] px-4 py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-10 top-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-112 w-md rounded-full bg-secondary/30 blur-[160px]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80 sm:mb-4 sm:text-sm">
          Personalized Nutrition
        </p>
        <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
          <span className="inline text-foreground">DietMentor</span>
          <span className="inline ml-2">Your Personal</span>
          <span className="inline text-primary ml-2">Online Dietician</span>
        </h1>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-foreground/70 sm:mt-6 sm:text-lg md:text-xl">
          Personalized diet plans, expert nutritional guidance, and disease-specific programs crafted just for you.
          Get meal plans that fit your lifestyle and show results fast.
        </p>

        <div className="mt-8 flex w-full flex-row items-center gap-2 sm:w-auto sm:gap-4">
          <Link href="/book" className="w-1/2 sm:w-auto">
            <Button
              size="sm"
              className="w-full min-w-0 px-2 py-2 justify-center bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:size-lg sm:min-w-[220px] sm:px-4 sm:py-3 sm:text-base"
            >
              Book
              <ArrowRight className="ml-1 h-4 w-4 sm:ml-2 sm:h-5 sm:w-5" />
            </Button>
          </Link>
          <Link href="/services" className="w-1/2 sm:w-auto">
            <Button
              size="sm"
              variant="outline"
              className="w-full min-w-0 px-2 py-2 justify-center border-primary text-primary hover:bg-primary/5 text-xs sm:size-lg sm:min-w-[220px] sm:px-4 sm:py-3 sm:text-base"
            >
              Services
            </Button>
          </Link>
        </div>

        <div className="mt-12 w-full md:mt-16">
          {/* Mobile: Carousel */}
          <div className="block sm:hidden">
            <Swiper
              spaceBetween={12}
              slidesPerView={1}
              pagination={{ clickable: true }}
              style={{ paddingBottom: "2rem" }}
            >
              {stats.map((stat) => (
                <SwiperSlide key={stat.label}>
                  <div className="rounded-2xl border border-white/80 bg-white/95 p-4 text-center shadow-[0_8px_20px_rgba(28,199,141,0.10)] backdrop-blur-sm max-w-xs mx-auto">
                    <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <div className="text-xl font-bold text-foreground">{stat.value}</div>
                    <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground/60">
                      {stat.label}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Desktop: Grid */}
          <div className="hidden sm:grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/80 bg-white/90 p-6 text-center shadow-[0_20px_60px_rgba(28,199,141,0.12)] backdrop-blur-sm sm:p-7"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:mb-4 sm:h-14 sm:w-14">
                  <stat.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div className="text-3xl font-bold text-foreground sm:text-4xl">{stat.value}</div>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-foreground/60 sm:mt-2 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
