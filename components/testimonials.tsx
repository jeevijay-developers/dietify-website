import { Star } from "lucide-react"

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
  ]

  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Success Stories</h2>
          <p className="text-lg text-foreground/70">Real results from our amazing clients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-smooth">
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
              </div>

              <p className="text-foreground/70 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-semibold text-primary">{testimonial.initial}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
