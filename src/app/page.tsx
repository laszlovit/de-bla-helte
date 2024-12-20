import CallToAction from "@/components/call-to-action";
import { DynamicHomeTestimonials } from "@/components/dynamic-home-testimonials";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { image } from "@/sanity/lib/image";
import { getFeaturedServices } from "@/sanity/lib/services/get-featured-services";
import { getAllTestimonials } from "@/sanity/lib/testimonials/get-all-testimonials";

import {
	BanknotesIcon,
	CheckBadgeIcon,
	FaceSmileIcon,
	ShieldCheckIcon,
	SparklesIcon,
	UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@relume_io/relume-ui";
import Link from "next/link";

function Hero() {
	const features = [
		{
			icon: <BanknotesIcon className="size-10 text-primary" />,
			heading: "Simple priser, ingen ubehagelige overraskelser",
		},
		{
			icon: <CheckBadgeIcon className="size-10 text-primary" />,
			heading: "Garanti for veludført arbejde",
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
									<h1 className="mb-5 text-5xl font-bold leading-[1.2] md:mb-6 md:text-9xl lg:text-10xl">
										Rengøringsservice løsninger til private og erhvervskunder
									</h1>
									<p className="md:text-md">
										Vi tilbyder pålidelig rengøring i Esbjerg og Syddanmark, herunder
										vinduespolering, fliserensning, solcellerensning med mere. Vores erfarne team
										sikrer høj kvalitet og tilfredshed.
									</p>
								</div>
								<div className="mt-6 flex items-center gap-4 md:mt-8">
									<Button asChild className="rounded-md border-primary bg-primary font-semibold">
										<Link href="/fa-et-tilbud">Få et tilbud</Link>
									</Button>
									<Button variant="secondary" className="rounded-md border-2 font-semibold">
										Ring nu
									</Button>
								</div>
								<div className="mt-12 xl:mt-auto">
									<div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
										{features.map((feature, index) => (
											<div key={index}>
												<div className="mb-3 md:mb-4">{feature.icon}</div>
												<p className="mb-3 text-pretty text-lg font-bold md:mb-4 md:text-xl">
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
									loading="lazy"
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
		{ src: "/home/rekom-group-logo.png", alt: "Webflow logo 1" },
		{ src: "/home/place-to-logo.png", alt: "Relume logo 1" },
		{ src: "/home/henne-molle-hotel-logo.png", alt: "Webflow logo 2" },
		{ src: "/home/rustik-logo.webp", alt: "Relume logo 2" },
		{ src: "/home/stennevad-logo.png", alt: "Webflow logo 3" },
		{ src: "/home/dansk-bilglas-logo.png", alt: "Relume logo 3" },
	];

	return (
		<section id="relume" className="overflow-hidden py-12 md:py-16 lg:py-20">
			<div className="container mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
				<h1 className="text-center text-base font-bold leading-[1.2] md:text-md md:leading-[1.2]">
					Betroet af vores værdifulde kunder
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
									loading="lazy"
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
						Oplev vores professionelle rengøringsservice
					</h2>
					<p className="md:text-md">
						Vi tilbyder professionelle rengøringstjenester i Esbjerg og Syddanmark, tilpasset dine
						behov. Fra vinduespolering til erhvervsrengøring kan du stole på vores dygtige team for
						at levere høj kvalitet og pålidelig service.
					</p>
				</div>
				<div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
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
								<h3 className="mb-3 text-xl font-bold transition-all duration-300 ease-in-out group-hover:text-primary md:mb-4 md:text-2xl">
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
					<Button asChild className="rounded-md border-primary bg-primary font-semibold">
						<Link href="/services">Se alle services</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

function WhyUs() {
	const features = [
		{
			icon: <ShieldCheckIcon className="size-12 text-primary" />,
			heading: "Troværdighed",
			description:
				"Vi sætter en stor ære i at yde det bedste for vores kunder. Derfor er De Blå Helte bygget op omkring troværdighed, høj kvalitet og et serviceminded personale.",
		},
		{
			icon: <FaceSmileIcon className="size-12 text-primary" />,
			heading: "Kundetilfredshed",
			description:
				"For os er det vigtigt, at vores kunder er tilfredse og føler sig trygge ved den service, vi udfører.",
		},
		{
			icon: <UserGroupIcon className="size-12 text-primary" />,
			heading: "Personlig service",
			description:
				"Derfor tilfører vi et fast team til hver enkelt opgave. Det giver vores team et personligt tilhørsforhold og garanterer ensartet rengøring.",
		},
		{
			icon: <SparklesIcon className="size-12 text-primary" />,
			heading: "Grundig rengøring",
			description:
				"Vores mål er at levere en grundig rengøring af dine lokaler, så du kan nyde et rent og behageligt miljø.",
		},
	];
	return (
		<section id="om-os" className="px-[5%] py-8 md:py-12 lg:py-14">
			<div className="mx-auto max-w-screen-2xl">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-x-20">
					<div className="">
						<div className="lg:sticky lg:top-20">
							<p className="mb-3 font-semibold text-primary md:mb-4">Om os</p>
							<h2 className="rb-5 mb-5 text-pretty text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
								Hvordan sikrer vi din troværdighed og kvalitet?
							</h2>
							<p className="md:text-md">
								Vi er dedikeret til at levere service af højeste kvalitet, hvor tillid og
								pålidelighed er i fokus. Vores team arbejder altid med stor omhu og professionel
								integritet for at sikre, at du får den bedste oplevelse hver gang.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
						{features.map((feature, index) => (
							<div
								key={index}
								className="shadow-sm flex self-start rounded-lg bg-white p-8 ring-1 ring-black/5"
							>
								<div className="mr-6 flex-none self-start">{feature.icon}</div>
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
							src="https://cdn.sanity.io/images/11915si6/production/3421300d1e27d1e10a40b5b8252a485413785f1c-1504x1204.jpg?fit=max&w=1200&h=1200&auto=format"
							className="size-full rounded-lg object-cover"
							alt=""
							loading="lazy"
						/>
					</div>
					<div className="shadow-sm order-2 h-full rounded-lg bg-white ring-1 ring-black/5">
						<DynamicHomeTestimonials testimonials={testimonials} />
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
