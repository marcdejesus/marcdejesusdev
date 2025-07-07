import type { Metadata } from 'next';
import { generateSEO, SITE_CONFIG } from '@/lib/seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Zap, Layers, Shield, Cpu, Smartphone, Globe, Code, BookOpen, Award, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = generateSEO({
  title: 'React Developer Michigan - Expert React & Next.js Development',
  description: 'Professional React developer in Michigan. Marc De Jesus builds modern web applications with React, Next.js & TypeScript. CMU graduate serving businesses statewide.',
  keywords: [
    'React developer Michigan',
    'React development Michigan',
    'Next.js developer Michigan',
    'React developer Macomb MI',
    'React developer Detroit',
    'React developer Grand Rapids',
    'React developer Ann Arbor',
    'React developer Lansing',
    'React web development Michigan',
    'React Native developer Michigan',
    'TypeScript developer Michigan',
    'JavaScript developer Michigan',
    'frontend developer Michigan',
    'React consultant Michigan',
    'modern web development Michigan',
    'React expert Michigan',
    'React app development Michigan'
  ],
  canonical: `${SITE_CONFIG.url}/react-development-michigan`,
  openGraph: {
    title: 'React Developer Michigan - Expert React & Next.js Development by Marc De Jesus',
    description: 'Professional React developer serving Michigan businesses. Modern web applications built with React, Next.js, and TypeScript.',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'React Developer Michigan - Marc De Jesus',
      },
    ],
  },
});

const reactFeatures = [
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'React applications optimized for speed and user experience'
  },
  {
    icon: Layers,
    title: 'Component Architecture',
    description: 'Modular, reusable components for maintainable codebases'
  },
  {
    icon: Shield,
    title: 'TypeScript Integration',
    description: 'Type-safe development reducing bugs and improving reliability'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Responsive React applications that work on all devices'
  },
  {
    icon: Globe,
    title: 'SEO Optimized',
    description: 'Server-side rendering with Next.js for better search rankings'
  },
  {
    icon: Cpu,
    title: 'Modern Features',
    description: 'Latest React features including hooks, suspense, and concurrent rendering'
  }
];

const michiganCities = [
  { name: 'Detroit', region: 'Southeast Michigan' },
  { name: 'Grand Rapids', region: 'West Michigan' },
  { name: 'Ann Arbor', region: 'Southeast Michigan' },
  { name: 'Lansing', region: 'Central Michigan' },
  { name: 'Sterling Heights', region: 'Metro Detroit' },
  { name: 'Warren', region: 'Metro Detroit' },
  { name: 'Troy', region: 'Metro Detroit' },
  { name: 'Kalamazoo', region: 'West Michigan' },
  { name: 'Flint', region: 'Central Michigan' },
  { name: 'Dearborn', region: 'Metro Detroit' },
  { name: 'Livonia', region: 'Metro Detroit' },
  { name: 'Battle Creek', region: 'West Michigan' },
  { name: 'Traverse City', region: 'Northern Michigan' },
  { name: 'Saginaw', region: 'Central Michigan' },
  { name: 'Pontiac', region: 'Metro Detroit' },
  { name: 'Macomb', region: 'Metro Detroit' }
];

const reactProjects = [
  {
    title: 'Recipedium - Recipe Social Platform',
    description: 'Full-stack React application with AI integration, user authentication, and social features',
    tech: ['React', 'Node.js', 'MongoDB', 'AI Integration'],
    link: '/projects/recipedium'
  },
  {
    title: 'De Jesus Digital Solutions',
    description: 'Business website with client portal, email marketing, and payment processing',
    tech: ['Next.js', 'Supabase', 'Stripe', 'TypeScript'],
    link: '/projects/de-jesus-digital-solutions-website'
  },
  {
    title: 'Retro Type Wave',
    description: 'Interactive typing game with React, featuring leaderboards and progress tracking',
    tech: ['React', 'JavaScript', 'Local Storage', 'Game Logic'],
    link: '/projects/retro-type-wave'
  }
];

