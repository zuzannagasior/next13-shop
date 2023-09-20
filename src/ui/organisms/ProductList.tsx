import { type FC } from "react";
import { type ProductItemType } from "@/ui/types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import "server-only";

export type ProductListProps = {
	products: ProductItemType[];
};

export const ProductList: FC<ProductListProps> = ({ products }) => {
	return (
		<ul
			className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
