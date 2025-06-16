import { mockProviders } from '@/data/providers';
import type { Provider } from '@/data/types';
import ProviderDetailsContent from '@/components/provider-details-content';
import PageContainer from '@/components/layout/page-container';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { Params } from '@/types/route-params';

async function getProvider(id: string): Promise<Provider | undefined> {
  return mockProviders.find((p) => p.id === id);
}

export async function generateMetadata(
  { params }: Params<'id'>
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

export default async function ProviderDetailsPage(
  { params }: Params<'id'>
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

export async function generateStaticParams() {
  return mockProviders.map((provider) => ({ id: provider.id }));
}
