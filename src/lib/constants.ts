
import type { Project, Skill, SocialLink, Tool, NavItem, ProjectCategory, UpdatePost, ServicePackage, ServiceUpgrade, SubscriptionService, ServiceFeature } from '@/types';
import { Github, Linkedin, X as XIcon, Instagram, Code, Database, LayoutDashboard, Smartphone, Search, GitBranch, Figma, Briefcase, Home, User, Mail, FileText, MessageSquare, Newspaper, Server, Zap, KeyRound, CreditCard, Bolt, Layers, Cpu, Cloud, Users, PenTool, GraduationCap, Award, Settings, Brain, Triangle, ShieldCheck, Eye, Youtube, Package, ArrowUpCircle, LifeBuoy, CheckCircle, Building, ShoppingCart, CalendarCheck, Sparkles, Wrench, Globe, DatabaseZap, FolderGit2, AppWindow } from 'lucide-react'; // Added AppWindow

export const APP_NAME = "Marc De Jesus Portfolio";
export const BRAND_NAME = "Marc De Jesus";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services'},
  { label: 'Updates', href: '/updates' },
  { label: 'Contact', href: '/contact' },
];

// KEY_SKILLS are used on the HeroSection, keep concise
export const KEY_SKILLS: Skill[] = [
  { name: 'Next.js & React', icon: Code },
  { name: 'UI/UX Design (Figma)', icon: Figma },
  { name: 'Node.js & Express', icon: Server },
  { name: 'Mobile App Development (React Native)', icon: Smartphone },
  { name: 'TypeScript', icon: Code },
  { name: 'Tailwind CSS', icon: LayoutDashboard },
];

