import { NextResponse } from 'next/server';
import projectsData from '@/data/projects.json';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'changeme';

export async function GET() {
  return NextResponse.json(projectsData);
}

export async function POST(request: Request) {
  const auth = request.headers.get('x-admin-password');
  if (auth !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const body = await request.json();
  
  // Create a new project with all the fields
  const newProject = {
    id: Date.now(), // Simple ID generation
    name: body.name,
    url: body.url,
    summary: body.summary || '',
    details: body.details || '',
    technologies: body.technologies || [],
    images: [],
    createdAt: new Date().toISOString()
  };
  
  // Note: For demo purposes we do not persist to disk in serverless.
  // In a real application, you would save this to a database
  return NextResponse.json({ 
    ok: true, 
    project: newProject,
    message: 'Project created successfully (demo mode - not persisted)'
  });
}


