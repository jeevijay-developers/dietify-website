"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    condition: "",
    package: "",
    date: "",
    time: "",
    notes: "",
  };

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "30439835-a964-4e02-a2b1-d355bb5ded00",
          subject: "New Dietify appointment request",
          ...formData,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to send form");
      }

      setFormData(initialFormData);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Web3Forms submission failed", err);
      setError("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-xl border-2 border-primary text-center">
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Appointment Booked!
        </h2>
        <p className="text-foreground/70 mb-4">
          We'll contact you shortly to confirm your appointment. Check your
          email for details.
        </p>
        <Button onClick={() => (window.location.href = "/")} variant="outline">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl border border-border shadow-sm space-y-6"
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="john@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="+91 (555) 123-4567"
        />
      </div>

      {/* Condition */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Health Condition *
        </label>
        <select
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
        >
          <option value="">Select a condition</option>
          <option value="weight-loss">Weight Loss</option>
          <option value="diabetes">Diabetes Management</option>
          <option value="pcos">PCOS/PCOD</option>
          <option value="thyroid">Thyroid</option>
          <option value="gut-health">Gut Health</option>
          <option value="heart-health">Heart Health</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Package */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Package *
        </label>
        <select
          name="package"
          value={formData.package}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
        >
          <option value="">Select a package</option>
          <option value="1-month">1 Month</option>
          <option value="3-month">3 Months</option>
          <option value="6-month">6 Months</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      {/* Date */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Preferred Date *
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Time */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
          <Clock className="w-4 h-4" />
          Preferred Time *
        </label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Additional Notes
        </label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Tell us about your health goals or any specific concerns..."
          rows={4}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Confirm Appointment"}
      </Button>

      {error && <p className="text-sm text-destructive text-center">{error}</p>}

      <p className="text-xs text-foreground/50 text-center">
        We'll contact you to confirm your appointment details
      </p>
    </form>
  );
}
