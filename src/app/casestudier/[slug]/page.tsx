import NavBar from '@/components/navbar'
import { getCaseStudy } from '@/sanity/lib/case-studies/get-case-study'
import { getCaseStudyMeta } from '@/sanity/lib/case-studies/get-case-study-meta'
import { getCaseStudySlugs } from '@/sanity/lib/case-studies/get-case-study-slugs'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const caseStudySlugs = await getCaseStudySlugs()
  return caseStudySlugs
}

// TODO: Update custom OG image fallback

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const pageMeta = await getCaseStudyMeta(params.slug)

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
  } satisfies Metadata
}

export default async function SelectedCaseStudyPage({ params }: Props) {
  const caseStudy = (await getCaseStudy((await params).slug)) || notFound()
  return (
    <>
      <NavBar />
      <div>{caseStudy.title}</div>
    </>
  )
}
