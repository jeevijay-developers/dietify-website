"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How do I get started with DietMentor?",
    answer:
      "Book a consultation and complete the intake form. We review your medical history and current lifestyle before designing your personalized plan.",
  },
  {
    question: "Do you provide diets for specific medical conditions?",
    answer:
      "Yes. We create protocols for diabetes, hypertension, thyroid, PCOS, kidney disorders, and more, coordinating with your physician when needed.",
  },
  {
    question: "Will I receive ongoing follow-ups?",
    answer:
      "Absolutely. We monitor progress through scheduled check-ins, tracker updates, and quick chats for adjustments between sessions.",
  },
  {
    question: "Are meal plans flexible for vegetarian or regional cuisines?",
    answer:
      "Every plan honors your food culture. We provide regional swaps, vegetarian options, and grocery guidance so you never feel restricted.",
  },
]

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white px-2 py-14 sm:px-4 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center sm:mb-16">
          <h2 className="text-2xl font-extrabold text-foreground mb-2 sm:text-4xl sm:mb-4">Questions? <span className="text-primary">We have answers.</span></h2>
          <p className="text-[13px] text-foreground/70 text-balance sm:text-lg">Everything you need to know before starting with DietMentor.</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <button
                key={faq.question}
                className="w-full rounded-xl border border-primary/10 bg-linear-to-br from-white to-primary/5 p-4 sm:p-6 text-left shadow-[0_10px_30px_rgba(15,90,60,0.08)] transition-all hover:-translate-y-1"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="w-full">
                    <h3 className="text-base font-semibold text-foreground leading-snug sm:text-lg">{faq.question}</h3>
                    <div
                      className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                        isOpen ? "max-h-40 mt-3" : "max-h-0"
                      }`}
                    >
                      <p className="text-[14px] text-foreground/70 leading-relaxed sm:text-base">{faq.answer}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
