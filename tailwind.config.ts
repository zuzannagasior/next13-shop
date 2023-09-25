import { type Config } from "tailwindcss";

const config: Config = {
	content: ["./src/ui/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-merriweather-sans)"],
				serif: ["var(--font-merriweather)"],
			},
			colors: {
				magenta: "#bb2749",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};

export default config;
