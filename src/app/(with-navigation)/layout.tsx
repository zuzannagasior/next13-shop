import { Footer } from "@/ui/organisms/Footer";
import { Header } from "@/ui/organisms/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col text-sm">
			<Header />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
}
