import CallToAction from "@/components/call-to-action";
import { Navbar } from "@/components/navbar";
import TestimonialCarousel from "@/components/testimonials-carousel";
import { getAllCaseStudies } from "@/sanity/lib/case-studies/get-all-case-studies";
import { image } from "@/sanity/lib/image";
import { getAllServices } from "@/sanity/lib/services/get-all-services";
import { getAllTestimonials } from "@/sanity/lib/testimonials/get-all-testimonials";
import { ArrowLongRightIcon, CheckCircleIcon } from "@heroicons/react/16/solid";
import { Button } from "@relume_io/relume-ui";
import clsx from "clsx";
import { ReactNode } from "react";

function Hero() {
	return (
		<section className="bg-secondary overflow-hidden pt-32">
			<div className="px-[5%]">
				<div className="relative z-10">
					<h1 className="mb-5 max-w-lg text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-[5rem]">
						Medium length hero heading goes here
					</h1>
					<div className="mt-6 flex flex-wrap gap-4 md:mt-8">
						<Button className="bg-primary" iconRight={<ArrowLongRightIcon className="size-5" />}>
							Get a free qoute
						</Button>
						<Button variant="secondary">View services</Button>
					</div>
				</div>
			</div>
			<div className="relative lg:-mt-36">
				<div className="overflow-hidden">
					<img
						src="https://cdn.prod.website-files.com/66d02aba8349878eec2c58c5/66d15ed4f6b8d0d2473889be_hero-image.avif"
						alt=""
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="bg-secondary absolute inset-0 opacity-30"></div>
				<img
					src="https://cdn.prod.website-files.com/66d02aba8349878eec2c58c5/675805f3ed3bcba3504f98e5_update-hero-decoration.svg"
					alt=""
					loading="lazy"
					className="absolute -top-1.5 bottom-0 left-0 right-0"
				/>
			</div>
		</section>
	);
}

