import NavBar from '@/components/navbar';
import { getService } from '@/sanity/lib/services/get-service';
import { getServiceMeta } from '@/sanity/lib/services/get-service-meta';
import { getServiceSlugs } from '@/sanity/lib/services/get-service-slugs';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const serviceSlugs = await getServiceSlugs();
  return serviceSlugs;
}

// TODO: Update custom OG image fallback

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const pageMeta = await getServiceMeta(params.slug);

  return {
    title: pageMeta?.seo?.metaTitle || `${pageMeta?.title} | De Blæ Helte`,
    description: pageMeta?.seo?.metaDescription || pageMeta?.excerpt,
    openGraph: {
      images: [
        {
          url:
            pageMeta?.seo?.ogImage?.asset?.url ||
            'https://cdn.sanity.io/images/11915si6/production/b9e1f219c5afe04e2545bf15fe66944dc991e304-1200x630.jpg',
        },
      ],
    },
  } satisfies Metadata;
}

export default async function SelectedServicePage({ params }: Props) {
  const service = (await getService((await params).slug)) || notFound();
  return (
    <>
      <NavBar />
      <div>{service.title}</div>
    </>
  );
}
