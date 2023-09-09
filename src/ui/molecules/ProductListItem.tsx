import { type FC } from "react";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { type ProductItemType } from "@/ui/types";

export type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem: FC<ProductListItemProps> = ({ product }) => {
	return (
		<li>
			<article>
				<ProductListItemCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
