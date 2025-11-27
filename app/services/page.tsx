
"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PackageCard from "@/components/package-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "keen-slider/keen-slider.min.css";
import { useRef, useEffect } from "react";

type Package = {
  name: string;
  duration: string;
  price: string;
  includes: string[];
};

type Section = {
  category: string;
  packages: Package[];
};

type KeenSliderCarouselProps = {
  items: Package[];
};

function KeenSliderCarousel({ items }: KeenSliderCarouselProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let slider: any = null;
    if (sliderRef.current) {
      import("keen-slider").then((mod) => {
        if (mod && mod.default) {
          slider = new mod.default(sliderRef.current!, {
            slides: { perView: 1, spacing: 16 },
            loop: true,
          });
        }
      });
    }
    return () => {
      if (slider && typeof slider.destroy === "function") slider.destroy();
    };
  }, []);
  return (
    <div ref={sliderRef} className="keen-slider">
      {items.map((pkg, idx) => (
        <div className="keen-slider__slide" key={idx}>
          <PackageCard {...pkg} />
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  const packages: Section[] = [
    {
      category: "Weight Loss",
      packages: [
        {
          name: "1-Month Program",
          duration: "1 month",
          price: "₹4,999",
          includes: ["Initial consultation", "Custom meal plan", "Weekly check-ins", "Recipe suggestions"],
        },
        {
          name: "3-Month Program",
          duration: "3 months",
          price: "₹12,999",
          includes: [
            "Initial consultation",
            "Custom meal plan",
            "Bi-weekly check-ins",
            "Grocery lists",
            "Progress tracking",
          ],
        },
        {
          name: "6-Month Program",
          duration: "6 months",
          price: "₹22,999",
          includes: ["All 3-month benefits", "Monthly reviews", "Fitness integration", "Lifestyle coaching"],
        },
      ],
    },
    {
      category: "Disease Management",
      packages: [
        {
          name: "Diabetes Management",
          duration: "3 months",
          price: "₹8,999",
          includes: ["Blood sugar tracking", "Carb management", "Lab result analysis", "Medication coordination"],
        },
        {
          name: "PCOS/PCOD Plan",
          duration: "3 months",
          price: "₹9,999",
          includes: ["Hormonal assessment", "PCOS-specific recipes", "Supplement guidance", "Stress management"],
        },
        {
          name: "Thyroid Diet Plan",
          duration: "3 months",
          price: "₹7,999",
          includes: ["TSH optimization", "Iodine management", "Metabolism boost", "Energy management"],
        },
      ],
    },
    {
      category: "Specialized Programs",
      packages: [
        {
          name: "Gut Health Program",
          duration: "2 months",
          price: "₹7,999",
          includes: [
            "Microbiome assessment",
            "Probiotic guidance",
            "Digestion optimization",
            "Food sensitivity testing",
          ],
        },
        {
          name: "Heart-Friendly Diet",
          duration: "3 months",
          price: "₹8,999",
          includes: ["Cholesterol management", "Sodium reduction", "Heart-healthy recipes", "Blood pressure tracking"],
        },
        {
          name: "Custom Diet Plan",
          duration: "Flexible",
          price: "₹5,999/month",
          includes: ["Personalized assessment", "Flexible duration", "Custom goals", "Ongoing support"],
        },
      ],
    },
  ];
        // ...existing code for packages array...
  return (
    <>
      <Navigation />
      <main>
        <section className="py-16 px-4 bg-linear-to-br from-background to-secondary/5">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6 text-balance text-center">Our Packages & Programs</h1>
            <p className="text-xl text-foreground/70 text-balance text-center">Choose the perfect program for your health goals</p>
          </div>
        </section>

        {packages.map((section, i) => (
          <section key={i} className={`py-16 px-4 ${i % 2 === 0 ? "bg-background" : "bg-secondary/5"}`}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-balance text-center">{section.category}</h2>
              {/* Carousel for mobile, grid for desktop */}
              <div className="block md:hidden">
                <KeenSliderCarousel items={section.packages} />
              </div>
              <div className="hidden md:grid md:grid-cols-3 gap-8">
                {section.packages.map((pkg, j) => (
                  <PackageCard key={j} {...pkg} />
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-balance">Ready to Choose Your Program?</h2>
            <Link href="/book">
              <Button size="lg" variant="secondary">
                Book Appointment Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
// ...end of file, no extra closing brace...
