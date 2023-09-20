import { type FC } from "react";
import Link from "next/link";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import { type ProductItemType } from "@/ui/types";
import "server-only";

export type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem: FC<ProductListItemProps> = ({ product }) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductListItemCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
