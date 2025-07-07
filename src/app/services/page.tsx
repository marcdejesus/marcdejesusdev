import type { Metadata } from 'next';
import { generateSEO, SITE_CONFIG } from '@/lib/seo';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Code, Smartphone, Palette, Search, ShoppingCart, Cpu, Zap, Users, Settings } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Web Development Services Macomb MI - Custom Websites & Apps',
  description: 'Professional web development services in Macomb, Michigan. Custom websites, mobile apps, e-commerce, and AI integration for businesses throughout Michigan. Call (586) 221-0732.',
  keywords: [
    'web development services Macomb MI',
    'custom website development Michigan',
    'mobile app development Metro Detroit',
    'e-commerce development Macomb',
    'React development services Michigan',
    'Next.js development Macomb',
    'AI integration services Michigan',
    'SEO services Macomb County',
    'UI/UX design Michigan',
    'website maintenance Michigan'
  ],
  canonical: `${SITE_CONFIG.url}/services`,
  openGraph: {
    title: 'Web Development Services - Macomb Michigan',
    description: 'Professional web development services for Michigan businesses. Custom websites, mobile apps, and modern web solutions.',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Web Development Services Macomb Michigan',
      },
    ],
  },
});

const services = [
  {
    icon: Code,
    title: 'Custom Website Development',
    description: 'Modern, responsive websites built with React and Next.js for optimal performance and SEO.',
    features: [
      'React & Next.js development',
      'Mobile-responsive design',
      'SEO optimization',
      'Fast loading speeds',
      'Content management systems'
    ],
    idealFor: 'Small businesses, startups, professional services'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications using React Native for iOS and Android.',
    features: [
      'React Native development',
      'iOS & Android compatibility',
      'Native performance',
      'Push notifications',
      'App store deployment'
    ],
    idealFor: 'Restaurants, retail businesses, service providers'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    description: 'Complete online store solutions with secure payment processing and inventory management.',
    features: [
      'Secure payment integration',
      'Inventory management',
      'Order tracking',
      'Customer accounts',
      'Analytics dashboard'
    ],
    idealFor: 'Retail businesses, product manufacturers, distributors'
  },
  {
    icon: Cpu,
    title: 'AI Integration Services',
    description: 'Artificial intelligence features to enhance your web applications and business processes.',
    features: [
      'Chatbot implementation',
      'Automated content generation',
      'Data analysis tools',
      'Machine learning features',
      'Custom AI solutions'
    ],
    idealFor: 'Forward-thinking businesses, tech startups, data-driven companies'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that creates engaging experiences and drives conversions.',
    features: [
      'User research & analysis',
      'Wireframing & prototyping',
      'Visual design',
      'Usability testing',
      'Design system creation'
    ],
    idealFor: 'Businesses focusing on user experience, SaaS companies'
  },
  {
    icon: Search,
    title: 'SEO & Performance Optimization',
    description: 'Improve your search rankings and website performance for better user experience.',
    features: [
      'Technical SEO audit',
      'Local SEO optimization',
      'Performance optimization',
      'Core Web Vitals improvement',
      'Analytics setup'
    ],
    idealFor: 'Local businesses, service providers, content creators'
  },
  {
    icon: Settings,
    title: 'Website Maintenance & Support',
    description: 'Ongoing maintenance, updates, and technical support to keep your website running smoothly.',
    features: [
      'Regular security updates',
      'Content updates',
      'Performance monitoring',
      'Bug fixes',
      '24/7 support availability'
    ],
    idealFor: 'Established businesses, busy entrepreneurs, large websites'
  },
  {
    icon: Users,
    title: 'Digital Consulting',
    description: 'Strategic guidance on technology decisions and digital transformation for your business.',
    features: [
      'Technology stack recommendations',
      'Digital strategy planning',
      'Project roadmap creation',
      'Team training',
      'Process optimization'
    ],
    idealFor: 'Growing businesses, digital transformation projects'
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Web Development Services in Macomb, Michigan
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Professional web development services for businesses throughout Michigan. From custom websites to mobile apps, 
          I provide modern solutions that help your business grow and succeed online.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Get Free Quote</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="tel:+15862210732">(586) 221-0732</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <Card key={index} className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-primary mr-3" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </div>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ideal For:</h4>
                  <p className="text-sm text-muted-foreground">{service.idealFor}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted/50 rounded-lg p-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Serving All of Michigan</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Based in Macomb, I provide web development services throughout Michigan including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <strong>Macomb County:</strong><br/>
              Macomb, Sterling Heights, Warren, Clinton Township
            </div>
            <div>
              <strong>Oakland County:</strong><br/>
              Troy, Rochester Hills, Royal Oak, Novi
            </div>
            <div>
              <strong>Wayne County:</strong><br/>
              Detroit, Dearborn, Livonia, Westland
            </div>
            <div>
              <strong>Statewide:</strong><br/>
              Grand Rapids, Ann Arbor, Lansing, Kalamazoo
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Contact me today for a free consultation and quote. I'll help you choose the right solution for your business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Get Started Today</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 