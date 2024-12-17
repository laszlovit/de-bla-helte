import { Button } from "@relume_io/relume-ui";

export default function CallToAction() {
	return (
		<section id="relume" className="px-[5%] pb-8 md:pb-12 lg:pb-14">
			<div className="max-w-screen-2xl mx-auto rounded-lg bg-primary">
				<div className="grid grid-cols-1 items-start justify-start gap-6 rounded-lg p-8 md:grid-cols-[1fr_max-content] md:items-center md:justify-between md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:p-12">
					<div className="md:mr-12 lg:mr-0">
						<div className="w-full max-w-lg">
							<h3 className="mb-3 text-4xl font-bold leading-[1.2] text-white md:mb-4 md:text-5xl lg:text-6xl">
								Ready to secure your future?
							</h3>
							<p className="text-white md:text-md">
								Whether you need life, health, or auto insurance, we’ve got you covered with
								reliable, affordable plans tailored to your needs.
							</p>
						</div>
					</div>
					<div className="flex w-full flex-wrap items-center justify-start gap-4 md:w-auto md:justify-end">
						<Button className="rounded-md border-white bg-white text-gray-900">Get a quote</Button>
						<Button className="rounded-md border-white bg-transparent">Call now</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
