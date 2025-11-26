import Link from "next/link"
import { CheckCircle2, Heart, Leaf, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />

        {/* About Section */}
        <section className="py-20 px-4 bg-secondary/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">About Dietify</h2>
              <p className="text-lg text-foreground/70 text-balance">
                Our mission is to transform your relationship with food and health
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-smooth">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Guidance</h3>
                <p className="text-foreground/70">
                  Certified nutritionists with years of experience in personalized diet planning
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-smooth">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Science-Based</h3>
                <p className="text-foreground/70">Evidence-driven approaches backed by latest nutritional research</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-smooth">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Personalized Care</h3>
                <p className="text-foreground/70">Customized meal plans tailored to your health conditions and goals</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-foreground text-balance">Why Choose Dietify?</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">Disease-Specific Programs</h3>
                      <p className="text-foreground/70">Specialized diet plans for diabetes, PCOS, thyroid, and more</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">1-on-1 Consultations</h3>
                      <p className="text-foreground/70">Direct access to certified dieticians via online video calls</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">Ongoing Support</h3>
                      <p className="text-foreground/70">
                        Regular follow-ups and plan adjustments based on your progress
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-foreground">Practical Meal Plans</h3>
                      <p className="text-foreground/70">
                        Easy-to-follow recipes and shopping lists for real-world implementation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl p-12 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-32 h-32 text-primary/30 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground/60">Your health is our priority</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-balance">Ready to Start Your Health Journey?</h2>
            <p className="text-lg mb-8 opacity-90 text-balance">
              Book your first consultation with our certified dieticians today
            </p>
            <Link href="/book">
              <Button size="lg" variant="secondary" className="flex items-center gap-2">
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
