import { BanknotesIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Link from "next/link";

const Button = dynamic(() => import("@relume_io/relume-ui").then((mod) => mod.Button));

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

export default function Hero() {
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
							<div className="block flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-12 xl:p-20">
								<div>
									<h1 className="mb-5 text-pretty text-5xl font-bold leading-[1.2] md:mb-6 md:text-6xl lg:text-7xl xl:text-10xl">
										Serviceløsninger til private og erhvervskunder
									</h1>
									<p className="md:text-md">
										Vinduesvask | Rengøring | Fliserens | Solcellerens | Algebehandling |
										Myrebekæmpelse | Trappevask m.m. <br /> <br />
										Vi tilbyder pålidelig opgaveløsning. Vores erfarne team sikrer høj kvalitet og
										tilfredshed.
									</p>
								</div>
								<div className="mt-6 flex items-center gap-4 md:mt-8">
									<Button asChild className="rounded-md border-primary bg-primary font-semibold">
										<Link href="/fa-et-tilbud">Få et tilbud</Link>
									</Button>
									<Button asChild variant="secondary" className="rounded-md border-2 font-semibold">
										<a href="tel:+4570604615"> Ring nu</a>
									</Button>
								</div>
								<div className="mt-12 xxl:mt-auto">
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
									src="https://cdn.sanity.io/images/11915si6/production/b2effd8e613a3da3ee83aa5d47e5b50174ceff1b-1505x1004.jpg?fit=max&w=1200&h=1200&auto=format"
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
