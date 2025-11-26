import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BookingForm from "@/components/booking-form"

export default function BookAppointment() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-16 px-4 bg-gradient-to-br from-background to-secondary/5">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-center text-balance">Book Your Appointment</h1>
            <p className="text-lg text-foreground/70 text-center text-balance">
              Let's get started on your personalized nutrition journey
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-background">
          <div className="max-w-2xl mx-auto">
            <BookingForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
