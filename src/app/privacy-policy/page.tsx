import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Our privacy policy details how we handle user data and protect your privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
      <div className="prose">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Your privacy is important to us. It is Multi Downloader's policy to respect your privacy regarding any information we may collect from you across our website.
        </p>
        
        <h2>Information We Collect</h2>
        <p>
          We do not collect or store any personal information. We do not store the URLs you enter or the videos you download. Our service is designed to be anonymous.
        </p>
        <p>
          We may log basic, non-identifying information for analytical purposes, such as the type of browser, language preference, referring site, and the date and time of each visitor request. This helps us understand how visitors use our website so we can improve the service. This information is never linked to any personal identifiers.
        </p>

        <h2>Use of Cookies</h2>
        <p>
          We do not use cookies for tracking purposes.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
        </p>

        <h2>Your Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>

        <h2>Changes to Our Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </div>
    </div>
  );
}
