export default function ProductLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="sm:py-17 mx-auto max-w-md space-y-8 p-12 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
			{children}
		</section>
	);
}
