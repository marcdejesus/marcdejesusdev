import type { Project, Skill, SocialLink, Tool, NavItem, ProjectCategory } from '@/types';
import { Github, Linkedin, Twitter, Code, Database, LayoutDashboard, Smartphone, Search, GitBranch, Figma, Briefcase, Home, User, Mail, FileText } from 'lucide-react';

export const APP_NAME = "Marc De Jesus Portfolio";
export const BRAND_NAME = "Marc De Jesus";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const KEY_SKILLS: Skill[] = [
  { name: 'Next.js & React', icon: Code, level: 95 },
  { name: 'UI/UX Design', icon: Figma, level: 90 },
  { name: 'Node.js & Express', icon: Database, level: 85 },
  { name: 'Mobile App Development (React Native)', icon: Smartphone, level: 80 },
  { name: 'TypeScript', icon: Code, level: 90 },
  { name: 'Tailwind CSS', icon: LayoutDashboard, level: 95 },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'portfolio-website-v2',
    title: 'Modern Portfolio Website V2',
    category: 'Web Development',
    shortDescription: 'An updated personal portfolio showcasing modern web technologies and design principles.',
    longDescription: 'This project is the second iteration of my personal portfolio, built with Next.js, Tailwind CSS, and Framer Motion. It features a clean, responsive design, filterable project showcase, and an interactive contact form. The goal was to create a fast, accessible, and visually appealing platform to highlight my skills and projects.',
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'portfolio website',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'ShadCN UI'],
    liveDemoUrl: '#', // Replace with actual URL
    githubUrl: 'https://github.com/yourusername/portfolio-v2', // Replace
    images: [
      { url: 'https://placehold.co/800x600.png', alt: 'Project V2 Homepage', dataAiHint: 'website homepage' },
      { url: 'https://placehold.co/800x600.png', alt: 'Project V2 Detail Page', dataAiHint: 'project detail' },
    ],
    client: BRAND_NAME, // This will now be "Marc De Jesus"
    role: 'Full-Stack Developer & UI/UX Designer',
    duration: '2 Months'
  },
  {
    id: '2',
    slug: 'e-commerce-platform',
    title: 'E-commerce Platform',
    category: 'Web Development',
    shortDescription: 'A full-featured e-commerce platform with product listings, cart, and checkout functionalities.',
    longDescription: 'Developed a robust e-commerce solution enabling businesses to sell products online. Features include user authentication, product management, a shopping cart, secure checkout process, and an admin dashboard for managing orders and inventory. Built using the MERN stack (MongoDB, Express, React, Node.js).',
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ecommerce platform',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'Redux'],
    liveDemoUrl: '#',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    client: 'Startup X',
    role: 'Lead Developer',
    duration: '6 Months'
  },
  {
    id: '3',
    slug: 'mobile-task-manager',
    title: 'Mobile Task Manager',
    category: 'Mobile App',
    shortDescription: 'A cross-platform mobile app for task management and team collaboration.',
    longDescription: 'Designed and developed a React Native mobile application for individuals and teams to manage tasks, set deadlines, and track progress. Features include real-time updates, push notifications, and offline support. Focused on intuitive UI/UX for seamless productivity.',
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'mobile app',
    technologies: ['React Native', 'Firebase', 'Expo', 'TypeScript', 'Redux Toolkit'],
    liveDemoUrl: '#', // Link to app store or demo video
    githubUrl: 'https://github.com/yourusername/task-manager-app',
    client: 'Tech Solutions Inc.',
    role: 'Mobile App Developer',
    duration: '4 Months'
  },
  {
    id: '4',
    slug: 'design-system-consultancy',
    title: 'Design System Consultancy',
    category: 'UI/UX Design',
    shortDescription: 'Consulted on and helped implement a new design system for a growing SaaS company.',
    longDescription: 'Worked closely with a SaaS company to establish a comprehensive design system. This involved auditing existing UI components, defining design principles, creating a style guide, and developing a library of reusable React components. The new system improved design consistency and development efficiency across their products.',
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'design system',
    technologies: ['Figma', 'Storybook', 'React', 'Styled Components'],
    client: 'SaaS Innovators Co.',
    role: 'UI/UX Consultant & Frontend Developer',
    duration: '3 Months'
  }
];

export const PROJECT_CATEGORIES: ProjectCategory[] = ['Web Development', 'UI/UX Design', 'Mobile App', 'Consultation'];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: Github }, // Remember to update 'yourusername'
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin }, // Remember to update 'yourusername'
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: Twitter }, // Remember to update 'yourusername'
];

export const CORE_SKILLS: Skill[] = [
  ...KEY_SKILLS,
  { name: 'REST & GraphQL APIs', icon: Code, level: 88 },
  { name: 'Version Control (Git)', icon: GitBranch, level: 95 },
  { name: 'Agile Methodologies', icon: Briefcase, level: 90 },
  { name: 'Problem Solving', icon: Search, level: 92 },
];

export const TOOLSET: Tool[] = [
  { name: 'VS Code', icon: Code },
  { name: 'Figma', icon: Figma },
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: Github },
  { name: 'React', logoUrl: 'https://placehold.co/40x40.png', dataAiHint: 'React logo' },
  { name: 'Next.js', logoUrl: 'https://placehold.co/40x40.png', dataAiHint: 'NextJS logo' },
  { name: 'Node.js', logoUrl: 'https://placehold.co/40x40.png', dataAiHint: 'NodeJS logo' },
  { name: 'MongoDB', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Docker', logoUrl: 'https://placehold.co/40x40.png', dataAiHint: 'Docker logo' },
];

export const CONTACT_FORM_OPTIONS = {
  projectTypes: ['Web Development', 'UI/UX Design', 'Mobile App Development', 'Consultation', 'Other'],
  budgetRanges: ['<$1,000', '$1,000 - $5,000', '$5,000 - $10,000', '$10,000 - $20,000', '$20,000+'],
  timelines: ['1-2 Weeks', '1 Month', '1-3 Months', '3-6 Months', '6+ Months'],
};
