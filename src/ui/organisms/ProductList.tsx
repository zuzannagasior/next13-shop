import { type FC } from "react";
import { ProductListItem } from "@/ui/molecules/ProductListItem";
import "server-only";
import { type ProductListItemFragment } from "@/gql/graphql";

export type ProductListProps = {
	products: ProductListItemFragment[];
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
