import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next13 shop",
	description: "Shop made with Next.js 13",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={clsx(jost.className)}>{children}</body>
		</html>
	);
}
