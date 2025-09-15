'use client';

import { useEffect, useState } from 'react';

type Project = {
  id: number;
  name: string;
  url: string;
  images?: string[];
  summary?: string;
  details?: string;
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
      setMessage('Saved (demo). Note: Persistence is disabled in this preview.');
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
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">Admin</h1>

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
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2831BC] focus:border-transparent bg-white text-gray-900"
                value={form.name || ''}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="url"
                placeholder="URL"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2831BC] focus:border-transparent bg-white text-gray-900"
                value={form.url || ''}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                required
              />
              <textarea
                placeholder="Summary"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2831BC] focus:border-transparent bg-white text-gray-900"
                value={form.summary || ''}
                onChange={(e) => setForm({ ...form, summary: e.target.value })}
                rows={4}
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#2831BC] to-[#3d47e8] ${isLoading ? 'opacity-60' : ''}`}
              >
                {isLoading ? 'Saving…' : 'Save'}
              </button>
            </form>
            {message && <p className="mt-3 text-sm text-gray-600">{message}</p>}
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-display font-semibold mb-4">Projects</h2>
            {isLoading && projects.length === 0 ? (
              <div className="text-gray-500">Loading…</div>
            ) : (
              <ul className="space-y-3">
                {projects.map((p) => (
                  <li key={p.id} className="p-4 border border-gray-200 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{p.name}</div>
                      <div className="text-sm text-gray-500">{p.url}</div>
                    </div>
                    <a href={`/projects/${p.id}`} className="text-[#2831BC] hover:underline">Open</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


