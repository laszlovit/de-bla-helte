"use client";

import { image } from "@/sanity/lib/image";
import { Testimonial } from "@/sanity/types";
import { StarIcon } from "@heroicons/react/16/solid";
import type { CarouselApi } from "@relume_io/relume-ui";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import { useEffect, useState } from "react";

type Props = {
	heading: string;
	description: string;
	testimonials: Testimonial[];
};

export default function TestimonialCarousel({ heading, description, testimonials }: Props) {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}
		setCurrent(api.selectedScrollSnap() + 1);
		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<section id="relume" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container">
				<div className="rb-12 mb-12 md:mb-18 lg:mb-20">
					<h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
						{heading}
					</h2>
					<p className="md:text-md">{description}</p>
				</div>
				{/* for all available options: https://www.embla-carousel.com/api/options/ */}
				<Carousel
					setApi={setApi}
					opts={{
						loop: true,
						align: "start",
					}}
				>
					<CarouselContent className="ml-0">
						{testimonials.map((testimonial, index) => (
							<CarouselItem
								key={index}
								className="basis-[95%] pl-0 pr-6 sm:basis-[80%] md:basis-1/2 md:pr-8 lg:basis-1/3"
							>
								<TestimonialCard testimonial={testimonial} />
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="rt-8 mt-8 flex items-center justify-between">
						<div className="mt-5 flex w-full items-start justify-start">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => api?.scrollTo(index)}
									className={clsx("mx-[3px] inline-block size-2 rounded-full", {
										"bg-black": current === index + 1,
										"bg-neutral-light": current !== index + 1,
									})}
								/>
							))}
						</div>
						<div className="flex items-end justify-end gap-2 md:gap-4">
							<CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
							<CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
						</div>
					</div>
				</Carousel>
			</div>
		</section>
	);
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
	return (
		<div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8">
			<div className="mb-5 flex md:mb-6">
				<StarIcon className="size-6" />
				<StarIcon className="size-6" />
				<StarIcon className="size-6" />
				<StarIcon className="size-6" />
				<StarIcon className="size-6" />
			</div>
			<blockquote className="md:text-md">{testimonial.content}</blockquote>
			<div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
				<div>
					{testimonial.logo && (
						<img
							src={image(testimonial.logo).url()}
							alt=""
							className="size-12 min-h-12 min-w-12 rounded-full object-cover"
						/>
					)}
				</div>
				<div>
					<p className="font-semibold">{testimonial.name}</p>
					<p>
						<span>{testimonial.role}</span>
					</p>
				</div>
			</div>
		</div>
	);
};
