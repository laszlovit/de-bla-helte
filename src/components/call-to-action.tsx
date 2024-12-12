import { Button, ButtonProps } from "@relume_io/relume-ui";

type Props = {
	heading: string;
	description: string;
	buttons: ButtonProps[];
};

export default function CallToAction({ heading, description, buttons }: Props) {
	return (
		<section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container max-w-lg text-center">
				<h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
				<p className="md:text-md">{description}</p>
				<div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
					{buttons.map((button, index) => (
						<Button key={index} {...button}>
							{button.title}
						</Button>
					))}
				</div>
			</div>
		</section>
	);
}
