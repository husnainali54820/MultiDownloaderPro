import { NextRequest, NextResponse } from 'next/server';

// Critical: Forces this route to run dynamically on every request
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  
  // Accept 'url' (from new frontend) or 'target' (legacy support)
  const target = searchParams.get('url') || searchParams.get('target');
  const title = searchParams.get('title');

  if (!target) {
    return NextResponse.json({ error: 'Missing target URL' }, { status: 400 });
  }

  // Use the NETLIFY_ variables you added to the dashboard
  const API_BASE = process.env.NETLIFY_API_BASE;
  const API_KEY = process.env.NETLIFY_API_KEY;

  if (!API_BASE || !API_KEY) {
    console.error('Server Error: Missing NETLIFY_API_BASE or NETLIFY_API_KEY');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    // FIX: Correctly encode the target URL so the backend receives the full link
    const encodedTarget = encodeURIComponent(target);
    const fetchUrl = `${API_BASE}/stream?target=${encodedTarget}`;

    // 1. Initiate request to your backend
    const response = await fetch(fetchUrl, {
      headers: {
        'x-api-key': API_KEY,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      redirect: 'manual', // We handle redirects manually to catch the final video link
    });

    // 2. Handle Redirects (Most social media videos redirect to a CDN)
    if (response.status >= 300 && response.status < 400 && response.headers.has('location')) {
        const location = response.headers.get('location')!;
        
        // Fetch the actual video file from the CDN
        const videoResponse = await fetch(location, {
             headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!videoResponse.body) {
            return NextResponse.json({ error: 'Could not retrieve video stream.' }, { status: 500 });
        }

        // 3. Sanitize Filename (Remove emojis/special chars that crash downloads)
        const safeTitle = (title || 'video').replace(/[^a-zA-Z0-9-_ ]/g, '').trim() || 'video';
        
        const headers = new Headers(videoResponse.headers);
        headers.set('Content-Disposition', `attachment; filename="${safeTitle}.mp4"`);
        
        // Return the video stream to the user
        return new Response(videoResponse.body, {
            status: videoResponse.status,
            headers: headers,
        });

    } else if (!response.ok) {
         // Handle backend errors
         const errorBody = await response.text();
         console.error('Backend stream API error:', errorBody);
         return NextResponse.json({ error: 'Failed to initiate stream.' }, { status: response.status });
    }

    // 4. Handle Direct Streams (No redirect)
    const safeTitle = (title || 'video').replace(/[^a-zA-Z0-9-_ ]/g, '').trim() || 'video';
    const headers = new Headers(response.headers);
    headers.set('Content-Disposition', `attachment; filename="${safeTitle}.mp4"`);
    
    return new Response(response.body, {
        status: response.status,
        headers: headers,
    });

  } catch (error) {
    console.error('Error in stream proxy:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
