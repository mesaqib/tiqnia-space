'use client';

import { useEffect, useState } from 'react';

type Project = {
  id: number;
  name: string;
  url: string;
  images?: string[];
  summary?: string;
  details?: string;
  technologies?: string[];
  createdAt?: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<Partial<Project>>({ name: '', url: '' });
  const [message, setMessage] = useState<string>('');

  const loadProjects = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || 'Request failed');
      }
      setMessage('Project saved successfully!');
      setForm({ name: '', url: '' });
      await loadProjects();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unable to save';
      setMessage(`Error: ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">Admin Dashboard</h1>

        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-xl font-display font-semibold mb-4">Admin Password</h2>
          <input
            type="password"
            placeholder="Enter admin password"
            className="w-full max-w-sm px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2831BC] focus:border-transparent bg-white text-gray-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-2">Provide this password to perform changes.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-display font-semibold mb-4">Create / Update Project</h2>
            <form className="space-y-4" onSubmit={handleCreate}>
              <input
                type="text"
                placeholder="Project Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2831BC] focus:border-transparent bg-white text-gray-900"
                value={form.name || ''}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="url"
                placeholder="Website URL"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2831BC] focus:border-transparent bg-white text-gray-900"
                value={form.url || ''}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                required
              />
              <textarea
                placeholder="Project Summary"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2831BC] focus:border-transparent bg-white text-gray-900"
                value={form.summary || ''}
                onChange={(e) => setForm({ ...form, summary: e.target.value })}
                rows={3}
              />
              <textarea
                placeholder="Project Details & Purpose"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2831BC] focus:border-transparent bg-white text-gray-900"
                value={form.details || ''}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                rows={4}
              />
              <input
                type="text"
                placeholder="Technologies (comma-separated)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2831BC] focus:border-transparent bg-white text-gray-900"
                value={form.technologies?.join(', ') || ''}
                onChange={(e) => setForm({ ...form, technologies: e.target.value.split(',').map(t => t.trim()).filter(t => t) })}
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#2831BC] to-[#3d47e8] hover:from-[#1f27a6] hover:to-[#313ce0] transition-all duration-300 ${isLoading ? 'opacity-60' : ''}`}
              >
                {isLoading ? 'Saving…' : 'Save Project'}
              </button>
            </form>
            {message && (
              <div className={`mt-3 p-3 rounded-lg text-sm ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                {message}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-display font-semibold mb-4">Current Projects</h2>
            {isLoading && projects.length === 0 ? (
              <div className="text-gray-500">Loading…</div>
            ) : projects.length === 0 ? (
              <div className="text-gray-500 text-center py-8">
                <p>No projects found.</p>
                <p className="text-sm mt-2">Create your first project using the form on the left.</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {projects.map((p) => (
                  <div key={p.id} className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 mb-1">{p.name}</div>
                        <div className="text-sm text-gray-500 mb-2">{p.url}</div>
                        {p.summary && <div className="text-sm text-gray-600">{p.summary}</div>}
                      </div>
                      <a 
                        href={`/projects/${p.id}`} 
                        className="text-[#2831BC] hover:underline text-sm font-medium ml-4"
                      >
                        View
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
