import "./globals.css";
import type { Metadata } from "next";
import { Merriweather, Merriweather_Sans } from "next/font/google";

const merriweather = Merriweather({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
	variable: "--font-merriweather",
	display: "swap",
});

const merriweatherSans = Merriweather_Sans({
	subsets: ["latin"],
	variable: "--font-merriweather-sans",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Next13 shop",
	description: "Shop made with Next.js 13",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${merriweather.variable} ${merriweatherSans.variable} font-sans`}>
				{children}
			</body>
		</html>
	);
}
