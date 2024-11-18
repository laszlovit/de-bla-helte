import { Button } from '@/components/button'
import CallToAction from '@/components/call-to-action'
import { Container } from '@/components/container'
import Fancybox from '@/components/fancybox-wrapper'
import { Link } from '@/components/link'
import NavBar from '@/components/navbar'
import { Heading } from '@/components/text'
import { image } from '@/sanity/lib/image'
import { getService } from '@/sanity/lib/services/get-service'
import { getServiceMeta } from '@/sanity/lib/services/get-service-meta'
import { getServiceSlugs } from '@/sanity/lib/services/get-service-slugs'
import { Metadata } from 'next'
import { PortableText, toPlainText } from 'next-sanity'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const serviceSlugs = await getServiceSlugs()
  return serviceSlugs
}

// TODO: Update custom OG image fallback

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const pageMeta = await getServiceMeta(params.slug)

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

export default async function SelectedServicePage({ params }: Props) {
  const service = (await getService((await params).slug)) || notFound()
  return (
    <>
      <NavBar />
      <div className="relative bg-primary/10 bg-[url(/dot-texture.svg)] pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <Container className="relative">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="flex flex-col justify-center lg:max-w-lg lg:pb-12">
              <p className="text-sm font-medium text-gray-900">Services</p>
              <Heading as="h1" className="mt-2">
                {service.title}
              </Heading>
              <p className="mt-4 max-w-2xl text-lg tracking-tight text-slate-700">
                {service.excerpt}
              </p>
              <div className="mt-10 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                <Button href="#">Get a free quote</Button>
                <Button variant="secondary" href="#details">
                  Learn more
                </Button>
              </div>
            </div>
            <div className="relative">
              {service.mainImage && (
                <img
                  src={image(service.mainImage).url()}
                  alt={service.mainImage.alt || ''}
                  fetchPriority="high"
                  className="relative z-20 -mb-20 rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5 sm:-mb-16 lg:-mb-8 xl:-mb-20"
                />
              )}
            </div>
          </div>
        </Container>
      </div>
      <div className="mt-52 pb-20 sm:mt-36 sm:pb-24 lg:mt-28 lg:pb-32 xl:mt-36">
        <Container>
          <div className="mx-auto max-w-7xl space-y-20 divide-y divide-slate-200 sm:space-y-24 lg:max-w-none lg:space-y-32">
            <section className="grid grid-cols-1 items-baseline gap-x-6 gap-y-10 lg:grid-cols-3">
              <h2 className="text-2xl/9 font-semibold tracking-tight text-slate-900">
                Hvad er inkluderet
              </h2>
              <div className="max-w-2xl space-y-10 lg:col-span-2">
                {service.body && (
                  <PortableText
                    value={service.body}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="my-10 text-base/8 first:mt-0 last:mb-0">
                            {children}
                          </p>
                        ),
                        h2: ({ value, children }) => (
                          <h2
                            id={toPlainText(value)}
                            className="mb-10 mt-12 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0"
                          >
                            {children}
                          </h2>
                        ),
                        h3: ({ value, children }) => (
                          <h3
                            id={toPlainText(value)}
                            className="mb-10 mt-12 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0"
                          >
                            {children}
                          </h3>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">
                            {children}
                          </blockquote>
                        ),
                      },
                      types: {
                        image: ({ value }) => (
                          <img
                            alt={value.alt || ''}
                            src={image(value).width(2000).url()}
                            className="w-full rounded-2xl"
                          />
                        ),
                        separator: ({ value }) => {
                          switch (value.style) {
                            case 'line':
                              return (
                                <hr className="my-8 border-t border-gray-200" />
                              )
                            case 'space':
                              return <div className="my-8" />
                            default:
                              return null
                          }
                        },
                      },
                      list: {
                        bullet: ({ children }) => (
                          <ul className="list-disc pl-4 text-base/8 marker:text-gray-400">
                            {children}
                          </ul>
                        ),
                        number: ({ children }) => (
                          <ol className="list-decimal pl-4 text-base/8 marker:text-gray-400">
                            {children}
                          </ol>
                        ),
                      },
                      listItem: {
                        bullet: ({ children }) => {
                          return (
                            <li className="my-2 pl-2 has-[br]:mb-8">
                              {children}
                            </li>
                          )
                        },
                        number: ({ children }) => {
                          return (
                            <li className="my-2 pl-2 has-[br]:mb-8">
                              {children}
                            </li>
                          )
                        },
                      },
                      marks: {
                        strong: ({ children }) => (
                          <strong className="font-semibold text-gray-950">
                            {children}
                          </strong>
                        ),
                        link: ({ value, children }) => {
                          return (
                            <Link
                              href={value.href}
                              className="font-medium text-primary underline decoration-primary/40 underline-offset-4 data-[hover]:decoration-primary/60"
                            >
                              {children}
                            </Link>
                          )
                        },
                      },
                    }}
                  />
                )}
              </div>
            </section>
            {service.gallery && (
              <section className="grid grid-cols-1 gap-x-6 gap-y-10 pt-10 lg:grid-cols-3">
                <h2 className="text-2xl/9 font-semibold tracking-tight text-slate-900">
                  Galleri
                </h2>
                <Fancybox
                  className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2"
                  options={{
                    Carousel: {
                      infinite: false,
                    },
                  }}
                >
                  {service.gallery.map((imageItem) => (
                    <div
                      key={imageItem._key}
                      className="flex flex-col items-center"
                    >
                      <Link
                        data-fancybox="gallery"
                        data-caption={imageItem.alt || ''}
                        href={image(imageItem).url()}
                        className="group relative overflow-hidden rounded-xl"
                      >
                        <img
                          alt={imageItem.alt || ''}
                          src={image(imageItem).url()}
                          loading="lazy"
                          className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                        />
                      </Link>
                    </div>
                  ))}
                </Fancybox>
              </section>
            )}
            {service.testimonials && (
              <section className="grid grid-cols-1 gap-x-6 gap-y-10 pt-10 lg:grid-cols-3">
                <h2 className="text-2xl/9 font-semibold tracking-tight text-slate-900">
                  Hvad vores kunder siger
                </h2>
                <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
                  {service.testimonials.map((testimonial) => (
                    <li
                      key={testimonial.slug}
                      className="relative flex flex-col space-y-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-black/5"
                    >
                      {testimonial.logo && (
                        <div className="border-b border-slate-100 pb-4">
                          <img
                            alt={testimonial.logo.alt || ''}
                            src={image(testimonial.logo).format('webp').url()}
                            className="h-6 w-auto"
                          />
                        </div>
                      )}
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        {testimonial.avatar && (
                          <img
                            alt={testimonial.avatar.alt || ''}
                            src={image(testimonial.avatar).format('webp').url()}
                            className="h-10 w-10 rounded-full bg-gray-50"
                          />
                        )}
                        <div>
                          <div className="font-medium">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">Manager</div>
                        </div>
                      </figcaption>
                      <blockquote className="text-sm text-gray-700">
                        “{testimonial.content}”
                      </blockquote>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </Container>
      </div>
      <CallToAction
        title="Elevate Your Business Environment"
        description="First impressions matter. Ensure your workplace reflects professionalism with spotless, gleaming windows. Schedule our expert window cleaning service today, so you can focus on growing your business while we handle the shine."
      />
    </>
  )
}