export const PROJECTS: Project[] = [
  {
    id: '5',
    slug: 'first-baptist-church-fenton-proposal',
    title: 'First Baptist Church of Fenton (Proposal)',
    category: 'Web Development',
    additionalCategories: ['Consultation'],
    shortDescription: 'Proposed community website for a church featuring social interactions, business details, and event planning.',
    longDescription: "A proposal for a comprehensive community website for the First Baptist Church of Fenton. The platform aims to enhance member engagement through social features, provide clear information about the church's mission and activities, and streamline event planning and management. The technical stack proposed is MERN (MongoDB, Express, React, Node.js). This project also encompassed consultation on digital strategy for community outreach and engagement.",
    coverImageUrl: '/bible.webp',
    dataAiHint: 'church community website',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Consultation', 'Community Engagement', 'Event Planning'],
    liveDemoUrl: 'https://firstbaptistchurchfenton.vercel.app/',
    githubUrl: 'https://github.com/marcdejesus/firstbaptistchurchfenton',
    client: 'First Baptist Church of Fenton',
    role: 'Full-Stack Developer & Consultant',
    duration: 'Proposal Phase'
  },
  {
    id: '6',
    slug: 'gamified-ai-learning-app',
    title: 'Gamified AI Learning Application (Prototype)',
    category: 'Mobile App',
    shortDescription: 'A prototype mobile app using AI for gamified learning, featuring AI-generated courses and social elements. Developed for a Senior Design Capstone.',
    longDescription: 'This Gamified AI Learning Application is a prototype developed as a Senior Design Capstone project at Central Michigan University. It leverages React Native for the front-end, a Node.js backend, MongoDB for data storage, and the OpenAI API for its core AI functionalities. The application aims to make learning more engaging through features like AI-assisted learning, personalized AI-generated courses, educational minigames, progress tracking, quizzes, and social components like leaderboards. This project explores the intersection of gamification, artificial intelligence, and mobile education. This is a closed-source project.',
    coverImageUrl: '/tymelyne.png',
    dataAiHint: 'ai learning app',
    technologies: ['React Native', 'MongoDB', 'OpenAI API', 'Node.js', 'AI/ML', 'Gamification', 'Social Features', 'Progress Tracking', 'Quizzes'],
    liveDemoUrl: 'https://www.youtube.com/watch?v=placeholder_video_id', // Placeholder YouTube link
    // githubUrl is intentionally omitted as it's closed-source
    client: 'Senior Design Capstone Project (Central Michigan University)',
    role: 'Project Lead / Developer',
    duration: 'Academic Year (2024-2025)'
  },
  {
    id: '7',
    slug: 'de-jesus-digital-solutions-website',
    title: 'De Jesus Digital Solutions Website',
    category: 'Web Development',
    shortDescription: "Official website for De Jesus Digital Solutions, featuring client consultations, service requests, email marketing, and secure client portal for orders and payments.",
    longDescription: "The De Jesus Digital Solutions website serves as the primary online presence for the company. It's a full-stack application built with Next.js for the frontend, Supabase for the backend and database, and Node.js for specific server-side logic. Key features include a system for email marketing campaigns, contact forms for consultations and service requests, and a secure client portal where logged-in users can track their project orders, make payments, and access their completed digital products. The platform aims to streamline client interaction and project management.",
    coverImageUrl: '/djds.png',
    dataAiHint: 'business website homepage',
    technologies: ['Next.js', 'Supabase', 'Node.js', 'React', 'Tailwind CSS', 'Stripe API', 'Email Marketing', 'Client Portal'],
    liveDemoUrl: 'https://dejesusdigitalsolutions.com',
    // githubUrl: undefined, // Omitted as it might be closed-source
    images: [
      { url: 'https://placehold.co/800x600.png', alt: 'DJDS Homepage', dataAiHint: 'company website' },
      { url: 'https://placehold.co/800x600.png', alt: 'DJDS Client Portal', dataAiHint: 'client portal dashboard' },
    ],
    client: 'De Jesus Digital Solutions',
    role: 'Full-Stack Developer',
    duration: 'Ongoing Development'
  },
  {
    id: '8',
    slug: 'recipedium',
    title: 'Recipedium',
    category: 'Web Development',
    shortDescription: 'A recipe social media website with AI integration for recipe creation, user ratings, and comments.',
    longDescription: "Recipedium is a dynamic social media platform centered around recipes. It uniquely integrates AI (DeepSeek API) to assist users in generating new recipes. Users can share their culinary creations, rate recipes submitted by others, and leave comments detailing their experiences and modifications. Built on the MERN stack (MongoDB, Express.js, React, Node.js), Recipedium offers a rich, interactive experience for food enthusiasts to discover, create, and discuss recipes.",
    coverImageUrl: '/robochef.png',
    dataAiHint: 'recipe food social',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'DeepSeek API', 'AI Integration', 'Social Media Features'],
    liveDemoUrl: 'https://recipedium.vercel.app',
    githubUrl: 'https://github.com/marcdejesus/recipeblog',
    role: 'Full-Stack Developer',
    duration: 'Personal Project'
  },
  {
    id: '9',
    slug: 'treasure-coast-getaway',
    title: 'Treasure Coast Getaway',
    category: 'Web Development',
    shortDescription: 'A dedicated website to enhance SEO for an AirBNB property listing, built with Next.js and TailwindCSS.',
    longDescription: "Treasure Coast Getaway is a specialized website developed to boost the search engine visibility of an AirBNB property. Leveraging the power of Next.js for server-side rendering and static site generation capabilities, combined with the utility-first styling of TailwindCSS, this project aims to attract more organic traffic to the property's booking page. The site features property details, image galleries, and local attraction information, all optimized for search engines.",
    coverImageUrl: '/treasurecoast.webp',
    dataAiHint: 'vacation rental website',
    technologies: ['Next.js', 'TailwindCSS', 'SEO', 'AirBNB Promotion'],
    liveDemoUrl: 'https://treasure-coast-getaway.vercel.app/',
    // No GitHub URL as it's primarily an SEO/marketing site
    role: 'Developer',
    duration: 'Client Project'
  },
  {
    id: '10',
    slug: 'retro-type-wave',
    title: 'Retro Type Wave',
    category: 'Web Development',
    shortDescription: 'A retrowave themed typing trainer where users improve typing speed while evading police, featuring leaderboards, saved progress, and a music player.',
    longDescription: 'Immerse yourself in the neon-drenched world of Retro Type Wave, a unique typing trainer with a thrilling retrowave aesthetic. Sharpen your typing skills by accurately typing words and phrases to outrun a relentless police chase. The game features competitive leaderboards to track your high scores, progress saved locally via cookies, an integrated music player with retrowave tracks, and is optimized for search engines with Google AdSense integration for monetization. Can you type fast enough to escape?',
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'retrowave typing game',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'SEO', 'Google AdSense', 'Cookies', 'Leaderboards', 'Music Player'],
    liveDemoUrl: 'https://retrotypewave.com',
    // githubUrl: 'your-github-link-here', // Add if available
    role: 'Full-Stack Developer',
    duration: 'Personal Project'
  }
];

