import { type FC } from "react";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductDetailsItemDescription } from "@/ui/molecules/ProductDetailsItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

export type ProductDetailsItemProps = {
	product: ProductListItemFragment;
};

export const ProductDetailsItem: FC<ProductDetailsItemProps> = ({ product }) => {
	return (
		<article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{product.images[0] && (
				<ProductListItemCoverImage src={product.images[0].url} alt={product.name} />
			)}
			<div className="sm:px-8">
				<ProductDetailsItemDescription product={product} />
			</div>
		</article>
	);
};
