import Link from 'next/link';
import Image from 'next/image';
import type { Provider } from '@/data/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import StarRating from './star-rating';
import { MapPin, Briefcase } from 'lucide-react';

interface ProviderCardProps {
  provider: Provider;
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <Link href={`/providers/${provider.id}`} className="block group">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl hover:border-primary/50">
        <div className="aspect-[16/9] relative w-full overflow-hidden">
          <Image
            src={provider.imageUrl}
            alt={`Image of ${provider.name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={provider.imageHint}
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-xl truncate">{provider.name}</CardTitle>
          <StarRating rating={provider.rating} starSize="h-4 w-4" />
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Briefcase className="h-4 w-4 text-accent flex-shrink-0" />
            <p className="truncate">{provider.specialization}</p>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
            <p className="truncate">{provider.location}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
