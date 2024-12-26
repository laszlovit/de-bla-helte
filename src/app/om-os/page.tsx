import { Footer } from "@/components/footer";
import Navbar from "@/components/navigation-bar";
import SubPageHeader from "@/components/sub-page-header";

export default function Page() {
	return (
		<>
			<Navbar />
			<SubPageHeader title="Om os" />
			<Footer />
		</>
	);
}
