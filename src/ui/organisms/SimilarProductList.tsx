import { type FC } from "react";
import { ProductList } from "./ProductList";
import { getProductList } from "@/api/products";

export const SimilarProductList: FC = async () => {
	const products = await getProductList();
	return (
		<>
			<h2 className="mb-2 text-lg font-semibold">Similar products</h2>
			<ProductList products={products.slice(-4)} />
		</>
	);
};
