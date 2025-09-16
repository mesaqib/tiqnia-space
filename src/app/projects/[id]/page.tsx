import projects from '@/data/projects.json';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

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

  // Redirect to the actual project URL
  redirect(project.url);
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const idNum = Number(id);
  const project = projects.find(p => p.id === idNum);
  if (!project) {
    return {
      title: 'Project Not Found — TiqniaSpace',
      description: 'Requested project could not be found.',
      alternates: { canonical: `/projects/${id}` }
    };
  }
  return {
    title: `${project.name} — TiqniaSpace Project`,
    description: `View details and live link for ${project.name}.`,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: `${project.name} — TiqniaSpace Project`,
      description: `Explore ${project.name} by TiqniaSpace`,
      url: `/projects/${project.id}`
    }
  };
}