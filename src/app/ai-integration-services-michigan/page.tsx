import type { Metadata } from 'next';
import { generateSEO, SITE_CONFIG } from '@/lib/seo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Brain, Zap, Shield, Users, Globe, Code, Layers, Star, MapPin, Phone, Award, Cpu, Eye, Bot, Lightbulb, BarChart, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = generateSEO({
  title: 'AI Integration Services Michigan - Custom AI Solutions for Businesses',
  description: 'Professional AI integration services in Michigan. Marc De Jesus helps businesses implement AI solutions, chatbots, and machine learning. Vanderbilt AI certified developer.',
  keywords: [
    'AI integration services Michigan',
    'AI developer Michigan',
    'AI consultant Michigan',
    'machine learning Michigan',
    'AI chatbot development Michigan',
    'custom AI solutions Michigan',
    'AI automation Michigan',
    'artificial intelligence Michigan',
    'AI integration Detroit',
    'AI services Grand Rapids',
    'AI development Ann Arbor',
    'AI solutions Lansing',
    'business AI Michigan',
    'OpenAI API integration Michigan',
    'AI software development Michigan',
    'AI transformation Michigan',
    'enterprise AI Michigan'
  ],
  canonical: `${SITE_CONFIG.url}/ai-integration-services-michigan`,
  openGraph: {
    title: 'AI Integration Services Michigan - Custom AI Solutions by Marc De Jesus',
    description: 'Transform your Michigan business with professional AI integration services. Custom AI solutions, chatbots, and automation by a Vanderbilt AI certified developer.',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'AI Integration Services Michigan - Marc De Jesus',
      },
    ],
  },
});

const aiServices = [
  {
    icon: Bot,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Custom AI-powered chatbots for customer service, lead generation, and user engagement'
  },
  {
    icon: Lightbulb,
    title: 'OpenAI API Integration',
    description: 'Leverage GPT models for content generation, analysis, and intelligent automation'
  },
  {
    icon: BarChart,
    title: 'Predictive Analytics',
    description: 'Machine learning models for business forecasting and data-driven insights'
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Text analysis, sentiment analysis, and automated content processing'
  },
  {
    icon: Zap,
    title: 'AI Workflow Automation',
    description: 'Intelligent automation of repetitive business processes and workflows'
  },
  {
    icon: Globe,
    title: 'AI-Powered Web Applications',
    description: 'Modern web apps enhanced with AI features and machine learning capabilities'
  }
];

const industryApplications = [
  {
    title: 'Healthcare & Medical',
    description: 'AI solutions for Michigan healthcare providers',
    applications: ['Patient data analysis', 'Appointment scheduling AI', 'Medical transcription', 'Diagnostic assistance']
  },
  {
    title: 'E-commerce & Retail',
    description: 'AI-powered shopping experiences for Michigan retailers',
    applications: ['Product recommendations', 'Inventory optimization', 'Customer support bots', 'Price optimization']
  },
  {
    title: 'Manufacturing & Industry',
    description: 'AI automation for Michigan manufacturers',
    applications: ['Quality control automation', 'Predictive maintenance', 'Supply chain optimization', 'Production planning']
  },
  {
    title: 'Financial Services',
    description: 'AI solutions for Michigan financial institutions',
    applications: ['Fraud detection', 'Risk assessment', 'Customer insights', 'Automated reporting']
  }
];

const implementationProcess = [
  {
    step: '01',
    title: 'AI Strategy Consultation',
    description: 'Assess your business needs and identify AI opportunities for maximum impact'
  },
  {
    step: '02',
    title: 'Solution Design',
    description: 'Design custom AI architecture tailored to your specific requirements'
  },
  {
    step: '03',
    title: 'Data Preparation',
    description: 'Clean, organize, and prepare your data for AI model training and integration'
  },
  {
    step: '04',
    title: 'AI Development',
    description: 'Build and train AI models using cutting-edge technologies and frameworks'
  },
  {
    step: '05',
    title: 'Integration & Testing',
    description: 'Seamlessly integrate AI solutions into your existing systems and workflows'
  },
  {
    step: '06',
    title: 'Optimization & Support',
    description: 'Continuous monitoring, optimization, and maintenance of your AI systems'
  }
];

