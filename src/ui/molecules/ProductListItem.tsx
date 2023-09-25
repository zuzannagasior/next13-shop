import { type FC } from "react";
import Link from "next/link";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductListItemCoverImage } from "@/ui/atoms/ProductListItemCoverImage";
import "server-only";
import { type ProductListItemFragment } from "@/gql/graphql";

export type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem: FC<ProductListItemProps> = ({ product }) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					{product.images[0] && (
						<ProductListItemCoverImage src={product.images[0].url} alt={product.name} />
					)}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
