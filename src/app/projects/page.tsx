'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: number;
  name: string;
  url: string;
  summary?: string;
  details?: string;
  technologies?: string[];
};

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Load projects from API
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to load projects:', error);
        setProjects([]);
      } finally {
        setIsLoading(false);
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

    // Modal animations
    if (selectedProject && modalRef.current) {
      gsap.fromTo(modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selectedProject]);

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
          {isLoading ? (
            <div className="text-center py-12">
              <div className="text-gray-500">Loading projects...</div>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">No projects available yet.</div>
              <p className="text-gray-400">Projects will appear here once they are added through the admin panel.</p>
            </div>
          ) : (
            <div ref={projectsRef} className="grid gap-8 grid-cols-1 sm:grid-cols-2">
              {projects.map((p) => (
              <div key={p.id} onClick={() => setSelectedProject(p)} className="group rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <div className="relative h-80 bg-gradient-to-br from-[#2831BC]/20 to-[#3d47e8]/20">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-900">Case Study</span>
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Open →</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-gray-900 text-xl font-display font-bold mb-1">{p.name}</div>
                  <div className="text-gray-500 text-sm truncate">{p.url}</div>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Full-screen Project Modal */}
      {selectedProject && (
        <div ref={modalRef} className="fixed inset-0 z-[60] bg-black flex flex-col" onClick={() => setSelectedProject(null)}>
          {/* Header */}
          <div className="bg-white border-b border-gray-200 p-6 flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">{selectedProject.name}</h2>
              <p className="text-gray-600 text-lg">{selectedProject.summary}</p>
            </div>
            <button 
              onClick={() => setSelectedProject(null)} 
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold ml-8"
            >
              ×
            </button>
          </div>

          {/* Project Info */}
          <div className="bg-gray-50 border-b border-gray-200 p-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Website Purpose</h3>
                  <p className="text-gray-700">{selectedProject.details}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies?.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-[#2831BC] text-white text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Website iframe */}
          <div className="flex-1 bg-white">
            <iframe
              src={selectedProject.url}
              className="w-full h-full border-0"
              title={selectedProject.name}
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
        </div>
      )}
    </div>
  );
}


