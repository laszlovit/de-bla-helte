import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},
	experimental: {
		optimizePackageImports: ["@relume_io/relume-ui", "@relume_io/relume-tailwind"],
	},
};

export default nextConfig;
