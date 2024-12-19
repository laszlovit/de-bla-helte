import Link from "next/link";
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";

type ImageProps = {
	url?: string;
	src: string;
	alt?: string;
};

type Links = {
	title: string;
	url: string;
};

type SocialMediaLinks = {
	url: string;
	icon: React.ReactNode;
	ariaLabel: string;
};

type ColumnLinks = {
	links: Links[];
};

type Address = {
	label: string;
	value: string;
};

type Contact = {
	label: string;
	phone: string;
	email: string;
	cvr: string;
};

type Props = {
	logo: ImageProps;
	address: Address;
	contact: Contact;
	columnLinks: ColumnLinks[];
	socialMediaLinks: SocialMediaLinks[];
	footerText?: string;
	footerLinks: Links[];
};

export type FooterProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer = (props: FooterProps) => {
	const { logo, address, contact, columnLinks, socialMediaLinks, footerText, footerLinks } = {
		...FooterDefaults,
		...props,
	};
	return (
		<footer className="px-[5%] py-6 md:py-9 lg:py-10">
			<div className="shadow-sm mx-auto max-w-screen-2xl rounded-lg bg-white ring-1 ring-black/5">
				<div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 p-8 md:gap-y-16 md:p-12 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4">
					<div>
						<div className="rb-6 mb-6 md:mb-8">
							<Link href={logo.url || "/"}>
								<img src={logo.src} alt={logo.alt} className="inline-block h-6" />
							</Link>
						</div>
						<div className="rb-6 mb-6 md:mb-8">
							<div>
								<p className="mb-1 text-sm font-semibold">{address.label}</p>
								<p className="mb-5 text-sm md:mb-6">{address.value}</p>
							</div>
							<div>
								<p className="mb-1 text-sm font-semibold">{contact.label}</p>
								<div className="flex flex-col gap-y-1 text-sm md:mb-6">
									<a
										href={`tel:${contact.phone}`}
										className="underline decoration-black underline-offset-1 hover:text-primary hover:decoration-primary"
									>
										{contact.phone}
									</a>
									<a
										href={`mailto:${contact.email}`}
										className="underline decoration-black underline-offset-1 hover:text-primary hover:decoration-primary"
									>
										{contact.email}
									</a>
									<p>{contact.cvr}</p>
								</div>
							</div>
						</div>
						<div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
							{socialMediaLinks.map((link, index) => (
								<a key={index} href={link.url} aria-label={link.ariaLabel}>
									{link.icon}
								</a>
							))}
						</div>
					</div>
					<div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 sm:grid-cols-2 md:gap-x-8 md:gap-y-4">
						{columnLinks.map((column, index) => (
							<ul key={index}>
								{column.links.map((link, linkIndex) => (
									<li key={linkIndex} className="py-2 text-sm font-semibold hover:text-primary">
										<Link href={link.url}>{link.title}</Link>
									</li>
								))}
							</ul>
						))}
					</div>
					<div className="col-span-2 flex w-full flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
						<p className="mt-8 md:mt-0">{footerText}</p>
						<ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
							{footerLinks.map((link, index) => (
								<li key={index} className="underline">
									<Link href={link.url}>{link.title}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export const FooterDefaults: Props = {
	logo: {
		url: "#",
		src: "/de-bla-helte-logo.svg",
		alt: "Logo image",
	},
	address: {
		label: "Adresse:",
		value: "Forumlundvej 15, 6715 Esbjerg N.",
	},
	contact: {
		label: "Kontakt:",
		phone: "+45 70 60 46 15",
		email: "support@blaahelte.com",
		cvr: "CVR: 43755315",
	},
	columnLinks: [
		{
			links: [
				{ title: "Vinduespolering", url: "/services/vinduespolering" },
				{ title: "Solcellevask", url: "/services/solcellevask" },
				{ title: "Fliserens", url: "/services/fliserens" },
				{ title: "Algebehandeling", url: "/services/algbehandling" },
				{ title: "Rens of tagrender", url: "/services/rens-of-tagrender" },
				{ title: "Erhvervsrengøring", url: "/services/erhvervsrengoring" },
			],
		},
		{
			links: [
				{ title: "Services", url: "/services" },
				{ title: "Om os", url: "/om-os" },
				{ title: "Galleri", url: "/galleri" },
				{ title: "Kontakt", url: "/kontakt" },
				{ title: "Få et tilbud", url: "/fa-et-tilbud" },
			],
		},
	],
	socialMediaLinks: [
		{
			url: "https://www.facebook.com/deblaahelte",
			icon: <BiLogoFacebookCircle className="size-6 hover:text-primary" />,
			ariaLabel: "Facebook",
		},
		{
			url: "https://www.instagram.com/deblaahelte",
			icon: <BiLogoInstagram className="size-6 hover:text-primary" />,
			ariaLabel: "Instagram",
		},
		{
			url: "https://www.linkedin.com/company/de-bl%C3%A5-helte-v-cbl-service-aps/",
			icon: <BiLogoLinkedinSquare className="size-6 hover:text-primary" />,
			ariaLabel: "LinkedIn",
		},
	],
	footerText: "© 2025 De Blå Helte. All rights reserved.",
	footerLinks: [
		{ title: "Privatlivspolitik", url: "#" },
		{ title: "Handelsbetingelser", url: "#" },
		{ title: "Cookiepolitik", url: "#" },
	],
};
