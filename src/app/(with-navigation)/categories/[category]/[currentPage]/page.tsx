import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CategoryProductsPage({
	params,
}: {
	params: { category: string; currentPage: string };
}) {
	const products = await getProductsByCategorySlug(params.category);

	return (
		<>
			<h1>Category: {params.category}</h1>
			<ProductList products={products} />
		</>
	);
}