export const PROJECT_CATEGORIES: ProjectCategory[] = ['Web Development', 'UI/UX Design', 'Mobile App', 'Consultation'];

export const UPDATE_POSTS: UpdatePost[] = [
  {
    id: '6',
    slug: 'completed-vanderbilt-ai-agent-developer-certification',
    title: "Completed Vanderbilt AI Agent Developer Certification",
    date: '2025-05-20T10:00:00Z',
    excerpt: "Proud to have completed Vanderbilt University's AI Agent Developer Certification, gaining expertise in building multi-agent systems and extending AI capabilities.",
    content: `
      <p>I'm proud to share that I've completed Vanderbilt University's AI Agent Developer Professional Certification! This program has equipped me with the skills to harness the power of AI agents and build sophisticated automated systems.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Core Competencies Gained</h2>
      <p>This certification focused on the practical application of AI agent development. Key skills I've developed include:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Building Multi-Agent Systems:</strong> Designing and implementing systems where multiple AI agents collaborate to solve complex problems.</li>
        <li><strong>Task Delegation to Autonomous AI Workers:</strong> Creating AI workers that can autonomously perform tasks based on given objectives.</li>
        <li><strong>Extending GPT-Based Assistants:</strong> Developing custom tools and functions that enhance the capabilities of large language models like GPT.</li>
        <li><strong>Bridging APIs, Automation, and Intelligent Workflows:</strong> Integrating AI agents with external APIs and services to create seamless, intelligent automation.</li>
        <li><strong>AI System Automation:</strong> Coding functions for AI to use, instructing them on program interaction, and parsing AI output to create fully automated AI-driven systems.</li>
      </ul>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Future Applications and Prompt Engineering</h2>
      <p>I am excited to apply this knowledge to my future work, developing innovative solutions that leverage AI for enhanced efficiency and problem-solving. This certification has solidified my understanding of how to create robust AI-powered applications.</p>
      <p>Furthermore, this experience has underscored the importance of Prompt Engineering. If you are looking to grow as a professional in 2025, I strongly suggest familiarizing yourself with how to effectively communicate with and guide AI models to achieve desired outcomes. It's a critical skill in the evolving landscape of artificial intelligence.</p>
    `,
    coverImageUrl: '/vanderbilt.png',
    dataAiHint: 'AI agent certificate',
    author: BRAND_NAME,
    tags: ['Professional Development', 'AI', 'Agent Development', 'Vanderbilt University', 'Prompt Engineering', 'Automation'],
  },
  {
    id: '4',
    slug: 'graduated-central-michigan-university',
    title: "Graduated from Central Michigan University: A Journey Through CS and Entrepreneurship",
    date: '2025-05-10T12:00:00Z',
    excerpt: 'Celebrating the completion of a Bachelor of Science in Computer Science from Central Michigan University, and reflecting on the valuable experiences gained in the CS program, the College of Engineering, and my fraternity.',
    content: `
      <p>It is with great pride and excitement that I announce my graduation from Central Michigan University with a Bachelor of Science in Computer Science on May 10, 2025. This journey has been transformative, equipping me not only with technical expertise but also with invaluable entrepreneurial insights.</p>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">The Central Michigan University Computer Science Program</h2>
      <p>The Computer Science program at CMU offered a comprehensive curriculum that balanced theoretical knowledge with practical application. I delved into core areas such as software development, data structures and algorithms, database management, and artificial intelligence. The emphasis on hands-on projects and collaborative teamwork was particularly beneficial, allowing me to apply concepts to real-world scenarios and prepare for the dynamic tech industry.</p>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Entrepreneurial Values from the College of Engineering</h2>
      <p>My time within CMU's College of Engineering & Technology extended beyond just technical coursework. It fostered a spirit of innovation and problem-solving. Through various projects and interactions, I was exposed to design thinking, project management principles, and the importance of creating solutions that address tangible needs. This environment encouraged an entrepreneurial mindset, teaching me to approach challenges with creativity and a drive to build impactful products.</p>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Leadership and Growth Through Fraternity Life</h2>
      <p>My involvement in my fraternity provided a unique platform for personal and professional growth. Taking on leadership roles and participating in various initiatives helped hone my skills in teamwork, communication, event organization, and community engagement. These experiences were instrumental in developing soft skills that are crucial for any entrepreneurial endeavor, teaching me the importance of collaboration, networking, and effective leadership.</p>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Looking Ahead</h2>
      <p>As I embark on my professional career, I carry forward a strong technical foundation from my computer science studies, complemented by the innovative spirit nurtured by the College of Engineering and the leadership skills developed through my fraternity. I am eager to apply this holistic skill set to contribute to meaningful projects and continue learning and growing in the field of technology.</p>
      <p>Fire Up Chips!</p>
    `,
    coverImageUrl: '/graduated.png',
    dataAiHint: 'graduation cap university',
    author: BRAND_NAME,
    tags: ['Graduation', 'Central Michigan University', 'Computer Science', 'Entrepreneurship', 'Education', 'College of Engineering', 'Fraternity'],
  },
  {
    id: '5',
    slug: 'completed-google-ux-design-certification',
    title: "Completed Google UX Design Professional Certificate",
    date: '2025-05-06T10:00:00Z',
    excerpt: "Successfully completed the Google UX Design Professional Certificate, gaining hands-on experience in user-centered design processes, from empathy to prototyping and testing.",
    content: `
      <p>I'm excited to share that I've successfully completed the Google UX Design Professional Certificate through Coursera. This program provided extensive hands-on experience with Google’s industry-recognized UX design process, which has been invaluable.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Key Learnings and Experiences</h2>
      <p>Throughout the certificate program, I delved deep into the core principles of user experience design. Here are some of the key areas I focused on:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Empathizing with Users:</strong> Learning to conduct user research and develop empathy maps to truly understand user needs, pain points, and motivations.</li>
        <li><strong>Defining Core Design Problems:</strong> Developing problem statements and value propositions to ensure design efforts are focused and impactful.</li>
        <li><strong>Developing User-Centered Solutions:</strong> Creating user flows, wireframes, and low-fidelity prototypes to ideate and iterate on design solutions.</li>
        <li><strong>Prototyping and Usability Testing:</strong> Building interactive prototypes in tools like Figma and conducting usability tests to gather feedback and refine designs.</li>
      </ul>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Applying UX Principles</h2>
      <p>I’ve already begun applying these principles directly to my own design practices. This has resulted in more thoughtful, inclusive, and intuitive user experiences in my projects. Understanding the 'why' behind design decisions and grounding them in user research has significantly enhanced the quality and effectiveness of my work.</p>
      <p>This certification reinforces my commitment to creating digital products that are not only functional but also delightful and accessible for all users.</p>
    `,
    coverImageUrl: '/googleux.jpg',
    dataAiHint: 'UX design certificate',
    author: BRAND_NAME,
    tags: ['Professional Development', 'UX Design', 'Google Certification', 'Coursera', 'User Experience'],
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/marcdejesus', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/marc-de-jes%C3%BAs-075185252/', icon: Linkedin },
  { name: 'X', url: 'https://x.com/marcdejesusdev', icon: XIcon },
  { name: 'Instagram', url: 'https://www.instagram.com/marcdejesusdev/', icon: Instagram },
];

