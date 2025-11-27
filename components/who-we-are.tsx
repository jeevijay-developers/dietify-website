// import { HeartPulse, Scale, Shield, Sparkles } from "lucide-react"
// import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/css"
// import "swiper/css/navigation"

// const focusAreas = [
//   {
//     title: "Heart Health",
//     description: "Cardio-protective diets tailored for hypertension, cholesterol, and post-cardiac care.",
//     icon: HeartPulse,
//   },
//   {
//     title: "Weight Management",
//     description: "Metabolism-friendly meal plans that balance satiety, macros, and lifestyle routines.",
//     icon: Scale,
//   },
//   {
//     title: "Immunity Boosting",
//     description: "Antioxidant-rich protocols to strengthen defenses during stress or recovery phases.",
//     icon: Shield,
//   },
//   {
//     title: "Healthy Aging",
//     description: "Nourishment strategies that protect bone density, cognition, and long-term vitality.",
//     icon: Sparkles,
//   },
// ]

// export default function WhoWeAre() {
//   return (
//     <section className="bg-linear-to-br from-[#F4FBF8] via-white to-[#EEF5FF] px-2 py-8 sm:px-4 sm:py-24">
//       <div className="mx-auto max-w-6xl">
//         <div className="mb-6 text-center sm:mb-16">
//           <h2 className="text-xl font-bold text-foreground mb-2 text-balance sm:text-4xl sm:mb-4">
//             Who We <span className="text-primary">Are</span>
//           </h2>
//           <p className="text-[13px] text-foreground/70 text-balance sm:text-lg">
//             Dedicated to delivering personalized nutrition for better health.
//           </p>
//         </div>
//         <div className="grid gap-3 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//           {/* Mobile: Carousel */}
//           <div className="block sm:hidden">
//             <Swiper
//               spaceBetween={12}
//               slidesPerView={1}
//               pagination={{ clickable: true }}
//               navigation={true}
//               style={{ paddingBottom: "2rem" }}
//             >
//               {focusAreas.map((area) => (
//                 <SwiperSlide key={area.title}>
//                   <div className="group rounded-2xl border border-primary/10 bg-white p-5 shadow-[0_10px_30px_rgba(15,90,60,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(15,90,60,0.14)]">
//                     <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform">
//                       <area.icon className="h-6 w-6" />
//                     </div>
//                     <h3 className="text-base font-semibold text-foreground">{area.title}</h3>
//                     <p className="mt-1 text-[13px] text-foreground/70">{area.description}</p>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//           {/* Desktop: Grid */}
//           <div className="hidden sm:flex gap-8 justify-center items-center py-16">
//             {focusAreas.map((area) => (
//               <div
//                 key={area.title}
//                 className="w-[260px] bg-white rounded-xl border border-[#e5e7eb] shadow-md flex flex-col items-center py-14 px-6 transition-all duration-300 hover:shadow-lg"
//               >
//                 <div className="mb-6 flex items-center justify-center">
//                   <div className="flex items-center justify-center rounded-full bg-primary/10" style={{ width: 80, height: 80 }}>
//                     <area.icon className="text-primary" style={{ width: 36, height: 36 }} />
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-bold text-foreground text-center mb-2">{area.title}</h3>
//                 <p className="text-[15px] text-foreground/70 text-center">{area.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
