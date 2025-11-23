import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Terms of Service for using the Multi Downloader website.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
      <div className="prose">
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <p>
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Multi Downloader website (the "Service") operated by us.
        </p>
        
        <p>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
        </p>
        
        <h2>Content and Copyright</h2>
        <p>
          Our Service allows you to download publicly available content from various social media platforms. You are solely responsible for the content you download. You agree not to download any content that is copyrighted, protected by trade secret, or otherwise subject to third-party proprietary rights, including privacy and publicity rights, unless you are the owner of such rights or have permission from their rightful owner to post the material and to grant us all of the license rights granted herein.
        </p>
        <p>
          Multi Downloader does not host, store, or archive any video or audio content. We provide a service that acts as a technical intermediary, allowing users to access content that is already publicly available.
        </p>
        
        <h2>Disclaimer</h2>
        <p>
          The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
        </p>

        <h2>Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us.
        </p>
      </div>
    </div>
  );
}
