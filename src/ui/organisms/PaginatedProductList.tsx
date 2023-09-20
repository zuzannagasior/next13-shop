import { type FC } from "react";
import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/atoms/Pagination";
import { getProductList } from "@/api/products";

export type PaginatedProductListProps = {
	take: number;
	page: number;
};

export const PaginatedProductList: FC<PaginatedProductListProps> = async ({ take, page }) => {
	const products = await getProductList({ take, page });

	return (
		<div className="space-y-8">
			<ProductList products={products} />
			<Pagination hrefBuilder={(page) => `/products/${page}`} totalPages={6} />
		</div>
	);
};
