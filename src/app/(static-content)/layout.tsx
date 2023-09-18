import { Footer } from "@/ui/organisms/Footer";

export default function StaticLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col text-sm">
			<main className="mx-auto my-8 max-w-3xl flex-grow px-8">{children}</main>
			<Footer />
		</div>
	);
}
