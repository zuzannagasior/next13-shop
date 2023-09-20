import { API_URL } from "./constants";
import { type ProductItemType } from "@/ui/types";

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
	const res = await fetch(
		`${API_URL}/products?take=${take}${page ? `&offset=${(page - 1) * take}` : ""}`,
	);

	const productsResponse = (await res.json()) as ProductResponseItem[];

	const products = productsResponse.map(productResponseItemToProductItemType);

	return products;
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
