import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductList } from "@/api/products";
import { ProductDetailsItem } from "@/ui/molecules/ProductDetailsItem";
import { SimilarProductList } from "@/ui/organisms/SimilarProductList";

export async function generateStaticParams() {
	const products = await getProductList({ take: 10 });

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
			// TODO: fix types
			// images: [product.images[0]?.url],
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
