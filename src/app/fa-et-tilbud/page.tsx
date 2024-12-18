import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { QuoteForm } from "@/components/quote-form";

function Header() {
	return (
		<section id="relume" className="px-[5%] pb-8 pt-6 md:pb-12 lg:pb-14 lg:pt-8">
			<div className="shadow-sm mx-auto flex max-w-screen-2xl items-center justify-center rounded-lg bg-white p-6 ring-1 ring-black/5 md:p-8 lg:p-12">
				<div className="mx-auto max-w-lg text-center">
					<h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">Få et tilbud</h1>
				</div>
			</div>
		</section>
	);
}

export default function Page() {
	return (
		<>
			<Navbar />
			<Header />
			<QuoteForm />
			<Footer />
		</>
	);
}
