import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { ProductDetailsItem } from "@/ui/molecules/ProductDetailsItem";
import { SimilarProductList } from "@/ui/organisms/SimilarProductList";
import { API_URL } from "@/api/constants";

export async function generateStaticParams() {
	const res = await fetch(`${API_URL}/products`);
	const products = (await res.json()) as { id: string; title: string }[];

	return products.map((product) => ({ productId: product.id }));
}

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `${product.name} | SHOP`,
		description: product.description,
		openGraph: {
			title: `${product.name} | SHOP`,
			description: product.description,
			images: [product.coverImage.src],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<>
			<ProductDetailsItem product={product} />

			<aside>
				<Suspense>
					<SimilarProductList />
				</Suspense>
			</aside>
		</>
	);
}
