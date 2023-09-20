import { Footer } from "@/ui/organisms/Footer";
import { Header } from "@/ui/organisms/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col text-sm">
			<Header />
			<main className="sm:py-17 mx-auto max-w-md flex-grow p-12 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
				{children}
			</main>
			<Footer />
		</div>
	);
}
