'use server';

import { z } from 'zod';
import type { ExtractResult, VideoMeta } from '@/lib/types';

const urlSchema = z.string().url({ message: 'Please enter a valid URL.' });

export async function extractVideo(url: string): Promise<ExtractResult> {
  const validation = urlSchema.safeParse(url);
  if (!validation.success) {
    return { error: validation.error.errors[0].message };
  }

  const API_BASE = process.env.NETLIFY_API_BASE;
  const API_KEY = process.env.NETLIFY_API_KEY;

  if (!API_BASE || !API_KEY) {
    console.error('Server misconfigured: API_BASE or API_KEY is missing.');
    return { error: 'Server is not configured correctly. Please contact support.' };
  }

  try {
    const res = await fetch(`${API_BASE}/extract`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify({ url: validation.data }),
      // Add a timeout for the request
      signal: AbortSignal.timeout(20000), // 20 seconds
    });
    
    const data = await res.json();

    if (!res.ok) {
      return { error: data?.error || data?.detail || 'Failed to extract video information. The URL might be incorrect, private, or the service is temporarily down.' };
    }

    // Basic validation of the returned data
    if (!data.title || !data.thumbnail || !Array.isArray(data.options)) {
      return { error: 'Received invalid data from the download service.' };
    }

    return { data: data as VideoMeta };
  } catch (err) {
    if (err instanceof Error && err.name === 'TimeoutError') {
      return { error: 'The request timed out. The server might be busy.' };
    }
    console.error('Error fetching from external API:', err);
    return { error: 'An unexpected error occurred while trying to fetch video data.' };
  }
}
