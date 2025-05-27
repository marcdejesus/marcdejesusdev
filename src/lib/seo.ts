import { Metadata } from 'next'
import { APP_NAME, BRAND_NAME } from './constants'

export const SITE_CONFIG = {
  name: APP_NAME,
  description: 'Digital Portfolio of Marc De Jesus, showcasing projects and skills in web development, UI/UX design, and more.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://marcdejesus.dev',
  author: BRAND_NAME,
  keywords: [
    'Marc De Jesus',
    'Web Developer',
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'UI/UX Designer',
    'Portfolio',
    'Web Development',
    'Mobile App Development',
    'Digital Solutions',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'React Native',
    'Figma',
    'AI Development',
    'Machine Learning'
  ],
  creator: BRAND_NAME,
  openGraph: {
    type: 'website' as const,
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://marcdejesus.dev',
    siteName: APP_NAME,
    title: APP_NAME,
    description: 'Digital Portfolio of Marc De Jesus, showcasing projects and skills in web development, UI/UX design, and more.',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Marc De Jesus Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image' as const,
    site: '@marcdejesusdev',
    creator: '@marcdejesusdev',
  },
}

export function generateSEO({
  title,
  description,
  canonical,
  keywords,
  openGraph,
  twitter,
  noindex = false,
}: {
  title?: string
  description?: string
  canonical?: string
  keywords?: string[]
  openGraph?: {
    title?: string
    description?: string
    type?: 'website' | 'article' | 'book' | 'profile'
    images?: Array<{
      url: string
      width?: number
      height?: number
      alt?: string
    }>
  }
  twitter?: {
    card?: 'summary_large_image' | 'summary' | 'player' | 'app'
    title?: string
    description?: string
    images?: string[]
  }
  noindex?: boolean
} = {}): Metadata {
  const seoTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name
  const seoDescription = description || SITE_CONFIG.description
  const seoKeywords = keywords ? [...SITE_CONFIG.keywords, ...keywords] : SITE_CONFIG.keywords

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.creator,
    robots: noindex ? 'noindex,nofollow' : 'index,follow',
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: openGraph?.title || seoTitle,
      description: openGraph?.description || seoDescription,
      type: openGraph?.type || SITE_CONFIG.openGraph.type,
      locale: SITE_CONFIG.openGraph.locale,
      url: canonical || SITE_CONFIG.openGraph.url,
      siteName: SITE_CONFIG.openGraph.siteName,
      images: openGraph?.images || SITE_CONFIG.openGraph.images,
    },
    twitter: {
      card: twitter?.card || SITE_CONFIG.twitter.card,
      site: SITE_CONFIG.twitter.site,
      creator: SITE_CONFIG.twitter.creator,
      title: twitter?.title || seoTitle,
      description: twitter?.description || seoDescription,
      images: twitter?.images || [SITE_CONFIG.openGraph.images[0].url],
    },
  }
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: BRAND_NAME,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/headshot.jpg`,
    sameAs: [
      'https://github.com/marcdejesus',
      'https://linkedin.com/in/marcdejesusdev',
      'https://twitter.com/marcdejesusdev',
    ],
    jobTitle: 'Full Stack Developer & UI/UX Designer',
    worksFor: {
      '@type': 'Organization',
      name: 'De Jesus Digital Solutions',
      url: 'https://dejesusdigitalsolutions.com',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'Central Michigan University',
    },
    knowsAbout: [
      'Web Development',
      'Mobile App Development',
      'UI/UX Design',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'AI Development',
    ],
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    author: {
      '@type': 'Person',
      name: BRAND_NAME,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/projects?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'De Jesus Digital Solutions',
    url: 'https://dejesusdigitalsolutions.com',
    logo: `${SITE_CONFIG.url}/djds.png`,
    founder: {
      '@type': 'Person',
      name: BRAND_NAME,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@dejesusdigitalsolutions.com',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Web Development',
      'Mobile App Development',
      'UI/UX Design',
      'Digital Consulting',
    ],
  }
}

export function generateArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author = BRAND_NAME,
  tags,
}: {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author?: string
  tags?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: `${SITE_CONFIG.url}${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/hero.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SITE_CONFIG.url,
    },
    keywords: tags?.join(', '),
  }
}

export function generateCreativeWorkSchema({
  title,
  description,
  image,
  url,
  technologies,
  dateCreated,
}: {
  title: string
  description: string
  image: string
  url?: string
  technologies: string[]
  dateCreated?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description,
    image: `${SITE_CONFIG.url}${image}`,
    url,
    creator: {
      '@type': 'Person',
      name: BRAND_NAME,
      url: SITE_CONFIG.url,
    },
    dateCreated,
    keywords: technologies.join(', '),
    genre: 'Software Development',
  }
} 