import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="py-10 px-2 sm:py-20 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 text-center sm:mb-16">
          <h2 className="text-xl font-bold text-foreground mb-2 text-balance sm:text-4xl sm:mb-4">
            Why Choose <span className="text-primary">DietMentor</span>
          </h2>
          <p className="text-[13px] text-foreground/70 text-balance sm:text-lg">
            Expert nutritional guidance backed by scientific principles
          </p>
        </div>
        <div className="grid gap-8 sm:gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Disease-Specific Programs</h3>
                  <p className="text-foreground/70">Specialized diet plans for diabetes, PCOS, thyroid, and more</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">1-on-1 Consultations</h3>
                  <p className="text-foreground/70">Direct access to certified dieticians via online video calls</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Ongoing Support</h3>
                  <p className="text-foreground/70">Regular follow-ups and plan adjustments based on your progress</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">Practical Meal Plans</h3>
                  <p className="text-foreground/70">Easy-to-follow recipes and shopping lists for real-world implementation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-56 sm:h-96 rounded-2xl overflow-hidden shadow-[0_30px_90px_rgba(11,94,60,0.18)]">
            <Image src="/we01.jpg" alt="Dietician consultation" fill className="object-cover" sizes="(min-width: 1024px) 500px, 100vw" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
