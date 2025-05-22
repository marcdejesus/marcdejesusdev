import type { Metadata } from 'next';
import { AboutContent } from '@/components/about/AboutContent';
import { APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `About Me | ${APP_NAME}`,
  description: `Learn more about the skills, experience, and passion behind ${APP_NAME}. Discover the journey and expertise in digital solutions.`,
};

export default function AboutPage() {
  return (
    <AboutContent />
  );
}
