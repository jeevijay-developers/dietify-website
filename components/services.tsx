import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Apple, Weight, Heart, Brain, Leaf } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Services() {
  const services = [
    {
      icon: Weight,
      title: "Weight Loss Programs",
      description: "Sustainable weight management with customized meal plans",
      color: "text-blue-500",
    },
    {
      icon: Heart,
      title: "Diabetes Management",
      description: "Blood sugar control through proper nutrition",
      color: "text-red-500",
    },
    {
      icon: Brain,
      title: "PCOS/PCOD Diet Plan",
      description: "Hormonal balance and symptom management",
      color: "text-purple-500",
    },
    {
      icon: Leaf,
      title: "Thyroid Diet Plan",
      description: "Nutrition for thyroid health and metabolism",
      color: "text-green-500",
    },
    {
      icon: Apple,
      title: "Gut Health Program",
      description: "Digestive wellness and microbiome restoration",
      color: "text-orange-500",
    },
    {
      icon: Heart,
      title: "Heart-Friendly Diet Plan",
      description: "Cardiovascular health through optimal nutrition",
      color: "text-pink-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 text-center sm:mb-16">
          <h2 className="text-xl font-bold text-foreground mb-2 text-balance sm:text-4xl sm:mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-[13px] text-foreground/70 text-balance sm:text-lg">
            Comprehensive nutrition solutions for various health conditions..
          </p>
        </div>

        {/* Mobile: Carousel */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            style={{ paddingBottom: "2.5rem" }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <SwiperSlide key={i}>
                  <div className="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_8px_20px_rgba(28,199,141,0.10)] backdrop-blur-sm max-w-xs mx-auto group flex items-start gap-3">
                    <Icon
                      className={`h-9 w-9 ${service.color} shrink-0 mt-1 group-hover:scale-110 transition-transform`}
                    />
                    <div className="flex flex-col items-start text-left w-full">
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-foreground/70 mb-3">
                        {service.description}
                      </p>
                      <Link href="/services">
                        <Button
                          variant="ghost"
                          className="text-primary hover:bg-foreground/10 text-xs px-3 py-1"
                        >
                          Learn More →
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-smooth border border-border group"
              >
                <Icon
                  className={`w-12 h-12 ${service.color} mb-4 group-hover:scale-110 transition-transform`}
                />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <Link href="/services">
                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary hover:text-white"
                  >
                    Learn More →
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View All Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
