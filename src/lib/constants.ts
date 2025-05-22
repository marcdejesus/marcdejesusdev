import type { Project, Skill, SocialLink, Tool, NavItem, ProjectCategory, BlogPost } from '@/types';
import { Github, Linkedin, X, Instagram, Code, Database, LayoutDashboard, Smartphone, Search, GitBranch, Figma, Briefcase, Home, User, Mail, FileText, MessageSquare, Rss } from 'lucide-react';

export const APP_NAME = "Marc De Jesus Portfolio";
export const BRAND_NAME = "Marc De Jesus"; // Overall portfolio brand

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
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
    liveDemoUrl: '#', 
    githubUrl: 'https://github.com/marcdejesus/portfolio-v2', 
    images: [
      { url: 'https://placehold.co/800x600.png', alt: 'Project V2 Homepage', dataAiHint: 'website homepage' },
      { url: 'https://placehold.co/800x600.png', alt: 'Project V2 Detail Page', dataAiHint: 'project detail' },
    ],
    client: BRAND_NAME,
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
    githubUrl: 'https://github.com/marcdejesus/ecommerce-platform',
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
    liveDemoUrl: '#', 
    githubUrl: 'https://github.com/marcdejesus/task-manager-app',
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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'mastering-nextjs-app-router',
    title: 'Mastering the Next.js App Router for Modern Web Apps',
    date: '2024-07-15T10:00:00Z',
    excerpt: 'A deep dive into the Next.js App Router, exploring its benefits, best practices, and how to leverage Server Components for optimal performance.',
    content: `
      <p>The Next.js App Router, introduced in version 13, represents a significant shift in how we build applications with Next.js. It moves away from the traditional pages directory towards a more flexible and powerful routing system based on directories and special files (<code>page.tsx</code>, <code>layout.tsx</code>, <code>error.tsx</code>, etc.).</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Key Advantages</h2>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Server Components by Default:</strong> Reduces client-side JavaScript, leading to faster initial page loads.</li>
        <li><strong>Layouts:</strong> Easily create shared UI that persists across route changes.</li>
        <li><strong>Route Groups:</strong> Organize routes without affecting the URL path.</li>
        <li><strong>Streaming & Suspense:</strong> Improved perceived performance for dynamic content.</li>
      </ul>
      <p>Understanding these concepts is crucial for building high-performance, modern web applications. This post will walk you through practical examples and common patterns.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Getting Started</h2>
      <p>To start using the App Router, simply create an <code>app</code> directory in your Next.js project root. Then, you can create your first route by adding a <code>page.tsx</code> file within a new folder, e.g., <code>app/dashboard/page.tsx</code>.</p>
      <pre><code class="language-tsx hljs">// app/dashboard/page.tsx
export default function DashboardPage() {
  return <h1>Dashboard</h1>;
}</code></pre>
      <p>This is just the tip of the iceberg. The App Router offers much more, including nested layouts, error handling, loading UI, and Server Actions for data mutations.</p>
    `,
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'code abstract',
    author: BRAND_NAME,
    tags: ['Next.js', 'React', 'Web Development', 'App Router'],
  },
  {
    id: '2',
    slug: 'demystifying-tailwind-css',
    title: 'Demystifying Tailwind CSS: A Practical Guide',
    date: '2024-06-28T14:30:00Z',
    excerpt: 'Understand the philosophy behind Tailwind CSS, how it accelerates UI development, and tips for keeping your utility classes manageable.',
    content: `
      <p>Tailwind CSS has gained immense popularity for its utility-first approach to styling. Instead of writing custom CSS classes, you compose styles directly in your HTML using pre-defined utility classes.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Why Tailwind?</h2>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Rapid Prototyping:</strong> Quickly build complex UIs without leaving your HTML.</li>
        <li><strong>Consistency:</strong> Enforces a consistent design language through its predefined scale.</li>
        <li><strong>Performance:</strong> With Just-In-Time (JIT) mode, only the CSS you actually use is generated.</li>
        <li><strong>Customizable:</strong> Easily extend or override the default configuration.</li>
      </ul>
      <p>Some developers are initially hesitant due to the seemingly "verbose" class names in HTML, but many find that the benefits in development speed and maintainability outweigh this concern.</p>
      <pre><code class="language-html hljs">&lt;div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"&gt;
  &lt;div class="shrink-0"&gt;
    &lt;img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;div class="text-xl font-medium text-black"&gt;ChitChat&lt;/div&gt;
    &lt;p class="text-slate-500"&gt;You have a new message!&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      <p>Using <code>@apply</code> in your CSS files or creating components can help manage long lists of utility classes for repeated elements.</p>
    `,
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'css code',
    author: BRAND_NAME,
    tags: ['Tailwind CSS', 'CSS', 'Frontend', 'UI Development'],
  },
  {
    id: '3',
    slug: 'effective-ui-ux-design-principles',
    title: 'Core Principles for Effective UI/UX Design',
    date: '2024-05-10T09:00:00Z',
    excerpt: 'Explore fundamental UI/UX design principles that lead to intuitive, engaging, and user-friendly digital products.',
    content: `
      <p>Great UI/UX design is not just about aesthetics; it's about creating products that are usable, enjoyable, and solve real user problems. Several core principles guide this process.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Key Design Principles</h2>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>User-Centricity:</strong> Always design with the end-user in mind. Understand their needs, goals, and pain points.</li>
        <li><strong>Consistency:</strong> Maintain consistent design patterns, terminology, and interactions throughout the product.</li>
        <li><strong>Hierarchy:</strong> Use visual hierarchy (size, color, contrast, spacing) to guide the user's attention to important elements.</li>
        <li><strong>Feedback:</strong> Provide clear and timely feedback for user actions.</li>
        <li><strong>Simplicity:</strong> Strive for clarity and avoid unnecessary complexity. "Less is more" often applies.</li>
        <li><strong>Accessibility:</strong> Design for everyone, including users with disabilities (WCAG guidelines).</li>
      </ul>
      <p>Applying these principles requires empathy, iteration, and a willingness to test your designs with real users. Tools like Figma, Sketch, and Adobe XD are invaluable, but the principles themselves are tool-agnostic.</p>
      <p>Remember, good design is good business. Products that are easy and enjoyable to use are more likely to succeed.</p>
    `,
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'design sketch wireframe',
    author: BRAND_NAME,
    tags: ['UI/UX', 'Design', 'User Experience', 'Product Design'],
  },
];


export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/marcdejesus', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/marc-de-jes%C3%BAs-075185252/', icon: Linkedin },
  { name: 'X', url: 'https://x.com/marcdejesusdev', icon: X },
  { name: 'Instagram', url: 'https://www.instagram.com/marcdejesusdev/', icon: Instagram },
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
  projectTypes: ['General Question', 'Support Request', 'Job Inquiry', 'Paid Tutoring Session', 'Collaboration Idea', 'Freelance/Contract (via De Jesus Digital Solutions)', 'Other'],
  budgetRanges: ['N/A', '<$500 (Tutoring/Consult)', '$500 - $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000+ (Project)'],
  timelines: ['ASAP', 'Flexible', 'Within 1 Week', '1-2 Weeks', '1 Month', 'Specific Date (mention in details)'],
};
