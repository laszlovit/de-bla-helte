import { SanityLive } from "@/sanity/lib/live";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
	preload: true,
	adjustFontFallback: true,
});

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-outfit",
	display: "swap",
	preload: true,
	adjustFontFallback: true,
});

export const metadata: Metadata = {
	title: "De Blå Helte",
	description: "Serviceløsninger til privat- og erhvervskunder",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${outfit.variable} bg-lightGray antialiased`}>
				{children}
				<SanityLive />
			</body>
		</html>
	);
}
