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
import { useEffect, useState } from "react";

export default function TestimonialsCarousel({
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
		<section id="relume" className="overflow-hidden bg-grayish px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container">
				<Carousel
					setApi={setApi}
					opts={{
						loop: false,
						align: "start",
					}}
					className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20"
				>
					<div className="flex flex-col justify-between">
						<p className="mb-3 font-semibold text-primary md:mb-4">Testimonials</p>
						<h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
							What our clients say
						</h2>
						<p className="md:text-md">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
							eros elementum tristique.
						</p>
						<div className="mt-6 flex w-full items-start justify-between md:top-auto md:mt-8 md:items-end">
							<div className="flex items-end justify-end gap-2 md:gap-4">
								<CarouselPrevious className="static size-12 -translate-y-0 rounded-none" />
								<CarouselNext className="static size-12 -translate-y-0 rounded-none" />
							</div>
						</div>
					</div>
					<div className="overflow-hidden md:pt-0">
						<CarouselContent className="ml-0">
							{testimonials.map((testimonial, index) => (
								<CarouselItem key={index} className="bg-white">
									<div className="pl-0">
										<div className="flex flex-col items-start p-6 md:p-8">
											{testimonial.logo && (
												<div className="mb-12">
													<img
														src={image(testimonial.logo).url()}
														alt={testimonial.logo.alt}
														className="max-h-10"
													/>
												</div>
											)}
											<blockquote className="md:text-md">"{testimonial.content}"</blockquote>
											<div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
												<div>
													<p className="font-semibold">{testimonial.name}</p>
													<p>
														<span>{testimonial.role}</span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</div>
				</Carousel>
			</div>
		</section>
	);
}