const aiTechnologies = [
  { name: 'OpenAI GPT Models', description: 'Advanced language AI for content and analysis' },
  { name: 'DeepSeek', description: 'Cost-effective AI models for various applications' },
  { name: 'LangChain', description: 'Framework for building AI-powered applications' },
  { name: 'TensorFlow', description: 'Machine learning and neural network development' },
  { name: 'Python & FastAPI', description: 'Backend AI services and API development' },
  { name: 'Vector Databases', description: 'Efficient storage and retrieval for AI applications' },
  { name: 'Hugging Face', description: 'Open-source AI models and tools' },
  { name: 'React AI Components', description: 'Frontend AI integration and user interfaces' }
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

const certifications = [
  {
    title: 'Vanderbilt AI for Everyone Specialization',
    description: 'Comprehensive understanding of AI principles and business applications',
    skills: ['AI strategy', 'Machine learning fundamentals', 'AI ethics', 'Business transformation']
  },
  {
    title: 'Central Michigan University Computer Science',
    description: 'Strong foundation in algorithms, data structures, and software engineering',
    skills: ['Software architecture', 'Data algorithms', 'System design', 'Programming expertise']
  }
];

export default function AIIntegrationServicesMichiganPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <Brain className="h-6 w-6 text-primary mr-2" />
          <span className="text-lg font-medium">AI Integration Across Michigan</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
          AI Integration Services in Michigan
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Transform your Michigan business with custom AI solutions. Professional AI integration services including 
          chatbots, automation, and machine learning by a Vanderbilt AI certified developer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild>
            <Link href="/contact">Start Your AI Project</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects/recipedium">View AI Project</Link>
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

      {/* Featured AI Project */}
      <div className="mb-16 bg-primary/5 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured AI Integration Project</h2>
            <h3 className="text-xl font-semibold mb-3 text-primary">Recipedium - AI Recipe Platform</h3>
            <p className="text-muted-foreground mb-4">
              A sophisticated AI-powered recipe platform that demonstrates advanced integration of multiple AI services. 
              Built with OpenAI API integration, intelligent search, and personalized recipe generation.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />OpenAI GPT integration for recipe generation</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />AI-powered search and recommendation engine</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Personalized cooking assistance</li>
              <li className="flex items-center"><CheckCircle className="h-4 w-4 text-primary mr-2" />Modern React frontend with AI components</li>
            </ul>
            <Button asChild>
              <Link href="/projects/recipedium">View Full AI Project</Link>
            </Button>
          </div>
          <div className="text-center">
            <Image
              src="/robochef.png"
              alt="Recipedium AI Recipe Platform - AI Integration Services Michigan"
              width={400}
              height={300}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* AI Services */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI Integration Services We Provide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions designed to enhance your Michigan business operations and customer experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Industry Applications */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI Solutions by Industry</h2>
          <p className="text-lg text-muted-foreground">
            Tailored AI integration services for Michigan businesses across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industryApplications.map((industry, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
                <p className="text-muted-foreground">{industry.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {industry.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-center">
                      <Brain className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{application}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Implementation Process */}
      <div className="mb-16 bg-muted/50 rounded-lg p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI Integration Process</h2>
          <p className="text-lg text-muted-foreground">
            From strategy to deployment, we guide your AI transformation with a proven implementation methodology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {implementationProcess.map((process, index) => (
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

      {/* AI Technology Stack */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI Technology Stack</h2>
          <p className="text-lg text-muted-foreground">
            Cutting-edge AI technologies and frameworks for building intelligent business solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiTechnologies.map((tech, index) => (
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
          <h2 className="text-3xl font-bold mb-4">AI Integration Services Across Michigan</h2>
          <p className="text-lg text-muted-foreground">
            Professional AI consulting and integration services available throughout the Great Lakes State.
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

      {/* AI Expertise & Certifications */}
      <div className="mb-16 bg-muted/30 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">AI Expertise & Certifications</h2>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{cert.title}</p>
                      <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden mb-4">
              <Image
                src="/headshot.jpg"
                alt="Marc De Jesus - AI Integration Specialist Michigan"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Marc De Jesus</h3>
            <p className="text-muted-foreground">AI Integration Specialist</p>
            <p className="text-sm text-muted-foreground mt-1">Macomb, Michigan</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-center text-sm">
                <Cpu className="h-4 w-4 text-primary mr-2" />
                <span>Vanderbilt AI Certified</span>
              </div>
              <div className="flex items-center justify-center text-sm">
                <Award className="h-4 w-4 text-primary mr-2" />
                <span>CMU Computer Science Graduate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose AI Integration */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Your Michigan Business Needs AI Integration</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay competitive in today's digital landscape with AI solutions that enhance efficiency, reduce costs, and improve customer experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Operational Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Automate repetitive tasks and streamline workflows to increase productivity and reduce manual effort.</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Enhanced Customer Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Provide 24/7 customer support with AI chatbots and personalized experiences that delight your customers.</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Data-Driven Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Make informed business decisions with AI-powered analytics and predictive modeling capabilities.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-primary/5 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss how AI integration can benefit your Michigan business. Get a free consultation 
          and discover the possibilities of artificial intelligence for your operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Get Free AI Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="tel:+15862210732">Call (586) 221-0732</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          <strong>Marc De Jesus</strong> • AI Integration Services Michigan • Vanderbilt AI Certified Specialist
        </p>
      </div>
    </div>
  );
} 