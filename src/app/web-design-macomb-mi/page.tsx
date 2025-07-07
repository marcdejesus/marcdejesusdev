import type { Metadata } from 'next';
import { generateSEO, SITE_CONFIG } from '@/lib/seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Star, Users, Clock, MapPin, Phone, Zap, Smartphone, Eye, Code, Palette, Globe } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = generateSEO({
  title: 'Web Design Macomb MI - Modern Website Design & Development',
  description: 'Professional web design services in Macomb, Michigan. Marc De Jesus creates modern, responsive websites using React & Next.js for local businesses. Get your custom website today!',
  keywords: [
    'web design Macomb MI',
    'website design Macomb Michigan',
    'web designer Macomb County',
    'custom website design Macomb',
    'responsive web design Michigan',
    'modern website design Metro Detroit',
    'React web design Macomb',
    'Next.js website design Michigan',
    'professional web design Macomb',
    'local web designer Michigan',
    'Macomb website developer',
    'custom web design Sterling Heights',
    'website design Warren MI',
    'web design Clinton Township'
  ],
  canonical: `${SITE_CONFIG.url}/web-design-macomb-mi`,
  openGraph: {
    title: 'Web Design Macomb MI - Modern Website Design by Marc De Jesus',
    description: 'Professional web design services in Macomb, Michigan. Custom, responsive websites built with modern technology for local businesses.',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Web Design Macomb Michigan - Marc De Jesus',
      },
    ],
  },
});

const webDesignFeatures = [
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Responsive websites that look perfect on all devices'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Optimized for speed with modern React & Next.js'
  },
  {
    icon: Eye,
    title: 'SEO Optimized',
    description: 'Built for search engine visibility and local rankings'
  },
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Unique designs tailored to your brand and business'
  },
  {
    icon: Code,
    title: 'Modern Technology',
    description: 'Built with React, Next.js, and TypeScript for reliability'
  },
  {
    icon: Globe,
    title: 'User Experience Focused',
    description: 'Designed with your customers in mind for maximum conversions'
  }
];

const macombAreas = [
  'Macomb Township',
  'Sterling Heights',
  'Warren',
  'Clinton Township',
  'Troy',
  'Utica',
  'Shelby Township',
  'Chesterfield Township',
  'Harrison Township',
  'Mount Clemens',
  'Fraser',
  'Roseville',
  'St. Clair Shores',
  'Eastpointe',
  'Center Line',
  'New Baltimore'
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Consultation',
    description: 'We discuss your business goals, target audience, and design preferences'
  },
  {
    step: '02',
    title: 'Design & Planning',
    description: 'Create wireframes and design mockups using modern UI/UX principles'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build your website using React, Next.js, and other modern technologies'
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'Thorough testing across devices and browsers before going live'
  },
  {
    step: '05',
    title: 'Ongoing Support',
    description: 'Continued maintenance and updates to keep your site performing optimally'
  }
];

export default function WebDesignMacombPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="h-6 w-6 text-primary mr-2" />
          <span className="text-lg font-medium">Serving Macomb County, Michigan</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Professional Web Design in Macomb, MI
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Custom website design and development services for Macomb County businesses. 
          Modern, responsive websites built with React & Next.js by CMU graduate Marc De Jesus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild>
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">View Portfolio</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-1" />
            <a href="tel:+15862210732" className="hover:text-primary">(586) 221-0732</a>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Macomb, Michigan</span>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Web Design Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDesignFeatures.map((feature, index) => (
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

      {/* Process Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Web Design Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to launch and beyond, we ensure your website project is handled professionally and efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {processSteps.map((process, index) => (
            <Card key={index} className="text-center relative">
              <CardHeader className="pb-4">
                <div className="text-4xl font-bold text-primary mb-2">{process.step}</div>
                <CardTitle className="text-lg">{process.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </CardContent>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary/30"></div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Local Areas Section */}
      <div className="mb-16 bg-muted/50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Serving All of Macomb County</h2>
          <p className="text-lg text-muted-foreground">
            Professional web design services throughout Macomb County and surrounding Metro Detroit areas.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 text-center">
          {macombAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <p className="font-medium">{area}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technology Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Modern Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We use cutting-edge technologies to build websites that are fast, secure, and future-proof.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>React & Next.js</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Modern JavaScript frameworks for lightning-fast, interactive websites with excellent SEO.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Responsive Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>SEO Optimization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Built-in SEO best practices to help your Macomb business rank higher in search results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-16 bg-muted/30 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Marc De Jesus</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">Central Michigan University Computer Science graduate</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">Based in Macomb, Michigan with local market knowledge</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">Specializes in React, Next.js, and modern web technologies</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">Google UX Design and Vanderbilt AI certifications</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-muted-foreground">Full-time availability for quick project turnaround</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/headshot.jpg"
                alt="Marc De Jesus - Web Designer Macomb MI"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Marc De Jesus</h3>
            <p className="text-muted-foreground">Web Designer & Developer</p>
            <p className="text-sm text-muted-foreground mt-1">Macomb, Michigan</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-primary/5 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss your web design project and create a modern, professional website for your Macomb County business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Get Your Free Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="tel:+15862210732">Call (586) 221-0732</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          <strong>Marc De Jesus</strong> • Web Design Macomb MI • Professional Website Development
        </p>
      </div>
    </div>
  );
} 