const techStack = [
  { name: 'React 18+', category: 'Frontend Framework' },
  { name: 'Next.js 14+', category: 'Full-Stack Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'React Native', category: 'Mobile Development' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Supabase', category: 'Backend as a Service' }
];

export default function ReactDevelopmentMichiganPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="h-6 w-6 text-primary mr-2" />
          <span className="text-lg font-medium">Serving All of Michigan</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Expert React Developer in Michigan
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Professional React & Next.js development services for Michigan businesses. 
          Build modern, performant web applications with a CMU-trained developer who specializes in React ecosystem technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild>
            <Link href="/contact">Start Your React Project</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">View React Projects</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-1" />
            <a href="tel:+15862210732" className="hover:text-primary">(586) 221-0732</a>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Based in Macomb, Michigan</span>
          </div>
        </div>
      </div>

      {/* Why React Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose React for Your Michigan Business?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            React is the leading JavaScript framework trusted by companies like Facebook, Netflix, and Airbnb. 
            Here's why it's perfect for Michigan businesses looking to modernize their web presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reactFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-16 bg-muted/50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Modern React Technology Stack</h2>
          <p className="text-lg text-muted-foreground">
            I use the latest React ecosystem technologies to build scalable, maintainable applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{tech.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{tech.category}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured React Projects</h2>
          <p className="text-lg text-muted-foreground">
            Real-world React applications I've built, showcasing modern development practices and user-focused design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reactProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.link}>View Project</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Areas */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">React Development Services Across Michigan</h2>
          <p className="text-lg text-muted-foreground">
            Professional React development available throughout the Great Lakes State, from Metro Detroit to the Upper Peninsula.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {michiganCities.map((city, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <h3 className="font-semibold">{city.name}</h3>
                <p className="text-sm text-muted-foreground">{city.region}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* About Developer */}
      <div className="mb-16 bg-muted/30 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Your React Development Partner</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Central Michigan University Graduate</p>
                  <p className="text-sm text-muted-foreground">Computer Science degree with strong foundation in software engineering</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Certified & Trained</p>
                  <p className="text-sm text-muted-foreground">Google UX Design & Vanderbilt AI Agent Developer certifications</p>
                </div>
              </div>
              <div className="flex items-start">
                <Code className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">React Specialist</p>
                  <p className="text-sm text-muted-foreground">Deep expertise in React, Next.js, TypeScript, and modern web technologies</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Michigan-Based</p>
                  <p className="text-sm text-muted-foreground">Local understanding of Michigan business needs and market dynamics</p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Full-Time Availability</p>
                  <p className="text-sm text-muted-foreground">Dedicated focus on your project with quick turnaround times</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/headshot.jpg"
                alt="Marc De Jesus - React Developer Michigan"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Marc De Jesus</h3>
            <p className="text-muted-foreground">React Developer & Software Engineer</p>
            <p className="text-sm text-muted-foreground mt-1">Macomb, Michigan</p>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">React Development Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive React development solutions for Michigan businesses of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <Globe className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Custom React Web Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Single Page Applications (SPAs)</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Progressive Web Apps (PWAs)</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />E-commerce platforms</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Dashboard and admin panels</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Layers className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Next.js Full-Stack Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Server-side rendering (SSR)</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />API route development</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Static site generation (SSG)</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />SEO optimization</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Smartphone className="h-8 w-8 text-primary mb-2" />
              <CardTitle>React Native Mobile Apps</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Cross-platform mobile development</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />iOS and Android apps</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Native performance</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />App store deployment</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <Cpu className="h-8 w-8 text-primary mb-2" />
              <CardTitle>AI Integration & Modern Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />AI-powered features</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Real-time functionality</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Advanced animations</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Performance optimization</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-primary/5 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Build with React?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss your React development needs and create a modern, high-performance web application for your Michigan business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Start Your React Project</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="tel:+15862210732">Call (586) 221-0732</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          <strong>Marc De Jesus</strong> • React Developer Michigan • Expert React & Next.js Development
        </p>
      </div>
    </div>
  );
} 