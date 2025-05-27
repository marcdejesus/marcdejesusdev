import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { APP_NAME, BRAND_NAME } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'Terms of Service',
  description: `Terms of Service for ${APP_NAME}. Please read these terms carefully before using our website and services.`,
  noindex: true, // Legal pages typically shouldn't be indexed
});

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Introduction</h2>
        <p>
          Welcome to {APP_NAME} ("we", "our", "us"). These Terms of Service ("Terms") govern your use of our website located at https://marcdejesus.dev (the "Service") operated by {BRAND_NAME}.
        </p>
        <p>
          Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.
        </p>
        <p>
          Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
        </p>
        <p>
          If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at marcdejesusdev@gmail.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. About Our Services</h2>
        <p>
          This website serves as a portfolio and professional showcase for {BRAND_NAME}. Through this platform, we offer:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Portfolio display of web development and design projects</li>
          <li>Professional updates and educational content</li>
          <li>Contact form for project inquiries and collaborations</li>
          <li>Information about freelance and consulting services offered through De Jesus Digital Solutions</li>
          <li>Tutoring and educational services</li>
        </ul>
        <p>
          Please note that freelance and contract work is conducted through De Jesus Digital Solutions (https://dejesusdigitalsolutions.com), which operates under separate terms and agreements.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Acceptable Use</h2>
        <p>
          You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>In any way that violates any applicable national or international law or regulation</li>
          <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise</li>
          <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation</li>
          <li>To impersonate or attempt to impersonate {BRAND_NAME}, our employees, another user, or any other person or entity</li>
          <li>To use automated systems, bots, or scrapers to access or collect data from our website</li>
          <li>To submit false or misleading information through our contact forms</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Contact Forms and Communications</h2>
        <p>
          When you use our contact forms or communicate with us through the website:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>You consent to receive responses via email to the address you provide</li>
          <li>You may opt-in to receive marketing communications about our services and updates</li>
          <li>You can unsubscribe from marketing communications at any time</li>
          <li>Information submitted through contact forms will be handled according to our Privacy Policy</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Intellectual Property</h2>
        <p>
          The Service and its original content (excluding content provided by users), features and functionality are and will remain the exclusive property of {BRAND_NAME} and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks may not be used in connection with any product or service without our prior written consent.
        </p>
        <p>
          Project showcases and portfolio items displayed on this website are the intellectual property of {BRAND_NAME} and/or respective clients. These works are shown for demonstration purposes only and may not be reproduced or used without permission.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Third-Party Services</h2>
        <p>
          Our website may integrate with third-party services including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Email.js for contact form functionality</li>
          <li>Google Analytics for website analytics (if implemented)</li>
          <li>Social media platforms for external links</li>
          <li>GitHub for project repositories</li>
        </ul>
        <p>
          Use of these third-party services is subject to their respective terms of service and privacy policies.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Limitation of Liability</h2>
        <p>
          In no event shall {BRAND_NAME}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Termination</h2>
        <p>
          We may terminate or suspend your access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">9. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the State of Michigan, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">10. Changes to Service</h2>
        <p>
          We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">11. Amendments to Terms</h2>
        <p>
          We may amend these Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.
        </p>
        <p>
          Your continued use of the platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">12. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact us at:
        </p>
        <ul className="list-none space-y-1">
          <li>Email: marcdejesusdev@gmail.com</li>
          <li>Location: Macomb, MI, United States</li>
          <li>Website: https://marcdejesus.dev</li>
        </ul>
        
        <p className="mt-8 text-sm text-muted-foreground">
          <em>These terms of service are effective as of the date shown above. For business services and contracts, separate terms may apply through De Jesus Digital Solutions.</em>
        </p>
      </div>
    </div>
  );
}
