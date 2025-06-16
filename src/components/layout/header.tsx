import Link from 'next/link';
import { BookOpenText } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="LearnHub Directory Home">
            <BookOpenText className="h-8 w-8 text-accent" />
            <h1 className="text-2xl font-bold font-headline">LearnHub Directory</h1>
          </Link>
          {/* Future navigation items can go here */}
        </div>
      </div>
    </header>
  );
}
