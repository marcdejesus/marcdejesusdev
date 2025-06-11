# Marc De Jesus Portfolio

A modern, responsive portfolio website  showcasing digital solutions and web development expertise. Built with Next.js 15, React 18, and Tailwind CSS.

## 🌟 Features

- **Hero Section**: Visually appealing landing page with introduction, key skills, and featured projects
- **Projects Showcase**: Detailed project pages with filterable categories, tech stack badges, and live demos
- **About Me Section**: Professional bio, core skills, and toolset with personal touch
- **Contact Form**: Interactive contact form with EmailJS integration for project inquiries
- **Blog System**: Content management for sharing insights and updates
- **Services Pages**: Detailed service offerings and capabilities
- **SEO Optimized**: Comprehensive SEO setup with meta tags, sitemap, and robots.txt
- **Performance Optimized**: Image optimization, caching headers, and security headers
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for enhanced user experience

## 🚀 Technologies Used

### Core Framework
- **Next.js 15**: React framework with App Router and Turbopack
- **React 18**: Latest React with concurrent features
- **TypeScript**: Type-safe development

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **Framer Motion**: Animation library
- **Lucide React**: Modern icon library

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Class Variance Authority**: Component variants
- **clsx**: Conditional className utility

### Integrations
- **EmailJS**: Contact form email service
- **Firebase**: Backend services (optional)
- **TanStack Query**: Data fetching and caching
- **React Hook Form**: Form management with Zod validation

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- EmailJS account (for contact form)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/marcdejesus/marcdejesusdev.git
   cd marcdejesusdev
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:9002](http://localhost:9002)

## 🔧 Available Scripts

- `npm run dev` - Start development server on port 9002 with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run genkit:dev` - Start Genkit AI development server
- `npm run genkit:watch` - Start Genkit AI with file watching

## 🌍 Environment Variables

Create a `.env.local` file in the root directory. See `.env.example` for required variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://marcdejesus.dev

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_MARKETING_TEMPLATE_ID=your_marketing_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── blog/           # Blog system
│   ├── contact/        # Contact page
│   ├── projects/       # Projects showcase
│   ├── services/       # Services pages
│   └── ...
├── components/         # Reusable React components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and configurations
├── types/             # TypeScript type definitions
└── ai/                # AI/Genkit integration
```

## �� Design System

### Colors
- **Primary**: Bold Red (#E53935) - Passion and energy
- **Secondary**: Clean White (#FFFFFF) - Balance and readability
- **Accent**: Deep Charcoal Grey (#333333) - Modern and professional

### Typography
- Sans-serif fonts (Roboto, Open Sans) for optimal readability
- Material Design icons for consistent visual cues

## 📧 EmailJS Setup

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Set up a service (Gmail, Outlook, etc.)
3. Create email templates
4. Get your Service ID, Template IDs, and Public Key
5. Add them to your `.env.local` file

For detailed setup instructions, see [docs/emailjs-setup.md](docs/emailjs-setup.md)

## 🔍 SEO Features

- Comprehensive meta tags and Open Graph
- Automatic sitemap generation
- Robots.txt configuration
- Structured data markup
- Performance optimizations

See [docs/SEO-OPTIMIZATION.md](docs/SEO-OPTIMIZATION.md) for details.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security Features

- Content Security Policy headers
- XSS protection
- Frame options protection
- Content type sniffing protection
- Referrer policy configuration

## 📱 Performance Features

- Image optimization with WebP/AVIF support
- Static asset caching
- Compression enabled
- Responsive image sizes
- Code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙋‍♂️ Support

For questions or issues:
- Open an issue on GitHub
- Contact through the website contact form
- Email: [marcdejesusdev@gmail.com]

## 🔗 Links

- **Live Site**: [https://marcdejesus.dev](https://marcdejesus.dev)
- **GitHub**: [https://github.com/marcdejesus/marcdejesusdev](https://github.com/marcdejesus/marcdejesusdev)


