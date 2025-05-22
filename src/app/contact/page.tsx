import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Contact | ${APP_NAME}`,
  description: `Get in touch with Marc De Jesus for project inquiries, collaborations, or any questions. Let's build something amazing together.`,
};

export default function ContactPage() {
  return (
    <ContactForm />
  );
}
