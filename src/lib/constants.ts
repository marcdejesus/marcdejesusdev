
import type { Project, Skill, SocialLink, Tool, NavItem, ProjectCategory, UpdatePost } from '@/types'; // Updated to UpdatePost
import { Github, Linkedin, X, Instagram, Code, Database, LayoutDashboard, Smartphone, Search, GitBranch, Figma, Briefcase, Home, User, Mail, FileText, MessageSquare, Newspaper } from 'lucide-react'; // Added Newspaper

export const APP_NAME = "Marc De Jesus Portfolio";
export const BRAND_NAME = "Marc De Jesus";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Updates', href: '/updates' }, // Changed from Blog to Updates, href to /updates
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

export const UPDATE_POSTS: UpdatePost[] = [ // Renamed from BLOG_POSTS, type UpdatePost[]
  {
    id: '1',
    slug: 'case-study-ecommerce-revamp',
    title: "Revamping Client X's E-commerce Platform: A Case Study",
    date: '2024-07-20T10:00:00Z',
    excerpt: "How we boosted conversion rates by 30% through a targeted UX overhaul and performance optimization for Client X's online store.",
    content: `
      <p>This case study details the successful revamp of an e-commerce platform for "Client X," a growing online retailer. The primary goals were to enhance user experience, improve performance, and ultimately increase conversion rates.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">The Challenge</h2>
      <p>Client X's existing platform suffered from an outdated design, slow load times, and a cumbersome checkout process. User engagement was low, and cart abandonment rates were high.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Our Solution</h2>
      <p>We implemented a multi-faceted approach:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Complete UI/UX Redesign:</strong> Focused on a modern, intuitive interface, mobile-first design, and simplified navigation. We utilized Figma for prototyping and user testing.</li>
        <li><strong>Technology Stack Upgrade:</strong> Migrated the frontend to Next.js and React for improved performance and SEO. The backend was optimized using Node.js and Express.</li>
        <li><strong>Performance Optimization:</strong> Implemented image optimization, code splitting, server-side rendering (SSR), and a CDN to drastically reduce page load times.</li>
        <li><strong>Streamlined Checkout:</strong> Redesigned the checkout process into a simple, multi-step flow, integrating with Stripe for secure payments.</li>
      </ul>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Results</h2>
      <p>The project was a resounding success:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Conversion rates increased by <strong>30%</strong> within three months of launch.</li>
        <li>Average page load time decreased by <strong>60%</strong>.</li>
        <li>Mobile user engagement saw a <strong>45%</strong> uplift.</li>
        <li>Cart abandonment rate dropped by <strong>25%</strong>.</li>
      </ul>
      <p>This project highlights the impact of a user-centric design approach combined with modern web technologies in achieving significant business outcomes.</p>
    `,
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ecommerce analytics improvement',
    author: BRAND_NAME,
    tags: ['Case Study', 'E-commerce', 'UX Design', 'Next.js', 'Performance'],
  },
  {
    id: '2',
    slug: 'nextjs-certification-complete',
    title: 'Completed Advanced Next.js Certification',
    date: '2024-06-15T14:30:00Z',
    excerpt: 'Excited to announce the completion of an advanced certification in Next.js, deepening expertise in server components, performance, and new features.',
    content: `
      <p>I'm thrilled to share that I have successfully completed an advanced certification program focused on Next.js. This intensive course covered the latest features and best practices for building high-performance, scalable web applications.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Key Areas of Focus</h2>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>App Router Mastery:</strong> In-depth understanding of layouts, route groups, server components, and client components.</li>
        <li><strong>Advanced Data Fetching:</strong> Strategies for efficient data fetching, caching, and revalidation.</li>
        <li><strong>Server Actions:</strong> Implementing mutations and form handling directly within server components.</li>
        <li><strong>Performance Optimization:</strong> Techniques for optimizing bundle sizes, Core Web Vitals, and overall application speed.</li>
        <li><strong>Deployment and Scaling:</strong> Best practices for deploying Next.js applications on platforms like Vercel.</li>
      </ul>
      <p>This certification not only solidifies my existing knowledge but also equips me with advanced techniques to deliver even more robust and efficient solutions for clients and personal projects. I'm eager to apply these new skills to future development endeavors.</p>
      <p>Continuous learning is a cornerstone of my professional philosophy, and staying current with frameworks like Next.js is crucial in the fast-evolving world of web development.</p>
    `,
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'certificate document code',
    author: BRAND_NAME,
    tags: ['Professional Development', 'Next.js', 'Certification', 'Web Development'],
  },
  {
    id: '3',
    slug: 'developing-mobile-task-manager',
    title: "Developing the 'Mobile Task Manager': From Concept to Launch",
    date: '2024-05-01T09:00:00Z',
    excerpt: 'A behind-the-scenes look at the development process of the Mobile Task Manager app, challenges faced, and key learnings from this React Native project.',
    content: `
      <p>The Mobile Task Manager app was an exciting project aimed at creating a user-friendly, cross-platform tool for personal and team productivity. This post offers a glimpse into its journey from initial concept to a fully functional application.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Project Goals</h2>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Develop a cross-platform app (iOS and Android) using React Native.</li>
        <li>Implement real-time task synchronization for collaborative use.</li>
        <li>Ensure offline capabilities for uninterrupted productivity.</li>
        <li>Design an intuitive and visually appealing user interface.</li>
      </ul>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Technological Choices</h2>
      <p>We opted for React Native for its ability to write once and deploy on multiple platforms. Firebase was chosen for backend services, including Firestore for real-time database capabilities and Authentication. Redux Toolkit was used for state management, providing a predictable and scalable way to handle application data.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Challenges & Solutions</h2>
      <p>One of the main challenges was ensuring smooth real-time synchronization across devices with varying network conditions. We addressed this by leveraging Firestore's real-time listeners and implementing robust local caching strategies.</p>
      <p>Optimizing performance for a wide range of devices also required careful attention to component rendering and state updates. Tools like Flipper and React DevTools were invaluable for debugging and profiling.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Key Learnings</h2>
      <p>This project reinforced the importance of thorough planning, iterative development, and continuous user feedback. The choice of React Native and Firebase proved effective for rapid development and deployment. Managing complex state in a real-time application also provided significant learning opportunities.</p>
      <p>The Mobile Task Manager now helps users stay organized and productive, and it stands as a testament to the power of modern mobile app development frameworks.</p>
    `,
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'mobile app interface design',
    author: BRAND_NAME,
    tags: ['Case Study', 'Mobile App', 'React Native', 'Firebase', 'Project Management'],
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
