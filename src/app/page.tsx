
'use client';

import { useState, useEffect, useMemo } from 'react';
import type { Provider } from '@/data/types';
import { mockProviders } from '@/data/providers';
import ProviderCard from '@/components/provider-card';
import SearchBar from '@/components/search-bar';
import PageContainer from '@/components/layout/page-container';
import Image from 'next/image';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    // In a real app, you might fetch providers here or pass them as props
    // For now, using mockProviders directly
    setProviders(mockProviders);
  }, []);

  const filteredProviders = useMemo(() => {
    if (!searchTerm) {
      return providers;
    }
    return providers.filter(
      (provider) =>
        provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [providers, searchTerm]);

  return (
    <PageContainer>
      <div className="flex flex-col items-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-4 text-primary">
          Find Your Learning Support
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-6 max-w-2xl">
          Discover trusted tutors, workshops, and educational programs tailored to your needs.
        </p>
        <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      </div>

      {filteredProviders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProviders.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-muted-foreground">No providers found matching your search.</p>
        </div>
      )}

      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Visually appealing placeholder image 1"
            width={600}
            height={400}
            className="object-cover w-full h-auto"
            data-ai-hint="nature landscape"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Visually appealing placeholder image 2"
            width={600}
            height={400}
            className="object-cover w-full h-auto"
            data-ai-hint="modern architecture"
          />
        </div>
      </div>
    </PageContainer>
  );
}
