import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="py-10 px-2 sm:py-20 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center sm:mb-16">
          <h2 className="text-2xl font-extrabold text-foreground mb-2 sm:text-4xl sm:mb-4">Why Choose <span className="text-primary">DietMentor</span></h2>
          <p className="text-[13px] text-foreground/70 text-balance sm:text-lg">Expert nutritional guidance backed by scientific principles</p>
        </div>
        <div className="flex flex-col-reverse gap-8 sm:gap-12 md:grid md:grid-cols-2 items-center">
          <div>
            <div className="space-y-5">
              <div className="flex gap-3 items-center bg-primary/5 rounded-lg px-3 py-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col items-start text-left">
                  <h3 className="font-semibold text-base mb-1 text-foreground text-left">Disease-Specific Programs</h3>
                  <p className="text-[14px] text-foreground/70 text-left">Specialized diet plans for diabetes, PCOS, thyroid, and more</p>
                </div>
              </div>
              <div className="flex gap-3 items-center bg-primary/5 rounded-lg px-3 py-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col items-start text-left">
                  <h3 className="font-semibold text-base mb-1 text-foreground text-left">1-on-1 Consultations</h3>
                  <p className="text-[14px] text-foreground/70 text-left">Direct access to certified dieticians via online video calls</p>
                </div>
              </div>
              <div className="flex gap-3 items-center bg-primary/5 rounded-lg px-3 py-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col items-start text-left">
                  <h3 className="font-semibold text-base mb-1 text-foreground text-left">Ongoing Support</h3>
                  <p className="text-[14px] text-foreground/70 text-left">Regular follow-ups and plan adjustments based on your progress</p>
                </div>
              </div>
              <div className="flex gap-3 items-center bg-primary/5 rounded-lg px-3 py-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col items-start text-left">
                  <h3 className="font-semibold text-base mb-1 text-foreground text-left">Practical Meal Plans</h3>
                  <p className="text-[14px] text-foreground/70 text-left">Easy-to-follow recipes and shopping lists for real-world implementation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-52 sm:h-96 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(11,94,60,0.14)] mb-4 sm:mb-0">
            <Image src="/we01.jpg" alt="Dietician consultation" fill className="object-cover" sizes="(min-width: 1024px) 500px, 100vw" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
