import type { Metadata } from 'next';
import { generateSEO, SITE_CONFIG } from '@/lib/seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Smartphone, Zap, Shield, Users, Globe, Code, Layers, Star, MapPin, Phone, Award, Cpu, Eye } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = generateSEO({
  title: 'Mobile App Development Michigan - React Native & Cross-Platform Apps',
  description: 'Professional mobile app development in Michigan. Marc De Jesus builds iOS & Android apps with React Native. CMU graduate serving Michigan businesses statewide.',
  keywords: [
    'mobile app development Michigan',
    'mobile app developer Michigan',
    'React Native developer Michigan',
    'iOS app developer Michigan',
    'Android app developer Michigan',
    'mobile app development Macomb MI',
    'mobile app development Detroit',
    'mobile app development Grand Rapids',
    'mobile app development Ann Arbor',
    'mobile app development Lansing',
    'cross-platform app development Michigan',
    'custom mobile app development Michigan',
    'Michigan mobile app company',
    'mobile application development Michigan',
    'app developer Michigan',
    'mobile app consultant Michigan',
    'startup mobile app development Michigan'
  ],
  canonical: `${SITE_CONFIG.url}/mobile-app-development-michigan`,
  openGraph: {
    title: 'Mobile App Development Michigan - React Native & Cross-Platform Apps by Marc De Jesus',
    description: 'Professional mobile app development serving Michigan businesses. iOS & Android apps built with React Native and modern technologies.',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Mobile App Development Michigan - Marc De Jesus',
      },
    ],
  },
});

const mobileAppFeatures = [
  {
    icon: Smartphone,
    title: 'Cross-Platform Development',
    description: 'One codebase for both iOS and Android using React Native'
  },
  {
    icon: Zap,
    title: 'Native Performance',
    description: 'Fast, responsive apps that feel native on every platform'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and robust error handling'
  },
  {
    icon: Users,
    title: 'User-Centered Design',
    description: 'Intuitive interfaces designed with Google UX principles'
  },
  {
    icon: Globe,
    title: 'API Integration',
    description: 'Seamless integration with web services and databases'
  },
  {
    icon: Cpu,
    title: 'AI-Powered Features',
    description: 'Cutting-edge AI integration for intelligent app experiences'
  }
];

const appTypes = [
  {
    title: 'Business & Productivity Apps',
    description: 'Custom business solutions for Michigan companies',
    examples: ['CRM mobile apps', 'Inventory management', 'Field service apps', 'Employee portals']
  },
  {
    title: 'E-commerce & Retail Apps',
    description: 'Mobile shopping experiences for Michigan retailers',
    examples: ['Shopping apps', 'Product catalogs', 'Payment processing', 'Loyalty programs']
  },
  {
    title: 'Social & Community Apps',
    description: 'Connect Michigan communities through mobile',
    examples: ['Social networking', 'Event platforms', 'Local directories', 'Community forums']
  },
  {
    title: 'Educational & Learning Apps',
    description: 'Mobile learning solutions for Michigan institutions',
    examples: ['Learning management', 'Interactive courses', 'Progress tracking', 'Gamified learning']
  }
];

const developmentProcess = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'Define app requirements, target audience, and technical specifications'
  },
  {
    step: '02',
    title: 'UI/UX Design',
    description: 'Create wireframes, prototypes, and pixel-perfect designs'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Build your app using React Native and modern development practices'
  },
  {
    step: '04',
    title: 'Testing & QA',
    description: 'Comprehensive testing on multiple devices and platforms'
  },
  {
    step: '05',
    title: 'App Store Deployment',
    description: 'Launch your app on iOS App Store and Google Play Store'
  },
  {
    step: '06',
    title: 'Ongoing Support',
    description: 'Updates, maintenance, and feature enhancements'
  }
];

const michiganRegions = [
  {
    region: 'Metro Detroit',
    cities: ['Detroit', 'Sterling Heights', 'Warren', 'Troy', 'Dearborn', 'Livonia', 'Macomb']
  },
  {
    region: 'West Michigan',
    cities: ['Grand Rapids', 'Kalamazoo', 'Battle Creek', 'Holland', 'Muskegon']
  },
  {
    region: 'Central Michigan',
    cities: ['Lansing', 'Mount Pleasant', 'Midland', 'Saginaw', 'Bay City']
  },
  {
    region: 'Northern Michigan',
    cities: ['Traverse City', 'Petoskey', 'Cadillac', 'Alpena']
  }
];

