import CallToAction from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import HomeTestimonials from "@/components/home-testimonials";
import { Navbar } from "@/components/navbar";
import { image } from "@/sanity/lib/image";
import { getFeaturedServices } from "@/sanity/lib/services/get-featured-services";
import { getAllTestimonials } from "@/sanity/lib/testimonials/get-all-testimonials";
import { Button } from "@relume_io/relume-ui";
import Link from "next/link";

function Hero() {
	const features = [
		{
			icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 1" },
			heading: "Short heading here",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
		},
		{
			icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 2" },
			heading: "Short heading here",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
		},
	];
	return (
		<section id="relume" className="px-[5%] pb-8 pt-6 md:pb-12 lg:pb-14 lg:pt-8">
			<div className="mx-auto max-w-screen-2xl">
				<div className="grid grid-cols-1 gap-6 md:gap-8">
					<div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
						<div className="shadow-sm order-first flex flex-col items-stretch rounded-lg bg-white ring-1 ring-black/5 lg:order-none lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3">
							<div className="block flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-20">
								<div>
									<h1 className="mb-5 text-6xl font-bold leading-[1.2] md:mb-6 md:text-9xl lg:text-10xl">
										Medium length hero heading goes here
									</h1>
									<p className="md:text-md">
										From life and health to property and auto insurance, we provide reliable
										protection for what matters most.
									</p>
								</div>
								<div className="mt-6 flex items-center gap-4 md:mt-8">
									<Button asChild className="rounded-md border-primary bg-primary">
										<Link href="/fa-et-tilbud">Få et tilbud</Link>
									</Button>
									<Button variant="secondary" className="rounded-md">
										Ring nu
									</Button>
								</div>
								<div className="mt-12 xl:mt-auto">
									<div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
										{features.map((feature, index) => (
											<div key={index}>
												<div className="mb-3 md:mb-4">
													<img src={feature.icon.src} className="size-12" alt={feature.icon.alt} />
												</div>
												<p className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
													{feature.heading}
												</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="lg:order-none">
							<div className="shadow-xl flex size-full items-center justify-center rounded-lg outline-1 -outline-offset-1 outline-black/10">
								<img
									src="https://cdn.sanity.io/images/11915si6/production/f25bc368bb61056309441abc03383dc7ab553bc7-1505x1004.jpg?w=2000&fit=max&auto=format"
									alt=""
									fetchPriority="high"
									className="size-full rounded-lg object-cover"
								/>
							</div>
						</div>
						<div className="order-last flex w-full flex-col justify-between rounded-lg bg-white ring-1 ring-black/5 lg:order-none">
							<LogoCloudBento />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function LogoCloudBento() {
	const logos = [
		{ src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo 1" },
		{ src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Relume logo 1" },
		{ src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo 2" },
		{ src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Relume logo 2" },
		{ src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo 3" },
		{ src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Relume logo 3" },
		{ src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg", alt: "Webflow logo 4" },
		{ src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg", alt: "Relume logo 4" },
	];

	return (
		<section id="relume" className="overflow-hidden py-12 md:py-16 lg:py-20">
			<div className="container mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
				<h1 className="text-center text-base font-bold leading-[1.2] md:text-md md:leading-[1.2]">
					Used by the world&apos;s leading companies
				</h1>
			</div>
			<div className="flex items-center pt-7 md:pt-0">
				{Array(2)
					.fill(0)
					.map((_, index) => (
						<div key={index} className="flex shrink-0 animate-loop-horizontally items-center">
							{logos.map((logo, index) => (
								<img
									key={index}
									className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14"
									src={logo.src}
									alt={logo.alt}
								/>
							))}
						</div>
					))}
			</div>
		</section>
	);
}

async function Services() {
	const services = await getFeaturedServices(3);

	return (
		<section id="relume" className="px-[5%] py-8 md:py-12 lg:py-14">
			<div className="shadow-sm mx-auto max-w-screen-2xl rounded-lg bg-white p-6 px-6 py-8 ring-1 ring-black/5 md:p-8 lg:p-20">
				<div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
					<p className="mb-3 font-semibold text-primary md:mb-4">Services</p>
					<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
						Comprehensive cleaning solutions
					</h2>
					<p className="md:text-md">
						Experience the difference with our professional cleaning services tailored for both
						homes and offices. Let us take care of the mess so you can focus on what truly matters.
					</p>
				</div>
				<div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
					{services.map((service) => (
						<div
							key={service.slug}
							className="group relative flex h-full flex-col rounded-lg bg-white p-2 shadow-black/10 ring-1 ring-black/10"
						>
							{service.mainImage && (
								<img
									src={image(service.mainImage).format("webp").url()}
									alt={service.mainImage.alt}
									loading="lazy"
									className="aspect-[3/2] w-full rounded-md object-cover"
								/>
							)}
							<div className="flex flex-1 flex-col p-8">
								<h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
									<Link href={`/services/${service.slug}`}>
										{service.title}
										<span className="absolute inset-0"></span>
									</Link>
								</h3>
								<p className="line-clamp-3">{service.excerpt}</p>
							</div>
						</div>
					))}
				</div>
				<div className="mt-10 flex items-center justify-center gap-4 md:mt-14 lg:mt-16">
					<Button asChild className="rounded-md border-primary bg-primary">
						<Link href="/services">View all services</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

function WhyUs() {
	const features = [
		{
			icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 1" },
			heading: "Short heading here",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
		},
		{
			icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 2" },
			heading: "Short heading here",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
		},
		{
			icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
			heading: "Short heading here",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
		},
		{
			icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 4" },
			heading: "Short heading here",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
		},
	];
	return (
		<section id="relume" className="px-[5%] py-8 md:py-12 lg:py-14">
			<div className="mx-auto max-w-screen-2xl">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-x-20">
					<div className="">
						<div className="lg:sticky lg:top-20">
							<p className="mb-3 font-semibold text-primary md:mb-4">About Us</p>
							<h2 className="rb-5 mb-5 text-pretty text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
								Why choose us for your cleaning needs?
							</h2>
							<p className="md:text-md">
								Our experienced staff utilizes eco-friendly products to ensure a safe and healthy
								environment for you and your family. With our satisfaction guarantee, you can trust
								that we will exceed your expectations every time.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
						{features.map((feature, index) => (
							<div
								key={index}
								className="shadow-sm flex self-start rounded-lg bg-white p-8 ring-1 ring-black/5"
							>
								<div className="mr-6 flex-none self-start">
									<img
										src={feature.icon.src}
										className="size-12"
										alt={feature.icon.alt}
										loading="lazy"
									/>
								</div>
								<div>
									<h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{feature.heading}</h3>
									<p>{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

async function Testimonials() {
	const testimonials = await getAllTestimonials();

	return (
		<section id="relume" className="px-[5%] py-8 md:py-12 lg:py-14">
			<div className="mx-auto max-w-screen-2xl">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-8">
					<div className="order-1 h-full rounded-lg outline-1 -outline-offset-1 outline-black/10">
						<img
							src="https://placehold.co/1000x800"
							className="size-full rounded-lg object-cover"
							alt=""
							loading="lazy"
						/>
					</div>
					<div className="shadow-sm order-2 h-full rounded-lg bg-white ring-1 ring-black/5">
						<HomeTestimonials testimonials={testimonials} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default function Page() {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<WhyUs />
			<Testimonials />
			<CallToAction />
			<Footer />
		</>
	);
}
