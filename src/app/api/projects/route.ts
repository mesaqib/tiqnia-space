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
  // Note: For demo purposes we do not persist to disk in serverless.
  const body = await request.json();
  return NextResponse.json({ ok: true, received: body });
}


