import projects from '@/data/projects.json';
import Link from 'next/link';

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const idNum = Number(id);
  const project = projects.find(p => p.id === idNum);
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-display font-bold mb-4">Project not found</div>
          <Link href="/projects" className="text-[#2831BC] hover:underline">Back to projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="relative py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="text-[#2831BC] hover:underline">← All projects</Link>
          <h1 className="mt-4 text-4xl md:text-5xl font-display font-bold text-gray-900">{project.name}</h1>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2831BC]">{project.url}</a>
          <p className="mt-6 text-lg text-gray-700">{project.summary}</p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.images?.map((img, i) => (
            <div key={i} className="h-48 rounded-xl bg-gradient-to-br from-[#2831BC]/10 to-[#3d47e8]/10" />
          ))}
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-semibold mb-3">Overview</h2>
          <p className="text-gray-700">{project.details}</p>
        </div>
      </section>
    </div>
  );
}


