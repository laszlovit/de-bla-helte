import CallToAction from "@/components/call-to-action";
import ServicesCarousel from "@/components/services-carousel";
import TestimonialCarousel from "@/components/testimonials-carousel";
import { getAllCaseStudies } from "@/sanity/lib/case-studies/get-all-case-studies";
import { image } from "@/sanity/lib/image";
import { getAllServices } from "@/sanity/lib/services/get-all-services";
import { getAllTestimonials } from "@/sanity/lib/testimonials/get-all-testimonials";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { Button } from "@relume_io/relume-ui";

function Hero() {
	return (
		<section className="overflow-hidden bg-secondary pt-32 lg:pt-60">
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
				<div className="absolute inset-0 bg-secondary opacity-30"></div>
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

function AboutUs() {
	const features = [
		{
			icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 1" },
			heading: "Medium length",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
		},
		{
			icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 2" },
			heading: "Medium length",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
		},
		{
			icon: { src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg", alt: "Relume logo 3" },
			heading: "Medium length ",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
		},
	];

	return (
		<section id="relume" className="relative bg-grayish px-[5%] py-16 md:py-24 lg:py-28">
			<img
				src="https://cdn.prod.website-files.com/66d02aba8349878eec2c58c5/67580bc30453a61ed3433362_update-About%20Decoration.svg"
				loading="lazy"
				alt="Decoration"
				className="absolute -bottom-1.5 left-0 right-0 top-auto w-full"
			></img>
			<div className="container">
				<div className="grid grid-cols-1 items-start justify-center gap-y-12 pb-16 md:grid-cols-3 md:gap-x-8 md:gap-y-16 md:pb-24 lg:gap-x-12 lg:pb-28">
					{features.map((feature, index) => (
						<div key={index} className="flex gap-6">
							<div className="flex-none">
								<img src={feature.icon.src} className="size-12" alt={feature.icon.alt} />
							</div>
							<div>
								<h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
									{feature.heading}
								</h3>
								<p>{feature.description}</p>
							</div>
						</div>
					))}
				</div>
				<div className="relative z-10 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:-mb-20 lg:gap-x-20 xl:-mb-24">
					<div className="order-2 md:order-1">
						<img
							src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
							className="aspect-[2/2.3] w-full object-cover"
							alt=""
						/>
					</div>
					<div className="order-2 lg:order-2">
						<p className="mb-3 font-semibold text-primary md:mb-4">Your trusted partner</p>
						<h2 className="rb-5 mb-5 text-pretty text-4xl font-bold md:mb-6 lg:text-6xl">
							With our satisfaction guarantee, you can trust that we will exceed your expectations
							every time.
						</h2>
						<div className="mt-6 flex flex-wrap gap-4 md:mt-8">
							<Button variant="secondary" iconRight={<ArrowLongRightIcon className="size-5" />}>
								Read more about us
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

async function Services() {
	const services = await getAllServices();

	return (
		<ServicesCarousel
			heading="What we offer"
			description="Explore a wide range of consulting services tailored to meet your specific needs and goals"
			services={services}
		/>
	);
}

async function CaseStudies() {
	const caseStudies = await getAllCaseStudies();

	return (
		<section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container">
				<header className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
					<p className="mb-3 font-semibold text-primary md:mb-4">Case Studies</p>
					<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
						Our Cleaning Projects
					</h2>
					<p className="md:text-md">Explore our diverse range of cleaning services.</p>
				</header>
				<div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12">
					{caseStudies.map((caseStudy) => (
						<article key={caseStudy.slug} className="group relative">
							<div className="relative overflow-hidden">
								<a href={`/casestudier/${caseStudy.slug}`} className="">
									{caseStudy.mainImage ? (
										<div className="clip-bottom">
											<img
												src={image(caseStudy.mainImage).format("webp").url()}
												className="aspect-video w-full object-cover transition-all duration-500 group-hover:scale-105"
												alt={caseStudy.mainImage.alt}
												loading="lazy"
											/>
										</div>
									) : (
										<div className="h-64 w-full animate-pulse bg-gray-200"></div>
									)}
								</a>
							</div>
							<div className="px-5 py-6 sm:px-6">
								<h3 className="mb-2 text-xl font-bold md:text-2xl">
									<a href={`/casestudier/${caseStudy.slug}`}>
										{caseStudy.title}
										<span className="absolute inset-0"></span>
									</a>
								</h3>
								<p>{caseStudy.excerpt}</p>
								<ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
									{caseStudy.services?.map((service) => (
										<li key={service.slug} className="flex">
											<a
												href={`/services/${service.slug}`}
												className="z-20 bg-background-secondary px-2 py-1 text-sm font-semibold"
											>
												{service.title}
											</a>
										</li>
									))}
								</ul>
								<Button className="mt-5 bg-primary md:mt-6">
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
	return <TestimonialCarousel testimonials={testimonials} />;
}

export default function Home() {
	return (
		<>
			<Hero />
			<AboutUs />
			<Services />
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
