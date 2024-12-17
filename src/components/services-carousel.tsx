"use client";

import { image } from "@/sanity/lib/image";
import { ALL_SERVICES_QUERYResult } from "@/sanity/types";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import type { CarouselApi } from "@relume_io/relume-ui";
import {
	Button,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@relume_io/relume-ui";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServicesCarousel({
	heading,
	description,
	services,
}: {
	heading: string;
	description: string;
	services: ALL_SERVICES_QUERYResult;
}) {
	const [api, setApi] = useState<CarouselApi>();

	useEffect(() => {
		if (!api) {
			return;
		}
	}, [api]);

	return (
		<section
			id="relume"
			className="overflow-hidden bg-secondary px-[5%] py-16 text-white md:py-24 lg:py-28"
		>
			<div className="container">
				<div className="rb-12 mb-12 ml-auto max-w-sm text-right md:mb-18 lg:mb-20">
					<h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
						{heading}
					</h2>
					<p className="md:text-md">{description}</p>
				</div>
				<Carousel
					setApi={setApi}
					opts={{
						loop: false,
						align: "start",
					}}
				>
					<CarouselContent className="ml-0">
						{services.map((service, index) => (
							<CarouselItem
								key={index}
								className="group relative basis-[95%] pl-0 pr-6 sm:basis-[80%] md:basis-[70%] md:pr-8 xl:basis-1/2"
							>
								<div className="grid-service-item group grid h-full overflow-hidden bg-blackPearl">
									<div className="z-10 flex items-center justify-between p-10 md:flex-col md:items-start">
										<div>
											<h3 className="text-2xl font-bold transition-all duration-500 group-hover:text-primary lg:text-3xl">
												<Link href={`/services/${service.slug}`}>
													{service.title}
													<span className="absolute inset-0"></span>
												</Link>
											</h3>
											<p className="mt-2 text-lightGray md:line-clamp-3">{service.excerpt}</p>
										</div>
										<Button size="icon" className="size-12 border-none bg-primary md:mt-6 lg:mt-0">
											<ArrowUpRightIcon className="h-5 w-8 transition duration-500 group-hover:rotate-45" />
										</Button>
									</div>
									<div className="clip-left relative h-full">
										{service.mainImage && (
											<img
												src={image(service.mainImage).format("webp").url()}
												alt=""
												className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
												loading="lazy"
											/>
										)}
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="rt-8 mt-20 flex items-center justify-between md:flex-row">
						<h2 className="hidden text-xl font-semibold md:block md:text-2xl">
							Discover our full range of services
						</h2>
						<div className="hidden h-0.5 w-48 bg-blackPearl lg:block"></div>
						<Button variant="secondary" iconRight={<ArrowLongRightIcon className="size-5" />}>
							View all services
						</Button>
						<div className="flex items-end justify-end gap-2 md:gap-4">
							<CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0 rounded-none" />
							<CarouselNext className="static right-0 top-0 size-12 -translate-y-0 rounded-none" />
						</div>
					</div>
				</Carousel>
			</div>
		</section>
	);
}
