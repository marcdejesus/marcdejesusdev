
import type { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Terms of Service | ${APP_NAME}`,
  description: `Terms of Service for ${APP_NAME}.`,
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Introduction</h2>
        <p>
          Welcome to {APP_NAME} ("we", "our", "us"). These Terms of Service ("Terms") govern your use of our website located at [Your Website URL] (the "Service") operated by {APP_NAME}.
        </p>
        <p>
          Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.
        </p>
        <p>
          Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them.
        </p>
        <p>
          If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at [Your Contact Email] so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Use of Service</h2>
        <p>
          You may use the Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>In any way that violates any applicable national or international law or regulation.</li>
          <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
          <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
          <li>To impersonate or attempt to impersonate {APP_NAME}, a {APP_NAME} employee, another user, or any other person or entity.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Intellectual Property</h2>
        <p>
          The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of {APP_NAME} and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of {APP_NAME}.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Termination</h2>
        <p>
          We may terminate or suspend your access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Changes To Service</h2>
        <p>
          We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Amendments To Terms</h2>
        <p>
          We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.
        </p>
        <p>
          Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Contact Us</h2>
        <p>
          Please send your feedback, comments, requests for technical support by email: [Your Contact Email].
        </p>
        <p className="mt-8"><em>Please replace bracketed placeholders (e.g., [Your Website URL], [Your Contact Email], [Your State/Country]) with your actual information. This is a template and should be reviewed by a legal professional.</em></p>
      </div>
    </div>
  );
}
