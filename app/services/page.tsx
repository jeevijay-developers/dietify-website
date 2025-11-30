"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PackageCard from "@/components/package-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "keen-slider/keen-slider.min.css";
import { useRef, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categoryAPI, dietPlanAPI, type DietPlan } from "@/lib/api";

type KeenSliderCarouselProps = {
  items: DietPlan[];
  categoryLookup: Record<string, string>;
};

function KeenSliderCarousel({
  items,
  categoryLookup,
}: KeenSliderCarouselProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const sliderInstanceRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const basePerView = items.length > 1 ? 1.05 : 1;
  const smPerView = items.length > 1 ? Math.min(1.4, items.length) : 1;
  const mdPerView = items.length >= 2 ? Math.min(2, items.length) : 1;
  const lgPerView =
    items.length >= 3 ? Math.min(3, items.length) : Math.min(items.length, 2);
  const slideSpacing = items.length > 1 ? 16 : 0;
  useEffect(() => {
    let mounted = true;
    async function initSlider() {
      if (!sliderRef.current) return;
      const mod = await import("keen-slider");
      if (!mounted || !mod?.default) return;
      sliderInstanceRef.current = new mod.default(sliderRef.current, {
        loop: items.length > 3,
        slides: { perView: basePerView, spacing: slideSpacing },
        mode: "snap",
        rubberband: false,
        breakpoints: {
          "(min-width: 640px)": {
            slides: { perView: smPerView, spacing: slideSpacing + 2 },
          },
          "(min-width: 768px)": {
            slides: { perView: mdPerView, spacing: slideSpacing + 4 },
          },
          "(min-width: 1024px)": {
            slides: { perView: lgPerView, spacing: slideSpacing + 8 },
          },
        },
      });
      sliderInstanceRef.current.on("created", () => setIsLoaded(true));
      sliderInstanceRef.current.on("slideChanged", (slider: any) => {
        setCurrentSlide(slider.track.details.rel);
      });
    }
    initSlider();
    return () => {
      mounted = false;
      sliderInstanceRef.current?.destroy();
      sliderInstanceRef.current = null;
      setIsLoaded(false);
      setCurrentSlide(0);
    };
  }, [items.length]);

  const handlePrev = () => sliderInstanceRef.current?.prev();
  const handleNext = () => sliderInstanceRef.current?.next();
  const canNavigate = isLoaded && items.length > 1;
  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {items.map((plan) => (
          <div className="keen-slider__slide px-2" key={plan._id}>
            <div className="h-full">
              <PackageCard
                title={plan.title}
                duration={plan.duration}
                customDuration={plan.customDuration}
                pricing={plan.pricing}
                features={plan.features}
                category={
                  plan.category
                    ? categoryLookup[plan.category] ?? "Uncategorized"
                    : undefined
                }
                className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[340px] xl:max-w-[360px] mx-auto"
              />
            </div>
          </div>
        ))}
      </div>

      {canNavigate && (
        <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-sm hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex gap-2">
            {items.map((_, idx) => (
              <button
                key={`dot-${idx}`}
                type="button"
                onClick={() => sliderInstanceRef.current?.moveToIdx(idx)}
                className={`h-2 w-2 rounded-full transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                  currentSlide === idx ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  const [dietPlans, setDietPlans] = useState<DietPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [availableCategoryIds, setAvailableCategoryIds] = useState<string[]>(
    []
  );
  const [categoryLookup, setCategoryLookup] = useState<Record<string, string>>(
    {}
  );
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    async function fetchDietPlans() {
      try {
        setLoading(true);
        setError(null);
        const [plansData, categoriesData] = await Promise.all([
          dietPlanAPI.getAllDietPlans(),
          categoryAPI.getAllCategories().catch((categoryErr) => {
            console.error("Error fetching categories:", categoryErr);
            return [];
          }),
        ]);
        setDietPlans(plansData);
        const uniqueCategories = Array.from(
          new Set(
            plansData
              .map((plan) => plan.category?.trim())
              .filter((category): category is string => Boolean(category))
          )
        );
        setAvailableCategoryIds(uniqueCategories);
        const lookup = categoriesData.reduce<Record<string, string>>(
          (acc, category) => {
            acc[category._id] = category.name;
            return acc;
          },
          {}
        );
        setCategoryLookup(lookup);
      } catch (err) {
        setError("Failed to load diet plans. Please try again later.");
        console.error("Error fetching diet plans:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDietPlans();
  }, []);

  const filteredPlans = useMemo(() => {
    if (selectedCategory === "all") return dietPlans;
    return dietPlans.filter((plan) => plan.category === selectedCategory);
  }, [dietPlans, selectedCategory]);

  const averagePrice = useMemo(() => {
    if (!dietPlans.length) return 0;
    const total = dietPlans.reduce((sum, plan) => sum + plan.pricing, 0);
    return Math.round(total / dietPlans.length);
  }, [dietPlans]);

  const filterOptions = useMemo(() => {
    const categoryOptions = availableCategoryIds.map((id) => ({
      value: id,
      label: categoryLookup[id] ?? "Uncategorized",
    }));
    categoryOptions.sort((a, b) => a.label.localeCompare(b.label));
    return [{ value: "all", label: "All Plans" }, ...categoryOptions];
  }, [availableCategoryIds, categoryLookup]);

  const selectedCategoryHeading =
    selectedCategory === "all"
      ? "Available Diet Plans"
      : `${
          filterOptions.find((option) => option.value === selectedCategory)
            ?.label ?? "Focused"
        } Focused Diet Plans`;
  return (
    <>
      <Navigation />
      <main className="pt-[60px]">
        <section className="py-10 px-2 sm:py-16 sm:px-4 bg-linear-to-br from-background to-secondary/5">
          <div className="max-w-8xl mx-auto text-center">
            <h1 className="text-2xl font-extrabold text-primary mb-3 sm:text-5xl sm:mb-6 text-balance text-center">
              Our Packages & Programs
            </h1>
            <p className="text-[13px] text-foreground/70 text-balance sm:text-lg">
              Choose the perfect program for your health goals
            </p>
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
              <p className="text-foreground/70 text-lg">
                No diet plans available yet. Check back soon!
              </p>
            </div>
          </section>
        ) : (
          <section className="py-10 px-2 sm:py-16 sm:px-4 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="bg-transparent rounded-2xl p-6 sm:p-8 mb-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {filterOptions.map(({ value, label }) => {
                      const isActive = selectedCategory === value;
                      return (
                        <button
                          key={value}
                          onClick={() => setSelectedCategory(value)}
                          className={`px-4 py-2 rounded-full text-sm font-semibold border transition-smooth hover:shadow-sm ${
                            isActive
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-white text-foreground/80 border-border hover:border-primary/50"
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <h2 className="text-lg font-bold text-primary mb-8 sm:text-3xl sm:mb-12 text-balance text-center">
                {selectedCategoryHeading}
              </h2>
              {filteredPlans.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border p-10 text-center">
                  <p className="text-lg font-semibold text-foreground mb-2">
                    No plans in this category yet
                  </p>
                  <p className="text-foreground/70 text-sm">
                    Try choosing another category or come back soon for new
                    programs.
                  </p>
                </div>
              ) : (
                <div className="mt-4">
                  <KeenSliderCarousel
                    items={filteredPlans}
                    categoryLookup={categoryLookup}
                  />
                </div>
              )}
            </div>
          </section>
        )}

        <section className="py-10 px-2 sm:py-16 sm:px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-lg font-bold mb-4 sm:text-3xl sm:mb-6 text-balance">
              Ready to Choose Your Program?
            </h2>
            <Link href="/book">
              <Button
                size="lg"
                variant="secondary"
                className="text-black bg-white font-semibold hover:bg-gray-300 cursor-pointer"
              >
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
