import CallToAction from "@/components/call-to-action";
import Fancybox from "@/components/fancybox-wrapper";
import { Footer } from "@/components/footer";
import { Link } from "@/components/link";
import { Navbar } from "@/components/navbar";
import { image } from "@/sanity/lib/image";
import { getService } from "@/sanity/lib/services/get-service";
import { getServiceMeta } from "@/sanity/lib/services/get-service-meta";
import { getServiceSlugs } from "@/sanity/lib/services/get-service-slugs";
import { Button } from "@relume_io/relume-ui";
import { Metadata } from "next";
import { PortableText, toPlainText } from "next-sanity";
import { notFound } from "next/navigation";

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
						"https://cdn.sanity.io/images/11915si6/production/b9e1f219c5afe04e2545bf15fe66944dc991e304-1200x630.jpg",
				},
			],
		},
	} satisfies Metadata;
}

export default async function SelectedServicePage({ params }: Props) {
	const service = (await getService((await params).slug)) || notFound();
	return (
		<>
			<Navbar />
			<section id="relume" className="px-[5%] pb-8 pt-6 md:pb-12 lg:pb-14 lg:pt-8">
				<div className="container">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.5fr] lg:gap-8">
						<div className="shadow-sm rounded-lg bg-white p-8 ring-1 ring-black/5 xl:p-12">
							{service.mainImage && (
								<img
									src={image(service.mainImage).url()}
									alt={service.mainImage.alt}
									className="w-full rounded-md object-cover lg:aspect-[4/2]"
								/>
							)}
							<h1 className="mb-5 mt-10 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
								{service.title}
							</h1>
							<h2 className="mb-10 text-2xl/9 font-semibold tracking-tight text-slate-900">
								Hvad er inkluderet
							</h2>
							<div className="prose md:prose-md lg:prose-lg">
								{service.body && (
									<PortableText
										value={service.body}
										components={{
											block: {
												normal: ({ children }) => (
													<p className="my-10 text-base/8 first:mt-0 last:mb-0">{children}</p>
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
														alt={value.alt || ""}
														src={image(value).width(2000).url()}
														className="w-full rounded-2xl"
													/>
												),
												separator: ({ value }) => {
													switch (value.style) {
														case "line":
															return <hr className="my-8 border-t border-gray-200" />;
														case "space":
															return <div className="my-8" />;
														default:
															return null;
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
													return <li className="my-2 pl-2 has-[br]:mb-8">{children}</li>;
												},
												number: ({ children }) => {
													return <li className="my-2 pl-2 has-[br]:mb-8">{children}</li>;
												},
											},
											marks: {
												strong: ({ children }) => (
													<strong className="font-semibold text-gray-950">{children}</strong>
												),
												link: ({ value, children }) => {
													return (
														<Link
															href={value.href}
															className="font-medium text-primary underline decoration-primary/40 underline-offset-4 data-[hover]:decoration-primary/60"
														>
															{children}
														</Link>
													);
												},
											},
										}}
									/>
								)}
							</div>
							{service.gallery && (
								<section className="grid grid-cols-1 gap-x-6 gap-y-10 pt-10">
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
											<div key={imageItem._key} className="flex flex-col items-center">
												<Link
													data-fancybox="gallery"
													data-caption={imageItem.alt || ""}
													href={image(imageItem).url()}
													className="group relative overflow-hidden rounded-xl"
												>
													<img
														alt={imageItem.alt || ""}
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
								<section className="grid grid-cols-1 gap-x-6 gap-y-10 pt-10">
									<h2 className="text-2xl/9 font-semibold tracking-tight text-slate-900">
										Hvad vores kunder siger
									</h2>
									<ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
										{service.testimonials.map((testimonial) => (
											<li
												key={testimonial.slug}
												className="shadow-sm relative col-span-2 flex flex-col space-y-4 rounded-md bg-white p-6 ring-1 ring-black/10"
											>
												{testimonial.logo && (
													<div className="border-b border-slate-100 pb-4">
														<img
															alt={testimonial.logo.alt || ""}
															src={image(testimonial.logo).format("webp").url()}
															className="h-6 w-auto"
														/>
													</div>
												)}
												<div className="mt-6 flex items-center gap-x-4">
													<div>
														<div className="font-medium">{testimonial.name}</div>
														<div className="text-sm text-gray-600">Manager</div>
													</div>
												</div>
												<blockquote className="text-sm text-gray-700">
													“{testimonial.content}”
												</blockquote>
											</li>
										))}
									</ul>
								</section>
							)}
						</div>
						<div>
							<div className="shadow-sm rounded-lg border border-primary bg-primary p-8 lg:sticky lg:top-20">
								<h2 className="mb-3 text-pretty text-xl font-bold leading-[1.4] text-white md:mb-4 md:text-2xl">
									Ready to Transform Your Space?
								</h2>
								<p className="text-white">
									Whether it’s your home, office, or commercial property, our expert team ensures
									spotless results every time.
								</p>
								<div className="mt-6 flex w-full flex-wrap items-center justify-start gap-4 md:w-auto">
									<Button className="rounded-md border-white bg-white text-gray-900">
										Get a quote
									</Button>
									<Button asChild className="rounded-md border-white bg-transparent">
										<a href="tel:+4570604615">Call now</a>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="hidden lg:block">
				<CallToAction />
			</div>
			<Footer />
		</>
	);
}