// CORE_SKILLS for About Page - based on resume
export const CORE_SKILLS: Skill[] = [
  // Frontend
  { name: 'Next.js', icon: Layers },
  { name: 'React', icon: Code },
  { name: 'React Native', icon: Smartphone },
  { name: 'Vite', icon: Zap },
  { name: 'TailwindCSS', icon: LayoutDashboard },
  { name: 'Responsive Design', icon: Smartphone },
  // Backend
  { name: 'Node.js', icon: Server },
  { name: 'Django', icon: Code },
  { name: 'Supabase', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Oracle XE', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  // Languages
  { name: 'JavaScript', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Python', icon: Code },
  { name: 'Java', icon: Code },
  { name: 'C#', icon: Code },
  { name: 'SQL', icon: Database },
  // API/Integrations
  { name: 'OpenAI API', icon: Cpu },
  { name: 'Google OAuth', icon: KeyRound },
  { name: 'Stripe API', icon: CreditCard },
  { name: 'Redis', icon: Bolt },
  { name: 'SSO (Single Sign-On)', icon: ShieldCheck },
  // Methodologies
  { name: 'Agile Development', icon: Users },
  { name: 'Design Research', icon: PenTool },
  { name: 'Git & Version Control', icon: GitBranch },
  { name: 'SEO', icon: Search },
];

export const TOOLSET: Tool[] = [
  // Design
  { name: 'Figma', icon: Figma },
  { name: 'Adobe Creative Cloud', icon: Layers, dataAiHint: "adobe creative suite" },
  // Development
  { name: 'VS Code', icon: Code },
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: Github },
  { name: 'Docker', icon: GitBranch }, // Changed to GitBranch icon
  { name: 'AI', icon: Cpu },           // Added AI
  // Platforms
  { name: 'Vercel', icon: Triangle, dataAiHint: 'Vercel logo' },
  { name: 'AWS', icon: Cloud, dataAiHint: 'AWS logo' },
  { name: 'Google Cloud', icon: Cloud, dataAiHint: 'Google Cloud logo' },
];

export const CONTACT_FORM_OPTIONS = {
  projectTypes: ['General Question', 'Support Request', 'Job Inquiry', 'Paid Tutoring Session', 'Collaboration Idea', 'Freelance/Contract (via De Jesus Digital Solutions)', 'Other'],
  budgetRanges: ['N/A', '<$500 (Tutoring/Consult)', '$500 - $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000+ (Project)'],
  timelines: ['ASAP', 'Flexible', 'Within 1 Week', '1-2 Weeks', '1 Month', 'Specific Date (mention in details)'],
};

// For About Page Sections
export const PROFESSIONAL_EXPERIENCE = [
  {
    title: "Full-Stack Developer",
    company: "De Jesus Digital Solutions, LLC",
    company_url: "https://dejesusdigitalsolutions.com",
    dates: "January 2025 - Present",
    description: [
      "(Team of 2) Developed a full-stack mobile application using React Native, Node.js, MongoDB Atlas, Docker, OpenAI API, and Git for Version Control. The app uses AI to generate courses for users and offers social features such as leaderboards and user data metric visualizations.",
      "(Solo) Developed a website for our company using Vite, React, TailwindCSS, Supabase, Google OAuth. Has features such as email marketing, company blog, SEO, and consultation forms.",
      "(Solo) Developed a website using Next.js, React, TailwindCSS, Node.js, MongoDB Atlas to generate revenue off of recipe searches. Uses a large recipe database, allows users to comment, like, save, and create recipes.",
      "(Solo) Developed an e-commerce website for a client using Next.js, React, Supabase, Stripe, Redis."
    ]
  },
  {
    title: "Low Voltage Electrician",
    company: "Low V Outdoor Lighting",
    dates: "May 2024 - August 2024",
    description: [
      "Programmed satellite timers to account for daylight savings time to power lights.",
      "Troubleshooted and installed low voltage systems."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Central Michigan University",
    graduation: "May 2025"
  },
  {
    degree: "High School Diploma",
    institution: "L’Anse Creuse High School - North",
    graduation: "June 2021"
  }
];

export const CERTIFICATIONS = [
   {
    name: "Google UX Design",
    issuer: "Google Career Certificates",
    year: "2025"
  },
  {
    name: "AI Agent Developer",
    issuer: "Vanderbilt University",
    year: "2025"
  },
  {
    name: "Meta Front-End Developer",
    issuer: "Meta",
    year: "In Progress"
  },
  {
    name: "Meta iOS Developer",
    issuer: "Meta",
    year: "In Progress"
  },
  {
    name: "Meta Android Developer",
    issuer: "Meta",
    year: "In Progress"
  },
  {
    name: "Meta Back-End Developer",
    issuer: "Meta",
    year: "In Progress"
  },
  {
    name: "Google Cybersecurity",
    issuer: "Google Career Certificates",
    year: "In Progress"
  },
  {
    name: "Google Digital-Marketing & E-Commerce",
    issuer: "Google Career Certificates",
    year: "In Progress"
  }
];

// SERVICES SECTION DATA
export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'starter-website',
    title: 'Starter Website Package',
    description: 'Perfect for new businesses or individuals needing a professional online presence quickly. Get a beautiful, responsive landing page or small informational site.',
    originalPriceInfo: 'Starting at $750',
    priceInfo: 'Launch Sale: Starting at $375',
    icon: Globe,
    features: [
      { text: '1-3 Page Custom Design', icon: CheckCircle },
      { text: 'Mobile-Responsive Layout', icon: CheckCircle },
      { text: 'Basic SEO Setup', icon: CheckCircle },
      { text: 'Contact Form Integration', icon: CheckCircle },
      { text: 'Social Media Links', icon: CheckCircle },
    ],
    idealFor: ['Startups', 'Freelancers', 'Local Businesses'],
    ctaLink: '/contact?service=starter-website',
    ctaText: 'Get Started'
  },
  {
    id: 'business-pro-website',
    title: 'Business Pro Website',
    description: 'A comprehensive website solution for growing businesses. Includes more pages, advanced features, and content management capabilities.',
    originalPriceInfo: 'Starting at $1,500',
    priceInfo: 'Launch Sale: Starting at $750',
    icon: Building,
    features: [
      { text: 'Up to 10 Custom Designed Pages', icon: CheckCircle },
      { text: 'Content Management System (CMS)', icon: CheckCircle },
      { text: 'Advanced SEO Optimization', icon: CheckCircle },
      { text: 'Blog Setup & Integration', icon: CheckCircle },
      { text: 'Google Analytics Setup', icon: CheckCircle },
    ],
    idealFor: ['Small to Medium Businesses', 'Service Providers', 'Restaurants'],
    ctaLink: '/contact?service=business-pro',
    ctaText: 'Inquire Now'
  },
  {
    id: 'ecommerce-powerhouse',
    title: 'E-commerce Powerhouse',
    description: 'Launch your online store with a powerful and scalable e-commerce platform. Includes product listings, secure payments, and inventory management.',
    originalPriceInfo: 'Starting at $2,500',
    priceInfo: 'Launch Sale: Starting at $1,250',
    icon: ShoppingCart,
    features: [
      { text: 'Full E-commerce Store Setup', icon: CheckCircle },
      { text: 'Secure Payment Gateway Integration', icon: CheckCircle },
      { text: 'Product Catalog & Management', icon: CheckCircle },
      { text: 'Shopping Cart & Checkout System', icon: CheckCircle },
      { text: 'Basic Inventory Tracking', icon: CheckCircle },
    ],
    idealFor: ['Online Retailers', 'Boutiques', 'Product-based Businesses'],
    ctaLink: '/contact?service=ecommerce',
    ctaText: 'Build Your Store'
  },
];

