import Image from "next/image";
import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";

export const metadata: Metadata = {
  title: "SmileCraft Dental Clinic | Family & Cosmetic Dentistry",
  description:
    "Modern family & cosmetic dentistry. Same-day appointments, emergency care, Invisalign, implants, whitening. Trusted by 2,000+ happy patients.",
  openGraph: {
    title: "SmileCraft Dental Clinic",
    description:
      "Modern family & cosmetic dentistry. Same-day appointments, emergency care, Invisalign, implants, whitening.",
    type: "website",
    url: "/demo",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileCraft Dental Clinic",
    description:
      "Modern family & cosmetic dentistry. Same-day appointments, emergency care, Invisalign, implants, whitening.",
  },
  alternates: { canonical: "/demo" },
};

export default function DemoDentistPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1606811971618-4483b42d2c00?q=80&w=1920&auto=format&fit=crop"
            alt="Modern dental clinic interior"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-24 md:py-32 text-white">
          <div className="max-w-3xl">
            <p className="uppercase tracking-widest text-white/80 text-xs mb-4">Trusted family & cosmetic dentistry</p>
            <h1 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
              Your Confident Smile Starts Here
            </h1>
            <p className="mt-6 text-white/85 text-base md:text-lg">
              Same-day appointments, gentle care, and stunning results. Emergency dentistry available.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#appointment" className="rounded-md bg-brand-primary px-5 py-3 text-sm font-medium hover:bg-brand-secondary transition-colors">
                Book an appointment
              </a>
              <a href="#services" className="rounded-md bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur hover:bg-white/20 transition-colors">
                Explore services
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★★★★★</span> 2,000+ happy patients
              </div>
              <div className="hidden sm:block">|</div>
              <div>Open Mon–Sat • Emergency same-day care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Invisalign Provider",
            "Implant Certified",
            "Teeth Whitening Pro",
            "Pediatric Friendly",
          ].map((badge) => (
            <div key={badge} className="rounded-lg border border-neutral-200/70 dark:border-neutral-800 py-4 px-3 text-center text-sm text-text-secondary">
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Comprehensive Dental Care</h2>
            <p className="mt-4 text-text-secondary">
              From routine checkups to advanced cosmetic and restorative treatments, we tailor a plan to your smile.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                "General Checkups & Cleanings",
                "Teeth Whitening",
                "Invisalign Clear Aligners",
                "Dental Implants",
                "Veneers & Cosmetic Dentistry",
                "Root Canal Therapy",
                "Crowns & Bridges",
                "Emergency Dentistry",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  <span className="text-text-primary/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop"
              alt="Dentist with patient"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* About + Technology */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1629909613655-46eca8d328fc?q=80&w=1600&auto=format&fit=crop"
              alt="State-of-the-art dental technology"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Care, Comfort, and Cutting‑Edge Tech</h2>
            <p className="mt-4 text-text-secondary">
              We invest in the latest imaging and treatment technologies for precise, gentle, and efficient care.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                "3D digital scanning",
                "Low‑radiation X‑rays",
                "Intraoral cameras",
                "Laser dentistry",
              ].map((t) => (
                <div key={t} className="rounded-md border border-neutral-200/70 dark:border-neutral-800 px-3 py-2 text-text-primary/90">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Meet Your Dentists</h2>
          <p className="mt-3 text-text-secondary max-w-2xl">Experienced clinicians with a gentle touch and a passion for great results.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Dr. Emma Collins, DDS",
              role: "Cosmetic & Restorative",
              img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
            },
            {
              name: "Dr. Liam Parker, DMD",
              role: "Family & Preventive",
              img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop",
            },
            {
              name: "Dr. Sophia Nguyen, DDS",
              role: "Implants & Invisalign",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((doc) => (
            <div key={doc.name} className="rounded-lg overflow-hidden border border-neutral-200/70 dark:border-neutral-800">
              <div className="relative aspect-[4/5]">
                <Image src={doc.img} alt={doc.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="font-medium text-text-primary">{doc.name}</div>
                <div className="text-sm text-text-secondary">{doc.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Before & After</h2>
            <p className="mt-3 text-text-secondary max-w-2xl">Real patient transformations with whitening, veneers, and orthodontics.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1622202221529-275174c880ba?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1629740087238-5ae5a1cf9f95?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop",
            ].map((src, i) => (
              <div key={src} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image src={src} alt={`Smile makeover ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Patients Love Us</h2>
          <p className="mt-3 text-text-secondary max-w-2xl">4.9/5 average rating • 500+ verified reviews</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "The gentlest cleaning I’ve ever had. The team explained everything and made me feel comfortable!",
              name: "Ava R.",
            },
            {
              quote:
                "Got same‑day emergency care. They saved my tooth and the whole process was painless.",
              name: "Michael D.",
            },
            {
              quote:
                "My Invisalign results are amazing. Clear pricing, flexible scheduling, highly recommend!",
              name: "Sara P.",
            },
          ].map((t) => (
            <div key={t.name} className="rounded-lg border border-neutral-200/70 dark:border-neutral-800 p-5 text-sm text-text-primary/90">
              <div className="text-text-primary">“{t.quote}”</div>
              <div className="mt-3 text-text-secondary">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance & Financing */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Insurance & Flexible Financing</h2>
            <p className="mt-4 text-text-secondary">
              We accept major insurance plans and offer transparent pricing with payment plans.
            </p>
            <ul className="mt-6 text-sm space-y-2">
              <li>• PPO, HMO, and private insurance accepted</li>
              <li>• Interest‑free payment plans available</li>
              <li>• Clear, upfront treatment estimates</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1600&auto=format&fit=crop"
              alt="Reception desk at dental office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Visit Us</h2>
            <p className="mt-3 text-text-secondary">123 Market Street, Suite 200 — San Francisco, CA</p>
            <div className="mt-6 rounded-lg overflow-hidden border border-neutral-200/70 dark:border-neutral-800">
              <iframe
                title="Clinic location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197537650425!2d-122.40136312336417!3d37.78961257198695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b1f8c7f5%3A0x4c9b2c6c7e6f569a!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="320"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
          <div id="appointment" className="rounded-lg border border-neutral-200/70 dark:border-neutral-800 p-6">
            <h3 className="font-display text-2xl font-semibold">Request an Appointment</h3>
            <p className="mt-2 text-sm text-text-secondary">We’ll confirm your visit by phone or email within one business day.</p>
            <div className="mt-6">
              <AppointmentForm />
            </div>
            <div className="mt-4 text-xs text-text-secondary">
              By submitting this form you agree to our terms and privacy policy.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm">
            {[
              {
                q: "Do you accept my insurance?",
                a: "We accept most major plans and will verify your coverage ahead of time.",
              },
              {
                q: "Do you offer emergency same‑day visits?",
                a: "Yes. Call us for urgent dental issues and we’ll get you in quickly.",
              },
              {
                q: "Is teeth whitening safe?",
                a: "Yes, when supervised by a dentist. We tailor strength to reduce sensitivity.",
              },
              {
                q: "What ages do you see?",
                a: "We’re a family practice and see patients of all ages, including children.",
              },
            ].map((f) => (
              <div key={f.q} className="rounded-lg border border-neutral-200/70 dark:border-neutral-800 p-5">
                <div className="font-medium text-text-primary">{f.q}</div>
                <div className="mt-2 text-text-secondary">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1629909613650-7a4fe35a76a6?q=80&w=1920&auto=format&fit=crop"
            alt="Smiling patient"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Ready for your best smile?</h2>
          <p className="mt-3 text-white/85">Book today. Most patients are seen within a week.</p>
          <div className="mt-6">
            <a href="#appointment" className="inline-flex rounded-md bg-brand-primary px-5 py-3 text-sm font-medium hover:bg-brand-secondary transition-colors">
              Book an appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}




