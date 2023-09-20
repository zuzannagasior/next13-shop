import { type FC } from "react";
import { type ProductItemType } from "../types";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { ProductDetailsItemDescription } from "@/ui/molecules/ProductDetailsItemDescription";

export type ProductDetailsItemProps = {
	product: ProductItemType;
};

export const ProductDetailsItem: FC<ProductDetailsItemProps> = ({ product }) => {
	return (
		<article className="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<ProductListItemCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
			<div className="sm:px-8">
				<ProductDetailsItemDescription product={product} />
			</div>
		</article>
	);
};
