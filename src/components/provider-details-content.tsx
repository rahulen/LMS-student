import Image from 'next/image';
import type { Provider } from '@/data/types';
import StarRating from './star-rating';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, MapPin, Mail, Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ProviderDetailsContentProps {
  provider: Provider;
}

export default function ProviderDetailsContent({ provider }: ProviderDetailsContentProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Listings
          </Link>
        </Button>
      </div>

      <Card className="overflow-hidden shadow-xl">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={provider.imageUrl}
            alt={`Image of ${provider.name}`}
            fill
            className="object-cover"
            data-ai-hint={provider.imageHint}
            priority // Prioritize loading for LCP
          />
        </div>
        <CardHeader className="border-b">
          <CardTitle className="text-3xl md:text-4xl font-headline text-primary">{provider.name}</CardTitle>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-2">
            <StarRating rating={provider.rating} starSize="h-6 w-6" />
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
              <span>{provider.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-lg mt-2">
            <Briefcase className="h-5 w-5 text-accent flex-shrink-0" />
            <span>{provider.specialization}</span>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 font-headline">About {provider.name}</h3>
            <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{provider.description}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 font-headline">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href={`mailto:${provider.email}`} className="text-primary hover:underline hover:text-accent transition-colors">
                  {provider.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href={`tel:${provider.phone.replace(/\D/g, '')}`} className="text-primary hover:underline hover:text-accent transition-colors">
                  {provider.phone}
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