export const MOBILE_APP_PACKAGES: ServicePackage[] = [
  {
    id: 'essential-mobile-app',
    title: 'Essential Mobile App',
    description: 'Get your idea off the ground with a sleek, functional mobile app for iOS & Android. Perfect for MVPs or simple utilities.',
    originalPriceInfo: 'Starting at $1,999',
    priceInfo: 'Launch Sale: Starting at $999',
    icon: Smartphone,
    features: [
      { text: 'Up to 3 Core Screens', icon: CheckCircle },
      { text: 'Basic UI/UX Design', icon: CheckCircle },
      { text: 'Core Feature Implementation', icon: CheckCircle },
      { text: 'Cross-Platform (React Native)', icon: CheckCircle },
      { text: 'App Store Submission Guidance', icon: CheckCircle },
    ],
    idealFor: ['Startups', 'Entrepreneurs', 'Utility Apps'],
    ctaLink: '/contact?service=essential-mobile-app',
    ctaText: 'Start My App'
  },
  {
    id: 'pro-mobile-app',
    title: 'Pro Mobile App',
    description: 'A comprehensive mobile app solution with custom features, API integrations, and a polished user experience for iOS & Android.',
    originalPriceInfo: 'Starting at $4,999',
    priceInfo: 'Launch Sale: Starting at $2,499',
    icon: Layers, // Using Layers for a more "pro" feel
    features: [
      { text: 'Up to 7 Custom Screens', icon: CheckCircle },
      { text: 'Advanced UI/UX Design (Figma)', icon: CheckCircle },
      { text: 'API Integration / Backend Setup', icon: CheckCircle },
      { text: 'User Authentication & Profiles', icon: CheckCircle },
      { text: 'Push Notifications (Basic Setup)', icon: CheckCircle },
    ],
    idealFor: ['Growing Businesses', 'SaaS Companion Apps', 'Social Platforms'],
    ctaLink: '/contact?service=pro-mobile-app',
    ctaText: 'Develop Pro App'
  },
];


