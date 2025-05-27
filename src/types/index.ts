
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon?: LucideIcon;
  level?: number; // Optional: e.g., 1-100 for a progress bar
}

export interface ProjectImage {
  url: string;
  alt: string;
  dataAiHint?: string;
}

export type ProjectCategory = 'Web Development' | 'UI/UX Design' | 'Mobile App' | 'Consultation';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory; // Primary category
  additionalCategories?: ProjectCategory[]; // Additional categories for filtering
  shortDescription: string;
  longDescription: string;
  coverImageUrl: string;
  dataAiHint?: string; // For cover image
  technologies: string[]; // Array of technology names
  liveDemoUrl?: string;
  githubUrl?: string;
  images?: ProjectImage[]; // Additional project images
  client?: string;
  role?: string;
  duration?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Tool {
  name:string;
  icon?: LucideIcon; // Lucide icon for the tool
  logoUrl?: string; // URL for actual logo if lucide icon is not sufficient
  svg?: string; // Inline SVG code for the logo
  dataAiHint?: string; // For logo image if logoUrl is used
}

export interface UpdatePost { // Renamed from BlogPost
  id: string;
  slug: string;
  title: string;
  date: string; // ISO date string
  excerpt: string;
  content: string; // Markdown or HTML content
  coverImageUrl: string;
  dataAiHint?: string;
  author: string;
  tags?: string[];
}

// Types for Services Section
export interface ServiceFeature {
  text: string;
  icon?: LucideIcon; // Optional icon for the feature
}

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  priceInfo: string; // e.g., "Starting at $X" or "Contact for Quote"
  originalPriceInfo?: string; // For showing original price during sales
  features: ServiceFeature[];
  icon?: LucideIcon;
  idealFor: string[]; // e.g., ["Restaurants", "Barbershops"]
  ctaLink: string; // Link for call to action, likely /contact
  ctaText: string;
}

export interface ServiceUpgrade {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  relatedPackages?: string[]; // IDs of packages this upgrade is relevant for
}

export interface SubscriptionService {
  id: string;
  title: string;
  description: string;
  priceInfo: string;
  originalPriceInfo?: string; // For showing original price during sales
  features: ServiceFeature[];
  icon?: LucideIcon;
  ctaLink: string;
  ctaText: string;
}

