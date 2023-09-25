import { type FC } from "react";
import { formatPrice } from "@/utils";
import { type ProductListItemFragment } from "@/gql/graphql";

export type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription: FC<ProductListItemDescriptionProps> = ({
	product: { name, categories, price },
}) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-slate-900">{name}</h3>
				{categories[0] && (
					<p className="text-sm text-gray-500">
						<span className="sr-only">Kategoria:</span> {categories[0].name}
					</p>
				)}
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span> {formatPrice(price / 100)}
			</p>
		</div>
	);
};