export const SERVICE_UPGRADES: ServiceUpgrade[] = [
  {
    id: 'booking-system',
    title: 'Online Booking System',
    description: 'Allow customers to book appointments, services, or reservations directly on your website. Ideal for barbershops, salons, restaurants, and consultants.',
    icon: CalendarCheck,
    relatedPackages: ['starter-website', 'business-pro-website'],
  },
  {
    id: 'local-seo-boost',
    title: 'Local SEO Boost',
    description: 'Improve your visibility in local search results (Google Maps, local listings) to attract more nearby customers.',
    icon: Search,
    relatedPackages: ['starter-website', 'business-pro-website'],
  },
  {
    id: 'menu-service-catalog',
    title: 'Online Menu / Service Catalog',
    description: 'Display your restaurant menu or list of services in an attractive, easy-to-navigate online format.',
    icon: FileText,
    relatedPackages: ['starter-website', 'business-pro-website'],
  },
   {
    id: 'cms-integration',
    title: 'Content Management System (CMS)',
    description: 'Easily update your website content (text, images, blog posts) without needing technical skills.',
    icon: Settings,
     relatedPackages: ['starter-website'],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Enhance your website with AI-powered features like chatbots, content generation, personalized user experiences, AI agents, and task automation.',
    icon: Cpu,
    relatedPackages: ['business-pro-website', 'ecommerce-powerhouse'],
  },
  {
    id: 'data-scraping-lead-gen',
    title: 'Data Scraping & Lead Generation',
    description: 'Automated data scraping using Python to gather targeted leads for your business. Leads can be exported in various formats (CSV, Excel, JSON).',
    icon: DatabaseZap,
    relatedPackages: ['business-pro-website'],
  }
];

export const SUBSCRIPTION_SERVICE: SubscriptionService = {
  id: 'maintenance-plan',
  title: 'Website Maintenance & Support Plan',
  description: 'Keep your website running smoothly and securely. All website packages include 1 month of this plan for free! After the first month, continue with our ongoing support. Focus on your business, we’ll handle the tech.',
  originalPriceInfo: 'Starting at $99/month',
  priceInfo: 'Launch Sale: Starting at $49/month',
  icon: Wrench,
  features: [
    { text: 'Regular Software Updates (WordPress, Plugins, etc.)', icon: CheckCircle },
    { text: 'Security Monitoring & Malware Scans', icon: CheckCircle },
    { text: 'Priority Bug Fix Support', icon: CheckCircle },
    { text: 'Performance Optimization Checks', icon: CheckCircle },
    { text: 'Content Update Assistance (e.g. up to 1hr/month)', icon: CheckCircle },
    { text: '20% Discount on Future Website Upgrades & New Features', icon: CheckCircle },
  ],
  ctaLink: '/contact?service=maintenance-plan',
  ctaText: 'Secure Your Site'
};

    
