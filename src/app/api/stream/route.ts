import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const target = searchParams.get('target');
  const title = searchParams.get('title');

  if (!target || !title) {
    return NextResponse.json({ error: 'Missing required query parameters: target and title' }, { status: 400 });
  }

  const API_BASE = process.env.NETLIFY_API_BASE;
  const API_KEY = process.env.NETLIFY_API_KEY;

  if (!API_BASE || !API_KEY) {
    console.error('Server misconfigured: API_BASE or API_KEY is missing.');
    return NextResponse.json({ error: 'Server is not configured correctly.' }, { status: 500 });
  }

  try {
    const targetUrl = new URL(target);
    const fetchUrl = `${API_BASE}/stream?${targetUrl.searchParams.toString()}`;

    const response = await fetch(fetchUrl, {
      headers: {
        'x-api-key': API_KEY,
      },
      redirect: 'manual', // Important to handle redirects manually
    });

    // If the backend API returns a redirect, follow it and stream the response
    if (response.status >= 300 && response.status < 400 && response.headers.has('location')) {
        const location = response.headers.get('location')!;
        const videoResponse = await fetch(location, {
             headers: {
                // It's good practice to set a user-agent
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!videoResponse.body) {
            return NextResponse.json({ error: 'Could not retrieve video stream.' }, { status: 500 });
        }

        // Stream the video content back to the client
        const headers = new Headers(videoResponse.headers);
        headers.set('Content-Disposition', `attachment; filename="${title}.mp4"`);
        
        return new Response(videoResponse.body, {
            status: videoResponse.status,
            headers: headers,
        });

    } else if (!response.ok) {
         const errorBody = await response.text();
         console.error('Backend stream API error:', errorBody);
         return NextResponse.json({ error: 'Failed to initiate stream from backend.' }, { status: response.status });
    }

    // If the response is not a redirect and is okay (e.g. direct stream)
    const headers = new Headers(response.headers);
    headers.set('Content-Disposition', `attachment; filename="${title}.mp4"`);
     return new Response(response.body, {
        status: response.status,
        headers: headers,
    });


  } catch (error) {
    console.error('Error in stream proxy:', error);
    return NextResponse.json({ error: 'An internal error occurred while processing the stream.' }, { status: 500 });
  }
}
