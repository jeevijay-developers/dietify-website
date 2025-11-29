
"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PackageCard from "@/components/package-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "keen-slider/keen-slider.min.css";
import { useRef, useEffect, useState } from "react";
import { dietPlanAPI, type DietPlan } from "@/lib/api";

type KeenSliderCarouselProps = {
  items: DietPlan[];
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
      {items.map((plan) => (
        <div
          className="keen-slider__slide px-2 flex justify-center"
          key={plan._id}
        >
          <div className="w-full max-w-xs sm:max-w-none">
            <PackageCard 
              title={plan.title}
              duration={plan.duration}
              customDuration={plan.customDuration}
              pricing={plan.pricing}
              features={plan.features}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  const [dietPlans, setDietPlans] = useState<DietPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDietPlans() {
      try {
        setLoading(true);
        setError(null);
        const data = await dietPlanAPI.getAllDietPlans();
        setDietPlans(data);
      } catch (err) {
        setError('Failed to load diet plans. Please try again later.');
        console.error('Error fetching diet plans:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchDietPlans();
  }, []);
  return (
    <>
      <Navigation />
      <main className="pt-[60px]">
        <section className="py-10 px-2 sm:py-16 sm:px-4 bg-linear-to-br from-background to-secondary/5">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-2xl font-extrabold text-primary mb-3 sm:text-5xl sm:mb-6 text-balance text-center">Our Packages & Programs</h1>
            <p className="text-[13px] text-foreground/70 text-balance sm:text-lg">Choose the perfect program for your health goals</p>
          </div>
        </section>

        {loading ? (
          <section className="py-20 px-4">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          </section>
        ) : error ? (
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-red-500 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="text-primary hover:text-primary/80 underline"
              >
                Try Again
              </button>
            </div>
          </section>
        ) : dietPlans.length === 0 ? (
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-foreground/70 text-lg">No diet plans available yet. Check back soon!</p>
            </div>
          </section>
        ) : (
          <section className="py-10 px-2 sm:py-16 sm:px-4 bg-background">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-lg font-bold text-primary mb-8 sm:text-3xl sm:mb-12 text-balance text-center">Available Diet Plans</h2>
              {/* Carousel for mobile, grid for desktop */}
              <div className="block md:hidden">
                <KeenSliderCarousel items={dietPlans} />
              </div>
              <div className="hidden md:grid md:grid-cols-3 gap-8">
                {dietPlans.map((plan) => (
                  <PackageCard 
                    key={plan._id}
                    title={plan.title}
                    duration={plan.duration}
                    customDuration={plan.customDuration}
                    pricing={plan.pricing}
                    features={plan.features}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-10 px-2 sm:py-16 sm:px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-lg font-bold mb-4 sm:text-3xl sm:mb-6 text-balance">Ready to Choose Your Program?</h2>
            <Link href="/book">
              <Button size="lg" variant="secondary" className="text-black bg-white font-semibold hover:bg-gray-300 cursor-pointer" >
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
