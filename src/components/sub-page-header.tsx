export default function SubPageHeader({
	title,
	description,
}: {
	title: string;
	description?: string;
}) {
	return (
		<section id="relume" className="px-[5%] pb-8 pt-6 md:pb-12 lg:pb-14 lg:pt-8">
			<div className="shadow-sm mx-auto flex max-w-screen-2xl items-center justify-center rounded-lg bg-white p-6 ring-1 ring-black/5 md:p-8 lg:p-12">
				<div className="mx-auto max-w-lg text-center">
					<h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">{title}</h1>
					<p className="md:text-md">{description}</p>
				</div>
			</div>
		</section>
	);
}
