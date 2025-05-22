
import type { Project, Skill, SocialLink, Tool, NavItem, ProjectCategory, UpdatePost } from '@/types';
import { Github, Linkedin, X as XIcon, Instagram, Code, Database, LayoutDashboard, Smartphone, Search, GitBranch, Figma, Briefcase, Home, User, Mail, FileText, MessageSquare, Newspaper, Server, Zap, KeyRound, CreditCard, Bolt, Layers, Cpu, Cloud, Users, PenTool, GraduationCap, Award, Settings, Brain, Triangle, ShieldCheck, Eye, Youtube } from 'lucide-react'; // Added Triangle, ShieldCheck, Eye, Youtube

export const APP_NAME = "Marc De Jesus Portfolio";
export const BRAND_NAME = "Marc De Jesus";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
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
    coverImageUrl: 'https://placehold.co/600x400.png',
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
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ai learning app',
    technologies: ['React Native', 'MongoDB', 'OpenAI API', 'Node.js', 'AI/ML', 'Gamification'],
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
    coverImageUrl: 'https://placehold.co/600x400.png',
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
    coverImageUrl: 'https://placehold.co/600x400.png',
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
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'vacation rental website',
    technologies: ['Next.js', 'TailwindCSS', 'SEO', 'AirBNB Promotion'],
    liveDemoUrl: 'https://treasure-coast-getaway.vercel.app/',
    // No GitHub URL as it's primarily an SEO/marketing site
    role: 'Developer',
    duration: 'Client Project'
  }
];

export const PROJECT_CATEGORIES: ProjectCategory[] = ['Web Development', 'UI/UX Design', 'Mobile App', 'Consultation'];

export const UPDATE_POSTS: UpdatePost[] = [
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
    coverImageUrl: 'https://placehold.co/600x400.png',
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
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'UX design certificate',
    author: BRAND_NAME,
    tags: ['Professional Development', 'UX Design', 'Google Certification', 'Coursera', 'User Experience'],
  },
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
    coverImageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'AI agent certificate',
    author: BRAND_NAME,
    tags: ['Professional Development', 'AI', 'Agent Development', 'Vanderbilt University', 'Prompt Engineering', 'Automation'],
  },
];

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
  { name: 'Docker', icon: GitBranch }, // Using GitBranch icon for Docker
  { name: 'AI', icon: Cpu }, 
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


    

    