import { Navbar13 } from "@/components/navbar";
import { Button } from "@relume_io/relume-ui";

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
					Used by the world's leading companies
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
		<section id="relume" className="px-[5%] pb-16 pt-6 md:pb-24 lg:pb-28 lg:pt-8">
			<div className="mx-auto max-w-[1536px]">
				<div className="grid grid-cols-1 gap-6 md:gap-8">
					<div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
						<div className="shadow-sm order-first flex flex-col items-stretch rounded-lg bg-white ring-1 ring-black/5 lg:order-none lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3">
							<div className="block flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-12">
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
									<Button className="rounded-md border-primary bg-primary">Get a quote</Button>
									<Button variant="secondary" className="rounded-md">
										Call now
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
									src="https://media.istockphoto.com/id/2159632844/photo/commercial-office-cleaners.jpg?s=2048x2048&w=is&k=20&c=FPZ6FScyBo4_63JT0vwVrCUmN50X5PtkXI9a25WIQz4="
									alt=""
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

export default function Page() {
	return (
		<>
			<Navbar13 />
			<Hero />
		</>
	);
}
