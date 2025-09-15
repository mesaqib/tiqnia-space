'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  const modalRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    // Load projects from API
    const loadProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        // Show only the latest 4 projects
        setProjects(data.slice(0, 4));
      } catch (error) {
        console.error('Failed to load projects:', error);
        // Fallback to empty array if API fails
        setProjects([]);
      }
    };

    loadProjects();
  }, []);

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

    // Stats counter animation
    if (statsRef.current?.children) {
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  type Project = {
    id: number;
    name: string;
    url: string;
    summary?: string;
    details?: string;
    technologies?: string[];
    images?: string[];
    createdAt?: string;
  };

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const stats = [
    { number: '25+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '3+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Animated Background */}
        <div ref={backgroundRef} className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#2831BC]/10 to-[#3d47e8]/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={titleRef} className="text-4xl md:text-6xl font-display font-bold mb-6 leading-snug text-gradient">
            Global UI/UX & Web Design — fast, seamless, cost‑efficient.
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Turn your ideas into impactful solutions.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://cal.com/tiqniaspace/30min" target="_blank" rel="noopener noreferrer" className="text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 bg-gradient-to-r from-[#2831BC] to-[#3d47e8] hover:from-[#1f27a6] hover:to-[#313ce0]">Book a Call</Link>
            <Link href="mailto:saqib@tiqniaspace.com" className="px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 bg-gradient-to-r from-white to-white text-[#2831BC] border-2 border-transparent bg-clip-padding [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(135deg,#2831BC,#3d47e8)_border-box]">Get In Touch</Link>
          </div>
        </div>

        
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-[#2831BC] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Professional Cards */}
      {projects.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-2">Selected Projects</h2>
                <p className="text-gray-600 max-w-2xl">A snapshot of our recent work across UI/UX and web development.</p>
              </div>
              <Link href="/projects" className="hidden md:inline-flex items-center gap-2 text-[#2831BC] font-semibold hover:underline">
                View all
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
            <div ref={projectsRef} className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 text-left"
                >
                  <div className="relative h-56 bg-gradient-to-br from-[#2831BC]/20 to-[#3d47e8]/20">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-900">Case Study</span>
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">View details →</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-gray-900 text-xl font-display font-bold mb-1">{p.name}</div>
                    <div className="text-gray-500 text-sm truncate">{p.url}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div ref={modalRef} className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
              <div>
                <div className="text-2xl font-display font-bold text-gray-900">{selectedProject.name}</div>
                <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="text-[#2831BC] text-sm hover:underline">{selectedProject.url}</a>
              </div>
              <button onClick={() => setSelectedProject(null)} className="text-gray-500 hover:text-gray-700">Close</button>
            </div>
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
                {selectedProject.images.map((img: string, idx: number) => (
                  <div key={idx} className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">Image {idx + 1}</div>
                ))}
              </div>
            )}
            <div className="p-5 border-t border-gray-200">
              <div className="text-lg font-display font-semibold mb-2">Project Overview</div>
              <p className="text-gray-700 mb-2">{selectedProject.summary}</p>
              <p className="text-gray-600">{selectedProject.details}</p>
            </div>
          </div>
        </div>
      )}

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              We deliver on time, in <span className="text-gradient">days and weeks</span>
              <br />
              <span className="text-2xl md:text-3xl text-gray-600 font-normal">—not months.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Onboard in <1 day', description: 'Quick setup and project initiation' },
              { step: '02', title: 'Understand Scope & Strategy', description: 'Deep dive into your requirements' },
              { step: '03', title: 'First designs in 4-5 days', description: 'Initial concepts and wireframes' }
                    ].map((process) => (
              <div key={process.step} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#2831BC] to-[#3d47e8] rounded-full flex items-center justify-center mx-auto text-white text-2xl font-display font-bold group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#2831BC] to-[#3d47e8]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Let&apos;s work together to create something amazing that drives your business forward and sets you apart from the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="https://cal.com/tiqniaspace/30min"
            target="_blank"
            rel="noopener noreferrer"
              className="bg-white text-[#2831BC] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block magnetic-hover"
            >
              Start Your Project
            </Link>
            <Link
              href="mailto:saqib@tiqniaspace.com"
              className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#2831BC] transition-all duration-300 hover:scale-105 inline-block magnetic-hover"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
