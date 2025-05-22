'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] px-4 py-12 text-center">
      <AlertTriangle className="h-16 w-16 text-destructive mb-6" />
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        We encountered an unexpected issue. Please try again, or if the problem persists, feel free to contact us.
      </p>
      <div className="flex gap-4">
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          size="lg"
        >
          Try Again
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/">
            Go to Homepage
          </Link>
        </Button>
      </div>
      {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-muted rounded-md text-left max-w-2xl w-full overflow-auto">
            <h3 className="font-semibold text-destructive mb-2">Error Details (Development Mode):</h3>
            <p className="text-sm font-mono whitespace-pre-wrap">{error.message}</p>
            {error.digest && <p className="text-xs mt-2">Digest: {error.digest}</p>}
          </div>
        )}
    </div>
  );
}
