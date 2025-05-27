
import Link from 'next/link';
import { SOCIAL_LINKS, BRAND_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row md:px-6">
        <div className="flex flex-col sm:flex-row items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex gap-x-4">
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {SOCIAL_LINKS.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
