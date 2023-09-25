import { notFound } from "next/navigation";
import { executeGraphql } from "./graphql";
import {
	ProductGetByIdDocument,
	type ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";

export const getProductList = async ({ take, page }: { take: number; page?: number }) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument);

	if (!graphqlResponse.products) {
		throw notFound();
	}

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, { slug });

	const products = graphqlResponse.categories[0]?.products ?? [];

	if (!products) {
		throw notFound();
	}

	return products;
};

export const getProductById = async (id: ProductListItemFragment["id"]) => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id,
	});

	if (!product) {
		throw notFound();
	}

	return product;
};
