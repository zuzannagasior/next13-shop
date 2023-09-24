import { API_URL } from "./constants";
import { executeGraphql } from "./graphql";
import { type ProductItemType } from "@/ui/types";
import { ProductsGetListDocument } from "@/gql/graphql";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProductList = async ({
	take,
	page,
}: {
	take: number;
	page?: number;
}): Promise<ProductItemType[]> => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument);

	return graphqlResponse.products.map((p) => {
		return {
			id: p.id,
			name: p.name,
			price: p.price,
			category: p.categories[0]?.name ?? "",
			coverImage: p.images[0] && {
				src: p.images[0].url,
				alt: p.name,
			},
			description: p.description,
			longDescription: p.description,
		};
	});
};

export const getProductById = async (id: ProductResponseItem["id"]): Promise<ProductItemType> => {
	const res = await fetch(`${API_URL}/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;

	return productResponseItemToProductItemType(productResponse);
};

const productResponseItemToProductItemType = (
	productResponse: ProductResponseItem,
): ProductItemType => ({
	id: productResponse.id,
	name: productResponse.title,
	price: productResponse.price,
	category: productResponse.category,
	coverImage: {
		src: productResponse.image,
		alt: productResponse.title,
	},
	description: productResponse.description,
	longDescription: productResponse.longDescription,
});
