import { type FC } from "react";
import { formatPrice } from "@/utils";
import { ProductLongDescription } from "@/ui/atoms/ProductLongDescription";
import "server-only";
import { type ProductListItemFragment } from "@/gql/graphql";

export type ProductDetailsItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductDetailsItemDescription: FC<ProductDetailsItemDescriptionProps> = ({
	product: { name, categories, price, description },
}) => {
	return (
		<div className="space-y-2">
			<h1 className="text-4xl font-semibold">{name}</h1>
			{categories[0] && <div className="text-xl text-gray-500">{categories[0].name}</div>}
			<div className="py-2 text-xl font-medium">{formatPrice(price / 100)}</div>
			{/* TODO: change to normal description */}
			<ProductLongDescription text={description} />
		</div>
	);
};
