import { type ProductItemType } from "@/ui/types";
import { ProductList } from "@/ui/organisms/ProductList";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Product 1",
		price: 100,
		category: "Category 1",
		coverImage: {
			src: "https://picsum.photos/seed/1/300/300",
			alt: "Product 1",
		},
	},
	{
		id: "2",
		name: "Product 2",
		price: 200,
		category: "Category 2",
		coverImage: {
			src: "https://picsum.photos/seed/2/300/300",
			alt: "Product 2",
		},
	},
	{
		id: "3",
		name: "Product 3",
		price: 300,
		category: "Category 3",
		coverImage: {
			src: "https://picsum.photos/seed/3/300/300",
			alt: "Product 3",
		},
	},
	{
		id: "4",
		name: "Product 4",
		price: 400,
		category: "Category 4",
		coverImage: {
			src: "https://picsum.photos/seed/4/300/300",
			alt: "Product 4",
		},
	},
];

export default function Home() {
	return (
		<main>
			<section className="sm:py-17 mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
				<ProductList products={products} />
			</section>
		</main>
	);
}