function LogoCloud() {
	const logos = [
		{
			src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
			alt: "Webflow logo 1",
		},
		{
			src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
			alt: "Relume logo 1",
		},
		{
			src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
			alt: "Webflow logo 2",
		},
		{
			src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
			alt: "Relume logo 2",
		},
		{
			src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
			alt: "Webflow logo 3",
		},
		{
			src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
			alt: "Relume logo 3",
		},
		{
			src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
			alt: "Webflow logo 4",
		},
		{
			src: "https://d22po4pjz3o32e.cloudfront.net/relume-logo.svg",
			alt: "Relume logo 4",
		},
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
	const services = await getAllServices();

	return (
		<section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container">
				<div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
					<h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
						Long heading is what you see here in this feature section
					</h2>
					<p className="md:text-md">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
						elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
						commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique.
						Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
					</p>
				</div>
				<div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
					{services.map((service) => (
						<div key={service.slug}>
							{service.icon && (
								<div className="mb-5 md:mb-6">
									<img src={image(service.icon).url()} className="size-12" alt="" />
								</div>
							)}
							<h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{service.title}</h3>
							<p>{service.excerpt}</p>
							<div className="mt-6 flex items-center gap-4 md:mt-8">
								<Button>
									<a href={`/services/${service.slug}`}>Read More</a>
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function WhyUs() {
	const features = [
		{
			paragraph: "Eco-friendly products",
		},
		{
			paragraph: "Satisfaction guarantee",
		},
		{
			paragraph: "Experienced staff",
		},
	];

	return (
		<section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container">
				<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
					<div className="order-2 md:order-1">
						<img
							src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
							className="w-full object-cover"
							alt="Placeholder"
						/>
					</div>
					<div className="order-1 md:order-2">
						<p className="mb-3 font-semibold md:mb-4">Clean</p>
						<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
							Why Choose Our Cleaning Services?
						</h2>
						<p className="mb-5 md:mb-6 md:text-md">
							Our experienced staff utilizes eco-friendly products to ensure a safe and healthy
							environment for you and your family. With our satisfaction guarantee, you can trust
							that we will exceed your expectations every time.
						</p>
						<div className="grid grid-cols-1 gap-4 py-2">
							{features.map((feature, index) => (
								<div key={index} className="flex self-start">
									<div className="mr-4 flex-none self-start">
										<CheckCircleIcon className="size-6" />
									</div>
									<p>{feature.paragraph}</p>
								</div>
							))}
						</div>
						<div className="mt-6 flex flex-wrap gap-4 md:mt-8">
							<Button>Button</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function HowItWorks() {
	const stepsItems = [
		{
			icon: <CheckCircleIcon className="size-8" />,
			title: "Step 1",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
		},
		{
			icon: <CheckCircleIcon className="size-8" />,
			title: "Step 2",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
		},
		{
			icon: <CheckCircleIcon className="size-8" />,
			title: "Step 3",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
		},
	];

	const StepsItem = ({
		icon,
		title,
		description,
		isFirstItem,
		isLastItem,
	}: {
		icon: ReactNode;
		title: string;
		description: string;
		isFirstItem: boolean;
		isLastItem: boolean;
	}) => {
		return (
			<div className="relative grid auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 md:flex md:flex-col md:items-center md:gap-0">
				<div className="mb-8 overflow-hidden md:mb-0">{icon}</div>
				<div className="relative flex flex-col items-center self-stretch md:mb-4 md:mt-8 md:w-full md:flex-row md:self-auto">
					{isFirstItem && (
						<div className="absolute left-0 top-1.5 z-10 hidden h-1 w-16 bg-gradient-to-r from-background-primary to-transparent md:block" />
					)}
					<div className="h-2 w-[3px] bg-neutral-black md:h-[3px] md:w-full" />
					<div className="z-20 size-[0.9375rem] flex-none rounded-full bg-neutral-black shadow-[0_0_0_8px_white]" />
					<div
						className={clsx("h-full w-[3px] bg-neutral-black md:h-[3px] md:w-full", {
							"hidden md:block": isLastItem,
						})}
					/>
					{isLastItem && (
						<div className="absolute right-0 top-1.5 z-0 hidden h-1 w-16 bg-gradient-to-l from-background-primary to-transparent md:block" />
					)}
				</div>
				<div className="pb-4 sm:pb-0 md:mb-0 md:px-3 md:text-center">
					<h3 className="mb-2 text-xl font-bold md:text-2xl">{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		);
	};

	return (
		<section id="relume" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container">
				<div className="mb-12 md:mb-18 lg:mb-20">
					<div className="mx-auto w-full max-w-lg text-center">
						<p className="mb-3 font-semibold md:mb-4">Effortless</p>
						<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
							Your Simple Guide to Booking Our Services
						</h2>
						<p className="md:text-md">
							Booking a cleaning service with us is straightforward. Follow these easy steps to get
							started today!
						</p>
						<div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
							<Button>Book now</Button>
							<Button variant="secondary">Learn more</Button>
						</div>
					</div>
				</div>
				<div className="relative grid auto-cols-fr grid-cols-1 md:flex">
					{stepsItems.map((item, index) => (
						<StepsItem
							key={index}
							isFirstItem={index === 0}
							isLastItem={index === stepsItems.length - 1}
							{...item}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

async function CaseStudies() {
	const caseStudies = await getAllCaseStudies();

	return (
		<section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container">
				<header className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
					<p className="mb-3 font-semibold md:mb-4">Portfolio</p>
					<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
						Short heading goes here
					</h2>
					<p className="md:text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</header>
				<div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12">
					{caseStudies.map((caseStudy) => (
						<article key={caseStudy.slug} className="border border-border-primary">
							<div>
								<a href={`/casestudier/${caseStudy.slug}`}>
									{caseStudy.mainImage ? (
										<img
											src={image(caseStudy.mainImage).url()}
											className="w-full object-cover"
											alt={caseStudy.mainImage.alt}
											loading="lazy"
										/>
									) : (
										<div className="h-64 w-full animate-pulse bg-gray-200"></div>
									)}
								</a>
							</div>
							<div className="px-5 py-6 sm:px-6">
								<h3 className="mb-2 text-xl font-bold md:text-2xl">
									<a href={`/casestudier/${caseStudy.slug}`}>{caseStudy.title}</a>
								</h3>
								<p>{caseStudy.excerpt}</p>
								<ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
									{caseStudy.services?.map((service) => (
										<li key={service.slug} className="flex">
											<a
												href={`/services/${service.slug}`}
												className="bg-background-secondary px-2 py-1 text-sm font-semibold"
											>
												{service.title}
											</a>
										</li>
									))}
								</ul>
								<Button className="mt-5 md:mt-6">
									<a href={`/casestudier/${caseStudy.slug}`}>View project</a>
								</Button>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

async function Testimonials() {
	const testimonials = await getAllTestimonials();
	return (
		<TestimonialCarousel
			testimonials={testimonials}
			heading="Customer testimonials"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		/>
	);
}

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<LogoCloud />
			<Services />
			<WhyUs />
			<HowItWorks />
			<CaseStudies />
			<Testimonials />
			<CallToAction
				heading="Medium length heading goes here"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
				buttons={[{ title: "Button" }, { title: "Button", variant: "secondary" }]}
			/>
		</>
	);
}
