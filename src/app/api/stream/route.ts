import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  
  // Accept 'url' or 'target'
  const target = searchParams.get('url') || searchParams.get('target');
  const title = searchParams.get('title');

  if (!target) {
    return NextResponse.json({ error: 'Missing target URL' }, { status: 400 });
  }

  const API_BASE = process.env.NETLIFY_API_BASE;
  const API_KEY = process.env.NETLIFY_API_KEY;

  if (!API_BASE || !API_KEY) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    // FIX: We ONLY send 'target'. We removed '&key=' because it caused the 422 error.
    // The API Key is sent securely in the headers below.
    const encodedTarget = encodeURIComponent(target);
    const fetchUrl = `${API_BASE}/stream?target=${encodedTarget}`;

    const response = await fetch(fetchUrl, {
      headers: {
        'x-api-key': API_KEY, // Key is sent here
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      redirect: 'manual', 
    });

    // 1. Handle Redirects (Success case)
    if (response.status >= 300 && response.status < 400 && response.headers.has('location')) {
        const location = response.headers.get('location')!;
        
        const videoResponse = await fetch(location, {
             headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
            }
        });

        if (!videoResponse.body) {
            return NextResponse.json({ error: 'Video stream empty' }, { status: 500 });
        }

        const safeTitle = (title || 'video').replace(/[^a-zA-Z0-9-_ ]/g, '').trim();
        const headers = new Headers(videoResponse.headers);
        headers.set('Content-Disposition', `attachment; filename="${safeTitle}.mp4"`);
        
        return new Response(videoResponse.body, {
            status: videoResponse.status,
            headers: headers,
        });

    } else if (!response.ok) {
         // Log the actual error from the backend for debugging
         const errorText = await response.text();
         console.error(`Backend Error (${response.status}):`, errorText);
         return NextResponse.json({ error: 'Backend stream failed', details: errorText }, { status: response.status });
    }

    // 2. Handle Direct Response
    const safeTitle = (title || 'video').replace(/[^a-zA-Z0-9-_ ]/g, '').trim();
    const headers = new Headers(response.headers);
    headers.set('Content-Disposition', `attachment; filename="${safeTitle}.mp4"`);
    
    return new Response(response.body, {
        status: response.status,
        headers: headers,
    });

  } catch (error) {
    console.error('Stream Proxy Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
