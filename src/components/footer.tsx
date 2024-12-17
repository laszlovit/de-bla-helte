import {
	BiLogoFacebookCircle,
	BiLogoInstagram,
	BiLogoLinkedinSquare,
	BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

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
							<a href={logo.url}>
								<img src={logo.src} alt={logo.alt} className="inline-block" />
							</a>
						</div>
						<div className="rb-6 mb-6 md:mb-8">
							<div>
								<p className="mb-1 text-sm font-semibold">{address.label}</p>
								<p className="mb-5 text-sm md:mb-6">{address.value}</p>
							</div>
							<div>
								<p className="mb-1 text-sm font-semibold">{contact.label}</p>
								<p className="flex flex-col text-sm underline decoration-black underline-offset-1 md:mb-6">
									<a href={`tel:${contact.phone}`}>{contact.phone}</a>
									<a href={`mailto:${contact.email}`}>{contact.email}</a>
								</p>
							</div>
						</div>
						<div className="grid grid-flow-col grid-cols-[max-content] items-start justify-start gap-x-3">
							{socialMediaLinks.map((link, index) => (
								<a key={index} href={link.url}>
									{link.icon}
								</a>
							))}
						</div>
					</div>
					<div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 sm:grid-cols-2 md:gap-x-8 md:gap-y-4">
						{columnLinks.map((column, index) => (
							<ul key={index}>
								{column.links.map((link, linkIndex) => (
									<li key={linkIndex} className="py-2 text-sm font-semibold">
										<a href={link.url}>{link.title}</a>
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
									<a href={link.url}>{link.title}</a>
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
		src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
		alt: "Logo image",
	},
	address: {
		label: "Address:",
		value: "Forumlundvej 15, 6715 Esbjerg N.",
	},
	contact: {
		label: "Kontakt:",
		phone: "+45 70 60 46 15",
		email: "support@blaahelte.com",
	},
	columnLinks: [
		{
			links: [
				{ title: "Link One", url: "#" },
				{ title: "Link Two", url: "#" },
				{ title: "Link Three", url: "#" },
				{ title: "Link Four", url: "#" },
				{ title: "Link Five", url: "#" },
			],
		},
		{
			links: [
				{ title: "Link Six", url: "#" },
				{ title: "Link Seven", url: "#" },
				{ title: "Link Eight", url: "#" },
				{ title: "Link Nine", url: "#" },
				{ title: "Link Ten", url: "#" },
			],
		},
	],
	socialMediaLinks: [
		{ url: "#", icon: <BiLogoFacebookCircle className="size-6" /> },
		{ url: "#", icon: <BiLogoInstagram className="size-6" /> },
		{ url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
		{ url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
		{ url: "#", icon: <BiLogoYoutube className="size-6" /> },
	],
	footerText: "© 2025 De Blå Helte. All rights reserved.",
	footerLinks: [
		{ title: "Privacy Policy", url: "#" },
		{ title: "Terms of Service", url: "#" },
		{ title: "Cookies Settings", url: "#" },
	],
};
