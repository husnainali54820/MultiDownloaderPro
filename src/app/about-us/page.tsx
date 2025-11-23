import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Multi Downloader and our mission to provide a free and easy-to-use video downloading service.',
};

export default function AboutUsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
      <div className="prose">
        <h1>About Us</h1>
        <p>
          Welcome to Multi Downloader, your one-stop solution for downloading videos from all your favorite social media platforms. We believe that everyone should have the ability to save and watch their favorite online content, offline, anytime, anywhere.
        </p>
        <p>
          Our mission is to provide a fast, free, and easy-to-use service that respects user privacy. We built this tool using a secure serverless architecture, which means your download requests are handled safely and your data is never stored.
        </p>
        <h2>Our Technology</h2>
        <p>
          This website is a modern web application built with the latest technologies, including Next.js, React, and Tailwind CSS. We use a powerful backend API to extract video information and provide high-quality download links, ensuring a smooth and reliable experience for you.
        </p>
        <h2>Our Commitment</h2>
        <p>
          We are committed to maintaining a user-friendly platform that is accessible to everyone. We do not support the downloading of copyrighted content without permission and urge our users to respect the intellectual property rights of content creators.
        </p>
        <p>
          Thank you for choosing Multi Downloader. We hope you find our service useful!
        </p>
      </div>
    </div>
  );
}
