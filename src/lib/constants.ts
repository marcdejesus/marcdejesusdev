
import type { Project, Skill, SocialLink, Tool, NavItem, ProjectCategory, UpdatePost } from '@/types';
import { Github, Linkedin, X as XIcon, Instagram, Code, Database, LayoutDashboard, Smartphone, Search, GitBranch, Figma, Briefcase, Home, User, Mail, FileText, MessageSquare, Newspaper, Server, Eye, Youtube, FolderGit2, AppWindow, Layers, Zap, Cpu, KeyRound, CreditCard, Bolt, ShieldCheck, Users, PenTool, Triangle, Cloud } from 'lucide-react';

export const APP_NAME = "Marc De Jesus Portfolio";
export const BRAND_NAME = "Marc De Jesus";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Areas Served', href: '/areas-served' },
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
    coverImageUrl: '/rtw.png',
    dataAiHint: 'retrowave typing game',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'SEO', 'Google AdSense', 'Cookies', 'Leaderboards', 'Music Player'],
    liveDemoUrl: 'https://retrotypewave.com',
    githubUrl: 'https://github.com/marcdejesus/retrotypewave',
    role: 'Full-Stack Developer',
    duration: 'Personal Project'
  }
];

export const PROJECT_CATEGORIES: ProjectCategory[] = ['Web Development', 'UI/UX Design', 'Mobile App', 'Consultation'];

