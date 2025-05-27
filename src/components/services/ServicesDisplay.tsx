
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICE_PACKAGES, SERVICE_UPGRADES, SUBSCRIPTION_SERVICE, BRAND_NAME } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Package, ArrowUpCircle, LifeBuoy, ArrowRight } from 'lucide-react';

export function ServicesDisplay() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.section
      className="container mx-auto px-4 py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Tailored web solutions to elevate your small business. Explore our packages, popular upgrades, and ongoing support options designed for restaurants, barbershops, blue-collar services, and more.
        </p>
      </motion.div>

      {/* Website Packages */}
      <motion.div variants={itemVariants} className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center">
          <Package className="mr-3 h-8 w-8 text-primary" />
          Website Packages
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose a foundational package that fits your business needs. Each package can be further customized with upgrades.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICE_PACKAGES.map((pkg) => (
            <motion.div key={pkg.id} variants={itemVariants} className="h-full">
              <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
                <CardHeader className="bg-muted/30 p-6">
                  <div className="flex items-center mb-3">
                    {pkg.icon && <pkg.icon className="h-10 w-10 text-primary mr-4" />}
                    <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm min-h-[60px]">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <p className="text-sm font-semibold mb-1">Ideal for:</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {pkg.idealFor.map(ideal => <Badge key={ideal} variant="secondary">{ideal}</Badge>)}
                  </div>
                  <h4 className="font-semibold mb-2 text-md">Key Features:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {feature.icon ? <feature.icon className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" /> : <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />}
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 border-t">
                  <div className="w-full">
                    {pkg.originalPriceInfo && (
                      <p className="text-sm text-muted-foreground line-through mb-1">{pkg.originalPriceInfo}</p>
                    )}
                    <p className="text-lg font-semibold text-primary mb-3">{pkg.priceInfo}</p>
                    <Button asChild className="w-full" size="lg">
                      <Link href={pkg.ctaLink}>
                        {pkg.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Popular Upgrades */}
      <motion.div variants={itemVariants} className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center">
          <ArrowUpCircle className="mr-3 h-8 w-8 text-primary" />
          Popular Upgrades
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Enhance your website package with these powerful add-ons to meet specific business goals.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_UPGRADES.map((upgrade) => (
            <motion.div key={upgrade.id} variants={itemVariants}>
              <Card className="h-full hover:shadow-md transition-shadow rounded-lg">
                <CardHeader className="flex flex-row items-center space-x-3 space-y-0 pb-3">
                  {upgrade.icon && <upgrade.icon className="h-7 w-7 text-primary" />}
                  <CardTitle className="text-lg">{upgrade.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{upgrade.description}</p>
                </CardContent>
                 <CardFooter>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={`/contact?service=${upgrade.id}&upgrade=true`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Subscription Service */}
      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center">
          <LifeBuoy className="mr-3 h-8 w-8 text-primary" />
          {SUBSCRIPTION_SERVICE.title}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {SUBSCRIPTION_SERVICE.description}
        </p>
        <Card className="max-w-2xl mx-auto shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground p-6">
            <div className="flex items-center mb-2">
              {SUBSCRIPTION_SERVICE.icon && <SUBSCRIPTION_SERVICE.icon className="h-10 w-10 mr-4" />}
              <CardTitle className="text-2xl">{SUBSCRIPTION_SERVICE.title}</CardTitle>
            </div>
            {SUBSCRIPTION_SERVICE.originalPriceInfo && (
                 <p className="text-sm text-primary-foreground/70 line-through">{SUBSCRIPTION_SERVICE.originalPriceInfo}</p>
            )}
            <CardDescription className="text-primary-foreground/90 text-sm">{SUBSCRIPTION_SERVICE.priceInfo}</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-md">What's Included:</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {SUBSCRIPTION_SERVICE.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {feature.icon ? <feature.icon className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" /> : <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />}
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="p-6 border-t">
             <Button asChild className="w-full" size="lg" variant="default">
                <Link href={SUBSCRIPTION_SERVICE.ctaLink}>
                  {SUBSCRIPTION_SERVICE.ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="text-center mt-12 mb-4">
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
          All services are provided through{' '}
          <a
            href="https://dejesusdigitalsolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            De Jesus Digital Solutions
          </a>.
        </p>
      </motion.div>

    </motion.section>
  );
}

