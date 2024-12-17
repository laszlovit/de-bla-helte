import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#005EFA",
				secondary: "#121a1f",
				grayish: "#e4ebf0",
				blackPearl: "#20282c",
				lightGray: "#e4ebf0",
			},
			animation: {
				"infinite-scroll": "infinite-scroll 30s linear infinite",
			},
			maxWidth: {
				"screen-2xl": "1536px",
			},
			keyframes: {
				"infinite-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
			},
		},
	},
	plugins: [],
	presets: [require("@relume_io/relume-tailwind")],
};
export default config;
