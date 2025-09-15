'use client';

import { useMemo } from 'react';

type Project = {
  id: number;
  name: string;
  url: string;
};

export default function ProjectsPage() {
  const projects: Project[] = useMemo(() => (
    Array.from({ length: 12 }).map((_, i) => ({
      id: i + 1,
      name: `Project ${i + 1}`,
      url: `https://example${i + 1}.com`
    }))
  ), []);

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of case studies and product work.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" className="group rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="relative h-56 bg-gradient-to-br from-[#2831BC]/20 to-[#3d47e8]/20">
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
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