export const UPDATE_POSTS: UpdatePost[] = [
  {
    id: '8',
    slug: 'ai-integration-transforming-michigan-businesses-2025',
    title: "AI Integration: Transforming Michigan Businesses in 2025",
    date: '2025-01-30T10:00:00Z',
    excerpt: "Explore how artificial intelligence is revolutionizing Michigan businesses across industries. Learn about practical AI applications, implementation strategies, and why Michigan companies are embracing AI technology.",
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept—it's a present reality transforming businesses across Michigan. From Detroit's automotive sector to Grand Rapids manufacturing, AI integration is helping Michigan companies streamline operations, enhance customer experiences, and gain competitive advantages in the global marketplace.</p>
      
      <p>As someone who's implemented AI solutions for Michigan businesses and holds a Vanderbilt AI certification, I've witnessed firsthand how the right AI integration can revolutionize operations. This comprehensive guide explores the current AI landscape in Michigan and practical steps for businesses ready to embrace intelligent automation.</p>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">The AI Revolution in Michigan: Industry by Industry</h2>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Automotive & Manufacturing</h3>
      <p>Michigan's automotive industry is leading the charge in AI adoption. Companies are implementing AI for:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Predictive Maintenance:</strong> AI algorithms analyze equipment data to predict failures before they occur, reducing costly downtime</li>
        <li><strong>Quality Control:</strong> Computer vision systems detect defects with precision beyond human capability</li>
        <li><strong>Supply Chain Optimization:</strong> AI models predict demand patterns and optimize inventory management</li>
        <li><strong>Autonomous Vehicle Development:</strong> Michigan's testing corridors showcase AI-powered autonomous systems</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Healthcare & Medical Services</h3>
      <p>Michigan's renowned healthcare institutions are leveraging AI for patient care and operational efficiency:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Diagnostic Assistance:</strong> AI analyzes medical imaging to assist radiologists in early disease detection</li>
        <li><strong>Patient Management:</strong> Intelligent scheduling systems optimize appointment booking and resource allocation</li>
        <li><strong>Clinical Documentation:</strong> AI-powered transcription reduces administrative burden on healthcare providers</li>
        <li><strong>Drug Discovery:</strong> Michigan's pharmaceutical companies use AI to accelerate research and development</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Agriculture & Food Production</h3>
      <p>Michigan's agricultural sector is embracing precision farming through AI:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Crop Monitoring:</strong> Drone-based AI systems monitor crop health and predict yield</li>
        <li><strong>Pest Management:</strong> AI identifies pest patterns and optimizes treatment strategies</li>
        <li><strong>Soil Analysis:</strong> Machine learning models analyze soil conditions for optimal planting strategies</li>
        <li><strong>Supply Chain Optimization:</strong> AI tracks produce from farm to table, reducing waste</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Practical AI Solutions for Michigan Small Businesses</h2>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Customer Service & Support</h3>
      <p>Small Michigan businesses are implementing AI chatbots and virtual assistants to:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Provide 24/7 customer support without additional staff costs</li>
        <li>Handle routine inquiries and direct complex issues to human agents</li>
        <li>Capture leads and qualify prospects automatically</li>
        <li>Provide multilingual support for diverse Michigan communities</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Marketing & Sales Automation</h3>
      <p>AI-powered marketing tools help Michigan businesses:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Personalize email campaigns based on customer behavior</li>
        <li>Optimize social media posting schedules for maximum engagement</li>
        <li>Generate product descriptions and marketing copy automatically</li>
        <li>Analyze customer sentiment and adjust messaging accordingly</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Business Operations</h3>
      <p>Operational AI applications that benefit Michigan businesses include:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Automated invoice processing and expense categorization</li>
        <li>Intelligent document management and data extraction</li>
        <li>Predictive analytics for inventory and demand forecasting</li>
        <li>Automated scheduling and resource allocation</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">AI Implementation Strategy: A Practical Roadmap</h2>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Phase 1: Assessment and Strategy</h3>
      <p>Before implementing AI, Michigan businesses should:</p>
      <ol class="list-decimal list-inside space-y-2 mb-4">
        <li><strong>Identify Pain Points:</strong> Assess current processes to identify repetitive tasks and bottlenecks</li>
        <li><strong>Define Objectives:</strong> Set clear, measurable goals for AI implementation</li>
        <li><strong>Evaluate Data Readiness:</strong> Ensure you have quality data to train AI models</li>
        <li><strong>Budget Planning:</strong> Determine realistic investment levels for AI initiatives</li>
      </ol>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Phase 2: Pilot Projects</h3>
      <p>Start with low-risk, high-impact pilot projects:</p>
      <ol class="list-decimal list-inside space-y-2 mb-4">
        <li><strong>Chatbot Implementation:</strong> Begin with a simple customer service chatbot</li>
        <li><strong>Data Analysis:</strong> Use AI for basic pattern recognition in sales or customer data</li>
        <li><strong>Content Generation:</strong> Implement AI for routine content creation tasks</li>
        <li><strong>Process Automation:</strong> Automate simple, rule-based workflows</li>
      </ol>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Phase 3: Scaling and Integration</h3>
      <p>After successful pilots, expand AI across your organization:</p>
      <ol class="list-decimal list-inside space-y-2 mb-4">
        <li><strong>System Integration:</strong> Connect AI tools with existing business systems</li>
        <li><strong>Staff Training:</strong> Educate employees on AI tool usage and best practices</li>
        <li><strong>Performance Monitoring:</strong> Track AI performance and ROI continuously</li>
        <li><strong>Iterative Improvement:</strong> Refine AI models based on real-world performance</li>
      </ol>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Technology Stack for Michigan AI Implementation</h2>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Popular AI Platforms and Tools</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>OpenAI API:</strong> Advanced language models for content generation and analysis</li>
        <li><strong>Google AI Platform:</strong> Comprehensive machine learning and data analysis tools</li>
        <li><strong>Microsoft Azure AI:</strong> Enterprise-grade AI services with strong integration capabilities</li>
        <li><strong>IBM Watson:</strong> Industry-specific AI solutions, particularly popular in healthcare</li>
        <li><strong>Amazon SageMaker:</strong> Scalable machine learning platform for larger implementations</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Development Frameworks</h3>
      <p>For custom AI development, Michigan businesses often utilize:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>LangChain:</strong> Framework for building applications with large language models</li>
        <li><strong>TensorFlow:</strong> Open-source machine learning framework</li>
        <li><strong>PyTorch:</strong> Deep learning framework popular for research and production</li>
        <li><strong>Hugging Face:</strong> Open-source AI models and tools</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Overcoming AI Implementation Challenges</h2>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Common Concerns and Solutions</h3>
      
      <p><strong>Cost and ROI Uncertainty:</strong></p>
      <ul class="list-disc list-inside space-y-1 mb-3">
        <li>Start with low-cost pilot projects to demonstrate value</li>
        <li>Focus on solutions that address specific pain points</li>
        <li>Track metrics carefully to measure improvement</li>
      </ul>
      
      <p><strong>Data Quality and Privacy:</strong></p>
      <ul class="list-disc list-inside space-y-1 mb-3">
        <li>Implement proper data governance before AI deployment</li>
        <li>Ensure compliance with relevant regulations (GDPR, CCPA)</li>
        <li>Use privacy-preserving AI techniques when handling sensitive data</li>
      </ul>
      
      <p><strong>Employee Resistance and Training:</strong></p>
      <ul class="list-disc list-inside space-y-1 mb-3">
        <li>Communicate AI benefits clearly to all stakeholders</li>
        <li>Provide comprehensive training on new AI tools</li>
        <li>Emphasize AI as augmentation, not replacement, of human capabilities</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">The Future of AI in Michigan</h2>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Emerging Trends to Watch</h3>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Edge AI:</strong> Processing AI locally on devices for faster, more private computing</li>
        <li><strong>Multimodal AI:</strong> Systems that can process text, images, and audio simultaneously</li>
        <li><strong>AI-Powered Sustainability:</strong> Using AI to optimize energy usage and reduce environmental impact</li>
        <li><strong>Industry-Specific AI Models:</strong> Specialized AI trained for specific Michigan industries</li>
      </ul>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Michigan's AI Infrastructure</h3>
      <p>Michigan is investing in AI infrastructure to support business adoption:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>University Research:</strong> University of Michigan and Michigan State leading AI research</li>
        <li><strong>Government Support:</strong> State programs supporting AI adoption in traditional industries</li>
        <li><strong>Tech Talent:</strong> Growing pool of AI-skilled professionals in Michigan</li>
        <li><strong>Industry Partnerships:</strong> Collaboration between tech companies and traditional Michigan industries</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Getting Started with AI Integration</h2>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Questions to Ask Before Implementation</h3>
      <ol class="list-decimal list-inside space-y-2 mb-4">
        <li>What specific business problems are we trying to solve?</li>
        <li>Do we have the data quality and quantity needed for AI?</li>
        <li>What's our budget for AI implementation and ongoing maintenance?</li>
        <li>How will we measure the success of our AI initiatives?</li>
        <li>What skills do our team members need to develop?</li>
        <li>How will AI integration affect our current workflows?</li>
      </ol>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Working with AI Development Partners</h3>
      <p>When choosing an AI development partner in Michigan, consider:</p>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Relevant Experience:</strong> Track record with similar businesses and use cases</li>
        <li><strong>Technical Expertise:</strong> Proficiency with current AI technologies and frameworks</li>
        <li><strong>Industry Knowledge:</strong> Understanding of your specific industry challenges</li>
        <li><strong>Local Presence:</strong> Michigan-based developers who understand the local business landscape</li>
        <li><strong>Ongoing Support:</strong> Commitment to maintaining and improving AI systems over time</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Conclusion: Michigan's AI-Powered Future</h2>
      
      <p>Artificial Intelligence is transforming Michigan businesses across every sector, from automotive manufacturing to agriculture. The key to successful AI implementation isn't adopting every new technology—it's identifying the right AI solutions for your specific business challenges and implementing them thoughtfully.</p>
      
      <p>Michigan businesses that embrace AI integration today will be better positioned to compete tomorrow. Whether you're a startup in Detroit or an established manufacturer in Grand Rapids, AI offers opportunities to improve efficiency, enhance customer experiences, and drive innovation.</p>
      
      <p>The journey to AI integration doesn't have to be overwhelming. Start small, focus on solving real problems, and work with experienced partners who understand both AI technology and Michigan business needs.</p>
      
      <p>Ready to explore AI integration for your Michigan business? <a href="/contact" class="text-blue-600 hover:underline">Let's discuss how artificial intelligence can transform your operations and drive growth</a>.</p>
    `,
    coverImageUrl: '/hero.png',
    dataAiHint: 'AI artificial intelligence Michigan business transformation',
    author: BRAND_NAME,
    tags: ['AI', 'Artificial Intelligence', 'Michigan', 'Business Transformation', 'Technology', 'Automation', 'Machine Learning', 'Digital Innovation'],
  },
  {
    id: '7',
    slug: 'modern-web-development-michigan-marc-de-jesus',
    title: "Marc De Jesus: Modern Web Development in Michigan",
    date: '2025-01-27T10:00:00Z',
    excerpt: "Exploring the modern web development landscape in Michigan from a Central Michigan University graduate's perspective. How React, Next.js, and AI integration are transforming the digital presence of Michigan businesses.",
    content: `
      <p>As a recent Central Michigan University graduate and full-stack developer based in Macomb, Michigan, I've witnessed firsthand the digital transformation happening across the Great Lakes State. From Detroit's tech renaissance to Grand Rapids' growing startup ecosystem, Michigan businesses are embracing modern web technologies like never before.</p>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">The Michigan Tech Landscape: Past vs. Present</h2>
      <p>Traditionally, many Michigan businesses relied on basic websites built with older technologies like WordPress or static HTML. While these solutions served their purpose, today's competitive digital marketplace demands more sophisticated, performant, and user-centric web applications.</p>
      
      <p>Enter modern JavaScript frameworks like React and Next.js—technologies that I specialize in and have used to build everything from <a href="/projects/recipedium" class="text-blue-600 hover:underline">social media platforms</a> to <a href="/projects/de-jesus-digital-solutions-website" class="text-blue-600 hover:underline">comprehensive business websites</a>. These tools enable developers to create lightning-fast, interactive experiences that keep users engaged and convert visitors into customers.</p>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Why Michigan Businesses Choose Modern Development</h2>
      <p>Through my work with various clients across Michigan, I've identified several key advantages that modern web development offers to local businesses:</p>
      
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Superior Performance:</strong> Next.js applications load faster than traditional websites, crucial for Michigan's mobile-first users who expect instant access to information.</li>
        <li><strong>Enhanced User Experience:</strong> React's component-based architecture allows for smooth, app-like interactions that keep visitors engaged longer.</li>
        <li><strong>Better SEO Results:</strong> Server-side rendering capabilities help Michigan businesses rank higher in local search results—critical for competing in markets like Metro Detroit.</li>
        <li><strong>Future-Proof Technology:</strong> Modern frameworks are actively maintained and evolve with web standards, protecting your investment.</li>
        <li><strong>AI Integration Ready:</strong> As demonstrated in my <a href="/projects/recipedium" class="text-blue-600 hover:underline">Recipedium project</a>, modern frameworks seamlessly integrate with AI APIs, opening new possibilities for automation and user personalization.</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Local Success Stories and Applications</h2>
      <p>My experience developing for Michigan businesses has shown that modern web technologies excel in several key areas:</p>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">E-commerce and Local Retail</h3>
      <p>Michigan's retail businesses benefit enormously from modern e-commerce solutions. Unlike traditional platforms that can be slow and limited, React-based e-commerce sites offer smooth shopping experiences, real-time inventory updates, and seamless payment processing through APIs like Stripe.</p>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Restaurant and Hospitality</h3>
      <p>From Macomb County diners to Grand Rapids breweries, Michigan's food and hospitality industry has embraced digital ordering, reservation systems, and interactive menus—all made possible through modern web development.</p>
      
      <h3 class="text-xl font-semibold mt-4 mb-2">Professional Services</h3>
      <p>Law firms, medical practices, and consulting companies across Michigan are leveraging modern web applications for client portals, appointment scheduling, and document management—features that require the robust capabilities of contemporary frameworks.</p>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">The CMU Advantage: Education Meets Innovation</h2>
      <p>My computer science education at Central Michigan University provided a strong foundation in both theoretical concepts and practical application. The program's emphasis on problem-solving, coupled with hands-on projects, prepared me to tackle real-world challenges facing Michigan businesses.</p>
      
      <p>What sets CMU graduates apart is our understanding of both the technical and business sides of development. We're not just coding—we're solving problems, optimizing for user experience, and building solutions that drive business growth.</p>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Looking Forward: AI Integration and Michigan's Digital Future</h2>
      <p>As someone who recently completed Vanderbilt University's AI Agent Developer Certification, I'm particularly excited about the intersection of modern web development and artificial intelligence. Michigan businesses are just beginning to explore how AI can enhance their web presence through:</p>
      
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>Intelligent chatbots for customer service</li>
        <li>Personalized content recommendations</li>
        <li>Automated data analysis and reporting</li>
        <li>Smart inventory management systems</li>
        <li>Predictive user experience optimization</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Choosing the Right Developer for Your Michigan Business</h2>
      <p>When selecting a web developer for your Michigan business, consider these factors:</p>
      
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li><strong>Modern Technology Stack:</strong> Ensure they work with current frameworks like React, Next.js, and TypeScript</li>
        <li><strong>Local Understanding:</strong> A developer familiar with Michigan's business landscape and user behavior</li>
        <li><strong>Portfolio of Real Projects:</strong> Look for demonstrated experience with live, functioning applications</li>
        <li><strong>Ongoing Education:</strong> The tech field evolves rapidly—choose someone committed to continuous learning</li>
        <li><strong>Full-Stack Capabilities:</strong> Both frontend and backend expertise for comprehensive solutions</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Conclusion: Michigan's Digital Renaissance</h2>
      <p>Michigan is experiencing a digital renaissance, and modern web development is at its heart. From the automotive innovation in Detroit to the agricultural tech advancements in rural areas, businesses across our state are leveraging cutting-edge web technologies to compete globally while serving locally.</p>
      
      <p>As a Michigan-based developer specializing in React, Next.js, and AI integration, I'm excited to be part of this transformation. Whether you're a startup in Ann Arbor or an established business in Macomb County, modern web development can help you reach new customers, streamline operations, and prepare for the future.</p>
      
      <p>Ready to modernize your web presence? <a href="/contact" class="text-blue-600 hover:underline">Let's discuss how contemporary web development can benefit your Michigan business</a>.</p>
    `,
    coverImageUrl: '/hero.png',
    dataAiHint: 'Michigan web development modern technology',
    author: BRAND_NAME,
    tags: ['Michigan', 'Web Development', 'React', 'Next.js', 'Local SEO', 'CMU', 'AI Integration', 'Modern Technology'],
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

