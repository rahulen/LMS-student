import { mockProviders } from '@/data/providers';
import type { Provider } from '@/data/types';
import ProviderDetailsContent from '@/components/provider-details-content';
import PageContainer from '@/components/layout/page-container';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Helper function to fetch provider
async function getProvider(id: string): Promise<Provider | undefined> {
  return mockProviders.find((p) => p.id === id);
}

// Generate metadata for SEO
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const provider = await getProvider(params.id);
  if (!provider) {
    return {
      title: 'Provider Not Found',
    };
  }
  return {
    title: `${provider.name} | LearnHub Directory`,
    description: `Details about ${provider.name}, specializing in ${provider.specialization}. Located in ${provider.location}.`,
  };
}

// Page component
export default async function ProviderDetailsPage(
  { params }: { params: { id: string } }
) {
  const provider = await getProvider(params.id);

  if (!provider) {
    notFound();
  }

  return (
    <PageContainer>
      <ProviderDetailsContent provider={provider} />
    </PageContainer>
  );
}

// Generate static paths (for SSG)
export async function generateStaticParams() {
  return mockProviders.map((provider) => ({
    id: provider.id,
  }));
}
