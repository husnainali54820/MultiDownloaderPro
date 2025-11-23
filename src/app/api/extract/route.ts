import { NextResponse } from 'next/server';

export const maxDuration = 60; // Allow longer timeouts for 4K videos

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Access secrets safely on the server
    const API_BASE = process.env.NETLIFY_API_BASE;
    const API_KEY = process.env.NETLIFY_API_KEY;

    if (!API_BASE || !API_KEY) {
      console.error('Server missing environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Call External API
    const response = await fetch(`${API_BASE}/extract`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.detail || 'Failed to fetch video. Please check the link.' },
        { status: response.status }
      );
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error('Extraction Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
