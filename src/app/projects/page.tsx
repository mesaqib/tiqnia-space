'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectsData from '@/data/projects.json';

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: number;
  name: string;
  url: string;
  image: string;
};

export default function ProjectsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Get projects from JSON data
  const projects: Project[] = projectsData;

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
    );

    // Projects animation
    if (projectsRef.current?.children) {
      gsap.fromTo(projectsRef.current.children,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen">
      <section ref={heroRef} className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={titleRef} className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p ref={subtitleRef} className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of case studies and product work.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={projectsRef} className="grid gap-8 grid-cols-1 sm:grid-cols-2">
            {projects.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 bg-gradient-to-br from-[#2831BC]/20 to-[#3d47e8]/20">
                  <img 
                    src={p.image} 
                    alt={p.name}
                    className="w-full h-full object-cover"
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
                  <div className="text-gray-900 text-xl font-display font-bold mb-1">{p.name}</div>
                  <div className="text-gray-500 text-sm truncate">{p.url}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
 

      </section>

    </div>
  );
}


