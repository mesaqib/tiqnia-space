"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "General Checkup",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    try {
      const composedMessage = [
        `Phone: ${form.phone || "-"}`,
        `Preferred Date: ${form.preferredDate || "-"}`,
        `Preferred Time: ${form.preferredTime || "-"}`,
        `Service Interest: ${form.service || "-"}`,
        form.message ? "\nAdditional notes:\n" + form.message : "",
      ]
        .filter(Boolean)
        .join("\n");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: "-",
          budget: "-",
          service: form.service,
          message: composedMessage,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit. Please try again.");
      }

      setStatusType("success");
      setStatusMessage("Thank you! We will contact you shortly to confirm your appointment.");
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "General Checkup",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setStatusType("error");
      setStatusMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-text-secondary mb-1">Full name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Jane Doe"
            className="w-full rounded-md border border-neutral-200 bg-white/70 px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30 dark:border-neutral-800 dark:bg-black/30"
          />
        </div>
        <div>
          <label className="block text-sm text-text-secondary mb-1">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="jane@example.com"
            className="w-full rounded-md border border-neutral-200 bg-white/70 px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30 dark:border-neutral-800 dark:bg-black/30"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-text-secondary mb-1">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="(555) 000-0000"
            className="w-full rounded-md border border-neutral-200 bg-white/70 px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30 dark:border-neutral-800 dark:bg-black/30"
          />
        </div>
        <div>
          <label className="block text-sm text-text-secondary mb-1">Service</label>
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full rounded-md border border-neutral-200 bg-white/70 px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30 dark:border-neutral-800 dark:bg-black/30"
          >
            <option>General Checkup</option>
            <option>Teeth Whitening</option>
            <option>Dental Implants</option>
            <option>Invisalign</option>
            <option>Root Canal</option>
            <option>Emergency Dentistry</option>
            <option>Cosmetic Dentistry</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-text-secondary mb-1">Preferred date</label>
          <input
            type="date"
            value={form.preferredDate}
            onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
            className="w-full rounded-md border border-neutral-200 bg-white/70 px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30 dark:border-neutral-800 dark:bg-black/30"
          />
        </div>
        <div>
          <label className="block text-sm text-text-secondary mb-1">Preferred time</label>
          <input
            type="time"
            value={form.preferredTime}
            onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
            className="w-full rounded-md border border-neutral-200 bg-white/70 px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30 dark:border-neutral-800 dark:bg-black/30"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-text-secondary mb-1">Additional notes</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us anything we should know before your visit"
          className="w-full rounded-md border border-neutral-200 bg-white/70 px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30 dark:border-neutral-800 dark:bg-black/30"
        />
      </div>

      {statusMessage && (
        <div
          className={`rounded-md px-3 py-2 text-sm ${
            statusType === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {statusMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-md bg-brand-primary px-4 py-2 text-white text-sm font-medium hover:bg-brand-secondary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Request appointment"}
      </button>
    </form>
  );
}