const technologies = [
  { name: 'React Native', description: 'Cross-platform mobile framework' },
  { name: 'TypeScript', description: 'Type-safe development' },
  { name: 'Expo', description: 'Rapid development and deployment' },
  { name: 'Node.js', description: 'Backend API development' },
  { name: 'MongoDB', description: 'Database solutions' },
  { name: 'Firebase', description: 'Real-time features & authentication' },
  { name: 'Supabase', description: 'Modern backend services' },
  { name: 'AI APIs', description: 'OpenAI, DeepSeek integration' }
];

export default function MobileAppDevelopmentMichiganPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="h-6 w-6 text-primary mr-2" />
          <span className="text-lg font-medium">Serving All of Michigan</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          Mobile App Development in Michigan
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Professional iOS & Android app development for Michigan businesses. 
          Cross-platform mobile apps built with React Native by a CMU-trained developer specializing in modern mobile technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild>
            <Link href="/contact">Start Your Mobile App</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects/gamified-ai-learning-app">View Mobile Project</Link>
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

      {/* Featured Project */}
      <div className="mb-16 bg-primary/5 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Mobile App Project</h2>
            <h3 className="text-xl font-semibold mb-3 text-primary">Gamified AI Learning Application</h3>
            <p className="text-muted-foreground mb-4">
              Developed as a Senior Design Capstone at Central Michigan University, this React Native mobile app 
              leverages AI for personalized learning experiences with gamification elements.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />React Native cross-platform development</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />OpenAI API integration for AI-generated courses</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Social features with leaderboards</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Progress tracking and analytics</li>
            </ul>
            <Button asChild>
              <Link href="/projects/gamified-ai-learning-app">View Full Project</Link>
            </Button>
          </div>
          <div className="text-center">
            <Image
              src="/tymelyne.png"
              alt="Gamified AI Learning App - Mobile App Development Michigan"
              width={300}
              height={600}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* App Development Features */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Mobile App Development?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern mobile app development using React Native for Michigan businesses looking to reach customers on iOS and Android.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileAppFeatures.map((feature, index) => (
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

      {/* App Types */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Types of Mobile Apps We Build</h2>
          <p className="text-lg text-muted-foreground">
            Custom mobile applications tailored to your Michigan business needs and industry requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {appTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{type.title}</CardTitle>
                <p className="text-muted-foreground">{type.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Development Process */}
      <div className="mb-16 bg-muted/50 rounded-lg p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Mobile App Development Process</h2>
          <p className="text-lg text-muted-foreground">
            From concept to App Store launch, we guide your mobile app through every development phase.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developmentProcess.map((process, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="pb-4">
                <div className="text-3xl font-bold text-primary mb-2">{process.step}</div>
                <CardTitle className="text-lg">{process.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Mobile App Technology Stack</h2>
          <p className="text-lg text-muted-foreground">
            Cutting-edge technologies for building scalable, performant mobile applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{tech.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Areas */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Mobile App Development Across Michigan</h2>
          <p className="text-lg text-muted-foreground">
            Professional mobile app development services available throughout the Great Lakes State.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {michiganRegions.map((region, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg text-center">{region.region}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {region.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="text-sm text-center text-muted-foreground">
                      {city}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Developer Profile */}
      <div className="mb-16 bg-muted/30 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Your Mobile App Development Partner</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Award className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Central Michigan University Graduate</p>
                  <p className="text-sm text-muted-foreground">Computer Science degree with mobile development capstone project</p>
                </div>
              </div>
              <div className="flex items-start">
                <Smartphone className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">React Native Specialist</p>
                  <p className="text-sm text-muted-foreground">Cross-platform mobile development with native performance</p>
                </div>
              </div>
              <div className="flex items-start">
                <Cpu className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">AI Integration Expert</p>
                  <p className="text-sm text-muted-foreground">Vanderbilt AI certification with practical mobile AI implementation</p>
                </div>
              </div>
              <div className="flex items-start">
                <Eye className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">UX Design Certified</p>
                  <p className="text-sm text-muted-foreground">Google UX Design certification for user-centered mobile experiences</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Michigan-Based Developer</p>
                  <p className="text-sm text-muted-foreground">Local understanding of Michigan market and business needs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/headshot.jpg"
                alt="Marc De Jesus - Mobile App Developer Michigan"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Marc De Jesus</h3>
            <p className="text-muted-foreground">Mobile App Developer & Software Engineer</p>
            <p className="text-sm text-muted-foreground mt-1">Macomb, Michigan</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-primary/5 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss your mobile app idea and create a cross-platform solution that serves your Michigan customers on iOS and Android.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Start Your Mobile App Project</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="tel:+15862210732">Call (586) 221-0732</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          <strong>Marc De Jesus</strong> • Mobile App Development Michigan • React Native & Cross-Platform Expert
        </p>
      </div>
    </div>
  );
} 