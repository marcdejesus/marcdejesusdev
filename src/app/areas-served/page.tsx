import type { Metadata } from 'next';
import { generateSEO, SITE_CONFIG } from '@/lib/seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MapPin, Star, Award, GraduationCap, Code, Users } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = generateSEO({
  title: 'Marc De Jesus - Web Developer Serving All of Michigan',
  description: 'Marc De Jesus, professional web developer from Macomb, Michigan, providing expert development services throughout Michigan. View portfolio and connect for projects across the state.',
  keywords: [
    'Marc De Jesus Michigan',
    'Marc De Jesus web developer',
    'Marc De Jesus Macomb',
    'Marc De Jesus Detroit',
    'Marc De Jesus Grand Rapids',
    'Marc De Jesus Ann Arbor',
    'Marc De Jesus Lansing',
    'web developer Michigan',
    'React developer Michigan',
    'Next.js developer Michigan',
    'CMU graduate developer',
    'Central Michigan University Marc De Jesus',
    'Michigan web development expert',
    'full stack developer Michigan'
  ],
  canonical: `${SITE_CONFIG.url}/areas-served`,
  openGraph: {
    title: 'Marc De Jesus - Michigan Web Developer Portfolio',
    description: 'Professional web developer serving all of Michigan. View projects and expertise from this Central Michigan University graduate.',
    type: 'profile',
    images: [
      {
        url: '/headshot.jpg',
        width: 400,
        height: 400,
        alt: 'Marc De Jesus - Michigan Web Developer',
      },
    ],
  },
});

const majorMichiganCities = [
  {
    region: 'Southeast Michigan / Metro Detroit',
    cities: [
      { name: 'Detroit', population: '2.9M metro', description: 'Motor City tech innovation hub' },
      { name: 'Sterling Heights', population: '132K', description: 'Macomb County business center' },
      { name: 'Warren', population: '139K', description: 'Industrial and tech corridor' },
      { name: 'Troy', population: '87K', description: 'Corporate headquarters hub' },
      { name: 'Ann Arbor', population: '123K', description: 'University of Michigan tech ecosystem' },
      { name: 'Livonia', population: '94K', description: 'Wayne County business district' },
      { name: 'Dearborn', population: '109K', description: 'Ford Motor Company headquarters' },
      { name: 'Clinton Township', population: '99K', description: 'Growing Macomb County community' }
    ]
  },
  {
    region: 'West Michigan',
    cities: [
      { name: 'Grand Rapids', population: '1.1M metro', description: 'West Michigan economic center' },
      { name: 'Kalamazoo', population: '261K metro', description: 'University town and business hub' },
      { name: 'Battle Creek', population: '52K', description: 'Cereal City corporate presence' },
      { name: 'Holland', population: '34K', description: 'Lake Michigan business community' }
    ]
  },
  {
    region: 'Central Michigan',
    cities: [
      { name: 'Lansing', population: '541K metro', description: 'State capital and government center' },
      { name: 'Mount Pleasant', population: '25K', description: 'Central Michigan University hometown' },
      { name: 'Midland', population: '42K', description: 'Dow Chemical headquarters' },
      { name: 'Saginaw', population: '44K', description: 'Mid-Michigan industrial center' }
    ]
  },
  {
    region: 'Northern Michigan',
    cities: [
      { name: 'Traverse City', population: '153K metro', description: 'Northern Michigan tourism and tech' },
      { name: 'Petoskey', population: '5.8K', description: 'Resort community business district' },
      { name: 'Cadillac', population: '10K', description: 'North central Michigan hub' }
    ]
  },
  {
    region: 'Upper Peninsula',
    cities: [
      { name: 'Marquette', population: '67K metro', description: 'Upper Peninsula largest city' },
      { name: 'Houghton', population: '7.7K', description: 'Michigan Tech University location' },
      { name: 'Escanaba', population: '12K', description: 'Upper Peninsula business center' }
    ]
  }
];

const serviceHighlights = [
  {
    icon: Code,
    title: 'Modern Development Expertise',
    description: 'React, Next.js, TypeScript, and AI integration services'
  },
  {
    icon: GraduationCap,
    title: 'Central Michigan University Graduate',
    description: 'Computer Science degree with strong Michigan connections'
  },
  {
    icon: Star,
    title: 'Portfolio Excellence',
    description: 'Proven track record with diverse project showcase'
  },
  {
    icon: Users,
    title: 'Statewide Availability',
    description: 'Remote work with in-person meetings throughout Michigan'
  }
];

export default function AreasServedPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/headshot.jpg"
              alt="Marc De Jesus - Michigan Web Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Marc De Jesus - Michigan Web Developer
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Professional web developer based in Macomb, Michigan, serving clients throughout the state. 
          Central Michigan University graduate specializing in modern web development and AI integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/projects">View Portfolio</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Connect Today</Link>
          </Button>
        </div>
      </div>

      {/* Service Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {serviceHighlights.map((highlight, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <highlight.icon className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">{highlight.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Michigan Coverage */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Serving All of Michigan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From my base in Macomb, I provide web development services throughout Michigan. 
            Whether you're in Metro Detroit, Grand Rapids, or anywhere across the Great Lakes State, 
            I'm available for your project needs.
          </p>
        </div>

        <div className="space-y-12">
          {majorMichiganCities.map((region, regionIndex) => (
            <div key={regionIndex}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-2" />
                {region.region}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {region.cities.map((city, cityIndex) => (
                  <Card key={cityIndex} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{city.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{city.population}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{city.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Brand Section */}
      <div className="bg-muted/50 rounded-lg p-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Marc De Jesus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <Award className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Michigan Education & Values</h3>
              <p className="text-muted-foreground">
                Central Michigan University Computer Science graduate with deep understanding of Michigan business culture and work ethic.
              </p>
            </div>
            <div>
              <Code className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Modern Technology Stack</h3>
              <p className="text-muted-foreground">
                Expertise in React, Next.js, TypeScript, and AI integration - bringing cutting-edge solutions to Michigan businesses.
              </p>
            </div>
            <div>
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Statewide Availability</h3>
              <p className="text-muted-foreground">
                Based in Macomb with availability for remote work and in-person meetings throughout Michigan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you're in Detroit, Grand Rapids, Ann Arbor, or anywhere in Michigan, 
          I'm ready to help bring your web development project to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="tel:+15862210732">(586) 221-0732</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          <strong>Marc De Jesus</strong> - Professional Web Developer - Macomb, Michigan - Serving All of Michigan
        </p>
      </div>
    </div>
  );
} 