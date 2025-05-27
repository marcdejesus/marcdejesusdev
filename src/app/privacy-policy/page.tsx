
import type { Metadata } from 'next';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Privacy Policy | ${APP_NAME}`,
  description: `Privacy Policy for ${APP_NAME}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Introduction</h2>
        <p>
          Welcome to {APP_NAME} ("we", "our", "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at [Your Contact Email].
        </p>
        <p>
          This privacy notice describes how we might use your information if you:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Visit our website at [Your Website URL]</li>
          <li>Engage with us in other related ways ― including any sales, marketing, or events</li>
        </ul>
        <p>In this privacy notice, if we refer to:</p>
        <ul className="list-disc list-inside space-y-1">
            <li>"Website," we are referring to any website of ours that references or links to this policy</li>
            <li>"Services," we are referring to our Website, and other related services, including any sales, marketing, or events</li>
        </ul>
        <p>The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. What Information Do We Collect?</h2>
        <p>
          <strong>Personal information you disclose to us</strong>
        </p>
        <p>
          <em>In Short: We collect personal information that you provide to us.</em>
        </p>
        <p>
          We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
        </p>
        <p>
          The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: names; email addresses; phone numbers; mailing addresses; job titles; contact preferences; contact or authentication data; billing addresses; and other similar information.
        </p>
        <p>
          <strong>Information automatically collected</strong>
        </p>
        <p>
          <em>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Website.</em>
        </p>
        <p>
          We automatically collect certain information when you visit, use or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes.
        </p>
        <p>
          Like many businesses, we also collect information through cookies and similar technologies.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">3. How Do We Use Your Information?</h2>
        <p>
          <em>In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</em>
        </p>
        <p>
          We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Will Your Information Be Shared With Anyone?</h2>
        <p>
          <em>In Short: We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</em>
        </p>
        <p>
          We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, Legal Obligations, Vital Interests.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. How Long Do We Keep Your Information?</h2>
        <p>
          <em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</em>
        </p>
        <p>
          We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. How Do We Keep Your Information Safe?</h2>
        <p>
          <em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em>
        </p>
        <p>
          We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">7. What Are Your Privacy Rights?</h2>
        <p>
          <em>In Short: In some regions, such as the European Economic Area (EEA) and United Kingdom (UK), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</em>
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Controls for Do-Not-Track Features</h2>
        <p>
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">9. Do We Make Updates to This Notice?</h2>
        <p>
          <em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
        </p>
        <p>
          We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">10. How Can You Contact Us About This Notice?</h2>
        <p>
          If you have questions or comments about this notice, you may email us at [Your Contact Email].
        </p>
        <p className="mt-8"><em>Please replace bracketed placeholders (e.g., [Your Website URL], [Your Contact Email]) with your actual information. This is a template and should be reviewed by a legal professional.</em></p>
      </div>
    </div>
  );
}
