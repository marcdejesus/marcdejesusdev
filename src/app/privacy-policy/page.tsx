import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { APP_NAME, BRAND_NAME } from '@/lib/constants';

export const metadata: Metadata = generateSEO({
  title: 'Privacy Policy',
  description: `Privacy Policy for ${APP_NAME}. Learn how we collect, use, and protect your personal information.`,
  noindex: true, // Legal pages typically shouldn't be indexed
});

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Introduction</h2>
        <p>
          Welcome to {APP_NAME} ("we", "our", "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at marcdejesusdev@gmail.com.
        </p>
        <p>
          This privacy notice describes how we might use your information if you:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Visit our website at https://marcdejesus.dev</li>
          <li>Use our contact forms to reach out to us</li>
          <li>Subscribe to our email updates or marketing communications</li>
          <li>Engage with us in other related ways ― including any sales, marketing, or events</li>
        </ul>
        <p>In this privacy notice, if we refer to:</p>
        <ul className="list-disc list-inside space-y-1">
            <li>"Website," we are referring to any website of ours that references or links to this policy</li>
            <li>"Services," we are referring to our Website, portfolio showcase, contact services, and other related services, including any consultations, tutoring, or educational content</li>
        </ul>
        <p>The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. What Information Do We Collect?</h2>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Personal Information You Provide to Us</h3>
        <p>
          <em>In Short: We collect personal information that you provide to us through our contact forms and communications.</em>
        </p>
        <p>
          We collect personal information that you voluntarily provide to us when you:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Fill out our contact form for project inquiries, support requests, tutoring sessions, or general questions</li>
          <li>Subscribe to our marketing emails or updates</li>
          <li>Contact us directly via email</li>
          <li>Engage with us on social media platforms</li>
        </ul>
        
        <p>The personal information we may collect includes:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Contact Data:</strong> Names, email addresses, phone numbers (if provided)</li>
          <li><strong>Project Information:</strong> Project type, budget range, timeline, project details</li>
          <li><strong>Professional Information:</strong> Job titles, company information, social media links (if provided)</li>
          <li><strong>Communication Preferences:</strong> Marketing subscription preferences</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Information Automatically Collected</h3>
        <p>
          <em>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.</em>
        </p>
        <p>
          We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>IP address and general location information</li>
          <li>Browser and device characteristics</li>
          <li>Operating system and technical specifications</li>
          <li>Language preferences</li>
          <li>Referring URLs and website navigation patterns</li>
          <li>Information about how and when you use our Website</li>
        </ul>
        <p>
          This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">3. How Do We Use Your Information?</h2>
        <p>
          <em>In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our communications with you, compliance with our legal obligations, and/or your consent.</em>
        </p>
        <p>
          We use personal information collected via our Website for a variety of business purposes described below:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>To respond to your inquiries:</strong> Process and respond to contact form submissions, project inquiries, support requests, and tutoring session requests</li>
          <li><strong>To send marketing communications:</strong> Send you updates about our services, portfolio additions, and educational content (only if you opt-in)</li>
          <li><strong>To improve our services:</strong> Understand how our website is used to improve user experience and service offerings</li>
          <li><strong>To maintain our website:</strong> Monitor and maintain the security and functionality of our website</li>
          <li><strong>To comply with legal obligations:</strong> Respond to legal requests and prevent misuse of our services</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Third-Party Services We Use</h2>
        <p>
          Our website integrates with the following third-party services:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Email.js:</strong> Processes contact form submissions and sends emails. Data is transmitted securely to enable email functionality.</li>
          <li><strong>Vercel (Hosting):</strong> Our website is hosted on Vercel, which may collect standard web analytics and performance data.</li>
          <li><strong>Google Analytics (if implemented):</strong> May be used to analyze website traffic and user behavior (anonymized data).</li>
          <li><strong>Social Media Platforms:</strong> Links to GitHub, LinkedIn, Twitter, and Instagram are provided for external engagement.</li>
        </ul>
        <p>
          Each of these services has their own privacy policies and terms of service. We recommend reviewing their policies if you have concerns about how your data is handled by these services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Will Your Information Be Shared With Anyone?</h2>
        <p>
          <em>In Short: We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</em>
        </p>
        <p>
          We may process or share your data in the following situations:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>With Service Providers:</strong> Email.js and hosting providers to deliver our services</li>
          <li><strong>Business Operations:</strong> When you inquire about freelance services, your information may be shared with De Jesus Digital Solutions for business purposes</li>
          <li><strong>Legal Requirements:</strong> If required by law or to protect our legal rights</li>
          <li><strong>With Your Consent:</strong> In any other cases, only with your explicit consent</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal information to third parties for marketing purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. How Long Do We Keep Your Information?</h2>
        <p>
          <em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em>
        </p>
        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law. Specifically:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Contact Form Data:</strong> Retained for up to 3 years to maintain communication history and provide ongoing support</li>
          <li><strong>Marketing Subscriptions:</strong> Retained until you unsubscribe or request deletion</li>
          <li><strong>Website Analytics:</strong> Typically retained for 1-2 years for website improvement purposes</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. How Do We Keep Your Information Safe?</h2>
        <p>
          <em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em>
        </p>
        <p>
          We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information.
        </p>
        <p>
          Our security measures include:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>HTTPS encryption for all website communications</li>
          <li>Secure third-party services for email processing</li>
          <li>Regular security updates and monitoring</li>
          <li>Limited access to personal information on a need-to-know basis</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">8. What Are Your Privacy Rights?</h2>
        <p>
          <em>In Short: You have rights that allow you greater access to and control over your personal information.</em>
        </p>
        <p>
          Depending on your location, you may have the following rights regarding your personal information:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</li>
          <li><strong>Right to Rectification:</strong> Request correction of inaccurate personal information</li>
          <li><strong>Right to Erasure:</strong> Request deletion of your personal information</li>
          <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your information</li>
          <li><strong>Right to Data Portability:</strong> Request a copy of your data in a portable format</li>
          <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at marcdejesusdev@gmail.com. We will respond to your request within 30 days.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">9. Controls for Do-Not-Track Features</h2>
        <p>
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">10. California Privacy Rights</h2>
        <p>
          If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Right to know what personal information is collected, used, shared or sold</li>
          <li>Right to delete personal information held by us</li>
          <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
          <li>Right to non-discrimination for exercising your CCPA rights</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">11. Updates to This Privacy Notice</h2>
        <p>
          <em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
        </p>
        <p>
          We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">12. How Can You Contact Us About This Notice?</h2>
        <p>
          If you have questions or comments about this notice, you may contact us at:
        </p>
        <ul className="list-none space-y-1">
          <li>Email: marcdejesusdev@gmail.com</li>
          <li>Location: Macomb, MI, United States</li>
          <li>Website: https://marcdejesus.dev</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">13. How Can You Review, Update, or Delete Data We Collect From You?</h2>
        <p>
          Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please email us at marcdejesusdev@gmail.com with "Privacy Request" in the subject line.
        </p>
        
        <p className="mt-8 text-sm text-muted-foreground">
          <em>This privacy policy is effective as of the date shown above. For business services conducted through De Jesus Digital Solutions, separate privacy policies may apply.</em>
        </p>
      </div>
    </div>
  );
}
