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
  category: ProjectCategory;
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
  dataAiHint?: string; // For logo image
}

export interface BlogPost {
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
