"use client";

import { image } from "@/sanity/lib/image";
import { ALL_TESTIMONIALS_QUERYResult } from "@/sanity/types";
import type { CarouselApi } from "@relume_io/relume-ui";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@relume_io/relume-ui";
import Fade from "embla-carousel-fade";
import React, { useEffect, useState } from "react";

type ImageProps = {
	src: string;
	alt?: string;
};

type Testimonial = {
	quote: string;
	logo: ImageProps;
	avatar: ImageProps;
	name: string;
	position: string;
	companyName: string;
};

type Props = {
	testimonials: Testimonial[];
};

export type HomeTestimonialsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export default function HomeTestimonials({
	testimonials,
}: {
	testimonials: ALL_TESTIMONIALS_QUERYResult;
}) {
	const [api, setApi] = useState<CarouselApi>();

	useEffect(() => {
		if (!api) {
			return;
		}
	}, [api]);

	return (
		<div className="h-full p-6 md:p-8 lg:p-20">
			{/* for all available options: https://www.embla-carousel.com/api/options/ */}
			<Carousel
				setApi={setApi}
				opts={{
					loop: true,
					align: "start",
				}}
				plugins={[Fade()]}
				className="h-full overflow-hidden"
			>
				<div className="relative h-full [&>div]:h-full">
					<CarouselContent className="ml-0 h-full md:mx-3">
						{testimonials.map((testimonial, index) => (
							<CarouselItem key={index} className="h-full pl-0 md:basis-full">
								<div className="mx-auto flex h-full w-full max-w-lg flex-col">
									<div className="mb-6 md:mb-8">
										{testimonial.logo && (
											<img
												src={image(testimonial.logo).url()}
												alt={testimonial.logo?.alt}
												className="max-h-12"
											/>
										)}
									</div>
									<blockquote className="text-xl font-bold md:text-2xl">
										&quot;{testimonial.content}&quot;
									</blockquote>
									<div className="mt-8 flex flex-row justify-between md:mt-auto">
										<div className="flex flex-col">
											<p className="font-semibold md:text-md">{testimonial.name}</p>
											<p className="md:text-md">
												<span>{testimonial.role}</span>
											</p>
										</div>
										<div className="l flex items-end justify-end gap-2 md:gap-4">
											<CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0 rounded-md border-none bg-lightGray" />
											<CarouselNext className="static right-0 top-0 size-12 -translate-y-0 rounded-md border-none bg-lightGray" />
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</div>
			</Carousel>
		</div>
	);
}
