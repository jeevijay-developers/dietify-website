import Link from "next/link"
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6" />
              <span className="font-bold text-lg">Dietify</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">Your personal online dietician for better health</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link href="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                Home
              </Link>
              <Link
                href="/services"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
              >
                Services
              </Link>
              <Link
                href="/book"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                <span>+91 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                <span>hello@dietify.com</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-primary-foreground/70 hover:text-primary-foreground transition-smooth cursor-pointer" />
              <Instagram className="w-5 h-5 text-primary-foreground/70 hover:text-primary-foreground transition-smooth cursor-pointer" />
              <Twitter className="w-5 h-5 text-primary-foreground/70 hover:text-primary-foreground transition-smooth cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 Dietify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
