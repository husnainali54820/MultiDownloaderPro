# All Social Media Downloader

This is a Next.js project for a high-performance, SEO-friendly social media video downloader. It uses a secure serverless architecture to interact with a private downloader API, ensuring your API keys are never exposed on the client side.

The project is built with Next.js App Router, React Server Components, and Tailwind CSS, following modern web development best practices.

## Features

- **Secure Backend:** Uses Next.js Server Actions and Route Handlers to proxy requests to your private API. API keys are stored securely as environment variables.
- **Multiple Platforms:** Individual, SEO-optimized pages for YouTube, TikTok, Instagram, Facebook, and X (Twitter).
- **Dynamic SEO Content:** Content for each downloader page is generated on-the-fly using a Genkit AI flow, ensuring rich, unique, and helpful text for better search engine ranking and AdSense approval.
- **Modern UI/UX:** A sleek dark theme with neon green accents, glassmorphism effects, and smooth animations.
- **Responsive Design:** Fully responsive layout that works on all devices, from mobile phones to desktops.
- **AdSense Ready:** Includes designated ad placeholder slots for easy integration with Google AdSense.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Environment Variables

This project requires environment variables to connect to the backend downloader API. Create a `.env.local` file in the root of your project and add the following variables:

```env
NETLIFY_API_KEY=<your_api_key>
NETLIFY_API_BASE=<your_api_base_url>
```

For example:
```env
NETLIFY_API_KEY=123Lock.on
NETLIFY_API_BASE=https://multi-downloader-production.up.railway.app
```

**Important:** Add `.env.local` to your `.gitignore` file to prevent committing your secret keys.

### Installation & Development

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at [http://localhost:9002](http://localhost:9002).

## Deployment

This project is optimized for deployment on platforms like Vercel or Firebase App Hosting.

1.  Push your code to a Git repository (e.g., GitHub, GitLab).
2.  Import your project into your preferred hosting provider (e.g., Vercel).
3.  **Configure Environment Variables** in your hosting provider's dashboard. Add the `NETLIFY_API_KEY` and `NETLIFY_API_BASE` variables with their respective values.
4.  The build command is `npm run build` and the output directory is typically detected automatically.
5.  Deploy your project.

## Project Structure

- `src/app/`: Contains all the routes and pages of the application, following the Next.js App Router convention.
  - `(downloader-pages)/[slug]`: Dynamic routes for each social media platform.
  - `api/`: API Route Handlers (e.g., for stream redirection).
  - `components/`: Reusable React components used throughout the app.
  - `lib/`: Contains server-side logic (Server Actions), type definitions, and utility functions.
- `public/`: Static assets like images and logos.
- `globals.css`: Global styles and Tailwind CSS configuration.
- `tailwind.config.ts`: Tailwind CSS theme and configuration.
- `next.config.ts`: Next.js configuration, including remote image patterns.
