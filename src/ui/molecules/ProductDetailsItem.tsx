import { type FC } from "react";
import { type ProductItemType } from "../types";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";

export type ProductDetailsItemProps = {
	product: ProductItemType;
};

export const ProductDetailsItem: FC<ProductDetailsItemProps> = ({ product }) => {
	return (
		<article>
			<ProductListItemCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
			<ProductListItemDescription product={product} />
		</article>
	);
};
