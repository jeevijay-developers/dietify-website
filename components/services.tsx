import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Apple, Weight, Heart, Brain, Leaf } from "lucide-react"

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
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-foreground/70 text-balance">
            Comprehensive nutrition solutions for various health conditions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-smooth border border-border group"
              >
                <Icon className={`w-12 h-12 ${service.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>
                <Link href="/services">
                  <Button variant="ghost" className="text-primary hover:bg-primary/10">
                    Learn More →
                  </Button>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View All Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
