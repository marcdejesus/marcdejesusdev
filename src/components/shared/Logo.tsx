import Link from 'next/link';
import { CodeXml } from 'lucide-react'; // Using CodeXml as a generic tech logo
import { BRAND_NAME } from '@/lib/constants';

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
}

export function Logo({ className, iconSize = 28, textSize = "text-2xl" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <CodeXml size={iconSize} className="text-primary group-hover:animate-pulse" />
      <span className={`font-bold ${textSize} text-foreground group-hover:text-primary transition-colors`}>
        {BRAND_NAME}
      </span>
    </Link>
  );
}
