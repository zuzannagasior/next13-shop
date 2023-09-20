import { type FC } from "react";
import { type ProductItemType } from "../types";
import { formatPrice } from "@/utils";
import { ProductLongDescription } from "@/ui/atoms/ProductLongDescription";
import "server-only";

export type ProductDetailsItemDescriptionProps = {
	product: ProductItemType;
};

export const ProductDetailsItemDescription: FC<ProductDetailsItemDescriptionProps> = ({
	product: { name, category, price, longDescription },
}) => {
	return (
		<div className="space-y-2">
			<h1 className="text-4xl font-semibold">{name}</h1>
			<div className="text-xl text-gray-500">{category}</div>
			<div className="py-2 text-xl font-medium">{formatPrice(price / 100)}</div>
			<ProductLongDescription text={longDescription} />
		</div>
	);
};
