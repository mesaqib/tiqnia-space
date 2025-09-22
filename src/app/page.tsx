'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectsData from '@/data/projects.json';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  
  // Get the first 4 projects from the JSON data
  const projects: Project[] = projectsData.slice(0, 4);

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

    // Background parallax
    gsap.to(backgroundRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Services animation
    if (servicesRef.current?.children) {
      gsap.fromTo(servicesRef.current.children,
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Projects animation
    if (projectsRef.current?.children) {
      gsap.fromTo(projectsRef.current.children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Stats counter animation
    if (statsRef.current?.children) {
      gsap.fromTo(statsRef.current.children,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Comparison cards animation
    if (comparisonRef.current?.children) {
      gsap.fromTo(comparisonRef.current.children,
        { y: 40, opacity: 0, rotateX: -10 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          transformPerspective: 800,
          scrollTrigger: {
            trigger: comparisonRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  type Project = {
    id: number;
    name: string;
    url: string;
    image: string;
  };

  const stats = [
    { number: '25+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '3+', label: 'Years Experience' }
  ];

  const testimonials = [
    {
      quote: 'TiqniaSpace delivered beyond expectations — fast, clean, and on brand. Our conversions improved within weeks.',
      author: 'Ananya Gupta',
      role: 'Founder, Prima Legal'
    },
    {
      quote: 'Excellent UI/UX instincts and execution. The team is responsive and proactive throughout the project.',
      author: 'Rohan Mehta',
      role: 'Product Lead, Digital Castle'
    },
    {
      quote: 'Super smooth collaboration and pixel‑perfect web build. Would recommend without hesitation.',
      author: 'Sarah Khan',
      role: 'CEO, Resumind'
    }
  ];

  const faqs = [
    { q: 'What services do you offer?', a: 'UI/UX design, custom websites, web apps, 3D web, social media management, and digital marketing.' },
    { q: 'How quickly can you start?', a: 'Typically within 1–3 days after scope confirmation and kickoff.' },
    { q: 'What is your pricing model?', a: 'Fixed scope projects or monthly product/design subscriptions depending on requirements.' },
    { q: 'Do you provide post‑launch support?', a: 'Yes. We offer maintenance plans and on‑demand support.' }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-start justify-center pt-20 md:pt-28 overflow-hidden bg-gradient-to-b from-[#0b1025] via-[#0e142e] to-[#111827]">
        {/* Animated Background */}
        <div ref={backgroundRef} className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#2831BC]/10 to-[#3d47e8]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block mb-4 px-3 py-1.5 rounded-md text-sm text-gray-200 bg-white/5 ring-1 ring-white/10">TiqniaSpace — Your Website Partner</span>
          <h1 ref={titleRef} className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight text-white">
            Build. Launch. Win.
          </h1>
          <p ref={subtitleRef} className="text-base md:text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            End‑to‑end web development: custom websites, landing pages, e‑commerce, performance optimization, and SEO.
          </p>
          <div ref={ctaRef} className="flex justify-center items-center">
            <Link href="https://cal.com/tiqniaspace/15min" target="_blank" rel="noopener noreferrer" className="btn-sm text-white font-semibold transition-all duration-300 bg-[#6d5ef7] hover:bg-[#7a6bff] shadow-lg shadow-indigo-900/30">Book a 15 min call</Link>
          </div>
        </div>

        
      </section>

      {/* Delivered Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">What we’ve delivered so far</h2>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-[#2831BC] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Professional Cards */}
      {projects.length > 0 && (
        <section id="works" className="py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">Selected Projects</h2>
                <p className="text-gray-300 max-w-2xl">A snapshot of our recent work across UI/UX and web development.</p>
              </div>
              <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-[#2831BC] font-semibold hover:underline">
                View all
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
            <div ref={projectsRef} className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl overflow-hidden bg-gray-800 border border-gray-700 shadow-sm hover:shadow-2xl transition-all duration-300 text-left"
                >
                  <div className="relative h-56 bg-gradient-to-br from-[#2831BC]/20 to-[#3d47e8]/20">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-900">Live Site</span>
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Visit →</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-white text-xl font-display font-bold mb-1">{p.name}</div>
                    <div className="text-gray-400 text-sm truncate">{p.url}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Small Two-Column Banner */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">All Your Website Needs, Expertly Handled</h3>
              <p className="text-gray-300 mb-6">End‑to‑end website solutions ❤️‍🔥 that ensure your website looks great, functions flawlessly, and drives results.🚀</p>
              <Link href="https://cal.com/tiqniaspace/15min" target="_blank" rel="noopener noreferrer" className="inline-block text-white px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 bg-gradient-to-r from-[#2831BC] to-[#3d47e8] hover:from-[#1f27a6] hover:to-[#313ce0]">Book a call</Link>
            </div>
            <div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200">
                <li className="flex items-center gap-2"><span className="text-[#2831BC]">✓</span> End‑to‑End Web Development</li>
                <li className="flex items-center gap-2"><span className="text-[#2831BC]">✓</span> Custom Website Design</li>
                <li className="flex items-center gap-2"><span className="text-[#2831BC]">✓</span> Landing Page</li>
                <li className="flex items-center gap-2"><span className="text-[#2831BC]">✓</span> E‑commerce Website</li>
                <li className="flex items-center gap-2"><span className="text-[#2831BC]">✓</span> Website Optimization</li>
                <li className="flex items-center gap-2"><span className="text-[#2831BC]">✓</span> SEO (Search Engine Optimization)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Benefits</h2>
            <p className="text-gray-300 mt-3">Clear outcomes that matter to your business</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Faster time‑to‑launch', desc: 'From idea to live site in days, not months.' },
              { title: 'Conversion‑focused design', desc: 'Layouts and copy that drive action.' },
              { title: 'SEO‑ready foundation', desc: 'On‑page SEO best practices from day one.' },
              { title: 'Performance optimized', desc: 'Fast loads, Core Web Vitals friendly.' },
              { title: 'Scalable architecture', desc: 'Built to grow with your business.' },
              { title: 'Ongoing support', desc: 'Post‑launch updates and maintenance.' },
            ].map((b) => (
              <div key={b.title} className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-sm">
                <div className="text-xl font-display font-bold text-white mb-2">{b.title}</div>
                <p className="text-gray-300">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">What Clients Say</h2>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-6 snap-x snap-mandatory overflow-x-auto pb-4 no-scrollbar" aria-label="Testimonials">
              {testimonials.map((t, idx) => (
                <figure key={idx} className="min-w-[calc(100%-2rem)] sm:min-w-[calc(50%-1.5rem)] lg:min-w-[calc(33.33%-1rem)] snap-center bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-sm">
                  <blockquote className="text-gray-200 text-lg leading-relaxed mb-6">“{t.quote}”</blockquote>
                  <figcaption className="text-sm text-gray-400">
                    <span className="font-semibold text-white">{t.author}</span>
                    <span className="ml-2">— {t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it starts? */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">How it starts?</h2>
            <p className="text-gray-300 mt-3">Simple, clear steps to get moving</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Book a 15 min call', description: 'Share goals and timelines.' },
              { step: '02', title: 'Scope & Plan', description: 'We propose the best approach.' },
              { step: '03', title: 'Design & Build', description: 'Iterate fast towards launch.' },
              { step: '04', title: 'Launch & Optimize', description: 'Ship, measure, and improve.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#2831BC] to-[#3d47e8] text-white flex items-center justify-center font-display font-bold text-xl">{s.step}</div>
                <div className="text-lg font-display font-bold text-white mb-1">{s.title}</div>
                <p className="text-gray-300">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: What makes us unique? */}
      <section id="comparison" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">What makes us unique?</h2>
          </div>
          <div ref={comparisonRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-sm will-change-transform">
              <div className="text-xl font-display font-bold text-white mb-2">TiqniaSpace</div>
              <ul className="space-y-2 text-gray-300 list-disc pl-5">
                <li>End‑to‑end delivery with one accountable team</li>
                <li>Fast turnarounds with clear milestones</li>
                <li>Conversion‑focused design and SEO baked‑in</li>
                <li>Transparent pricing and communication</li>
              </ul>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-sm will-change-transform">
              <div className="text-xl font-display font-bold text-white mb-2">Typical Alternatives</div>
              <ul className="space-y-2 text-gray-300 list-disc pl-5">
                <li>Fragmented handoffs between teams</li>
                <li>Unclear timelines and scope creep</li>
                <li>Design not aligned to conversions/SEO</li>
                <li>Hidden costs and slow responses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">FAQs</h2>
            <p className="text-gray-300 mt-3">Short answers to common questions</p>
          </div>
          <div className="divide-y divide-gray-800 bg-gray-800 border border-gray-700 rounded-2xl">
            {faqs.map((f, i) => (
              <details key={i} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="text-lg font-display font-semibold text-white">{f.q}</span>
                  <span className="ml-4 text-[#8ea0ff] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-gray-300 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section with Cal.com embed */}
      <section className="py-24 bg-gradient-to-r from-[#0f172a] to-[#111827]">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">Let’s talk about your next big move</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Pick a time that works for you — no back‑and‑forth.</p>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-white">
            <iframe
              title="Book a call"
              src="https://cal.com/tiqniaspace/15min?layout=month&theme=light&embed=inline"
              className="w-full"
              style={{ height: '720px' }}
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
