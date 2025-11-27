"use client"

import { Star } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Lost 15 kg",
      text: "Dietify changed my relationship with food. The personalized meal plans made everything so simple!",
      rating: 5,
      initial: "P",
    },
    {
      name: "Rajesh Kumar",
      role: "Diabetes Management",
      text: "My blood sugar levels are now well-controlled. Best investment for my health!",
      rating: 5,
      initial: "R",
    },
    {
      name: "Anjali Patel",
      role: "PCOS Success Story",
      text: "The diet plan helped me manage my PCOS symptoms effectively. Highly recommended!",
      rating: 5,
      initial: "A",
    },
    {
      name: "Sarthak Verma",
      role: "Thyroid Balance",
      text: "Weekly check-ins and realistic meal swaps brought my thyroid markers within range without feeling deprived.",
      rating: 5,
      initial: "S",
    },
    {
      name: "Nidhi Kapoor",
      role: "Postpartum Wellness",
      text: "I regained strength and energy after childbirth thanks to sustainable meal frameworks and mindful coaching.",
      rating: 5,
      initial: "N",
    },
    {
      name: "Omkar Joshi",
      role: "Cholesterol Control",
      text: "Within 90 days my lipid profile improved drastically while still enjoying family meals.",
      rating: 5,
      initial: "O",
    },
    {
      name: "Ishita Singh",
      role: "PCOD Relief",
      text: "Structured meals plus lifestyle tweaks reduced bloating and brought my cycles back on track.",
      rating: 5,
      initial: "I",
    },
    {
      name: "Vikram Desai",
      role: "Athlete Nutrition",
      text: "Performance-focused plans helped me shave minutes off my half-marathon timing without burnout.",
      rating: 5,
      initial: "V",
    },
    {
      name: "Meera Joseph",
      role: "Gut Health Reset",
      text: "Targeted elimination and reintroduction steps finally settled my gut and boosted overall immunity.",
      rating: 5,
      initial: "M",
    },
  ]

  return (
    <section className="bg-secondary/10 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-center sm:mb-16">
          <h2 className="text-xl font-bold text-foreground mb-2 text-balance sm:text-4xl sm:mb-4">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-[13px] text-foreground/70 text-balance sm:text-lg">
            Real results from clients who trusted Dietify.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          slidesPerGroup={1}
          grabCursor
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.4, slidesPerGroup: 1 },
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={testimonial.name + i}>
              <div className="group h-full rounded-3xl border border-white/60 bg-white/90 p-8 shadow-[0_25px_60px_rgba(16,83,60,0.1)] backdrop-blur transition-all duration-500 transform-gpu hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_45px_100px_rgba(16,83,60,0.18)]">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-lg text-foreground/80 italic">“{testimonial.text}”</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
