import projects from '@/data/projects.json';
import Link from 'next/link';
import { redirect } from 'next/navigation';

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