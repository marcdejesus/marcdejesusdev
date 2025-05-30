
import type { Metadata } from 'next';
import { ServicesDisplay } from '@/components/services/ServicesDisplay';
import { APP_NAME, BRAND_NAME } from '@/lib/constants'; // Added BRAND_NAME

export const metadata: Metadata = {
  title: `Services | ${APP_NAME}`,
  description: `Discover the website packages, upgrades, and support services offered by ${BRAND_NAME} to help your small business succeed online.`,
};

export default function ServicesPage() {
  return (
    <ServicesDisplay />
  );
}
