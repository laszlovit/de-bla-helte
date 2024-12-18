import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import SubPageHeader from "@/components/sub-page-header";

export default function Page() {
	return (
		<>
			<Navbar />
			<SubPageHeader title="Kontakt" />
			<Footer />
		</>
	);
}
