import { getProductList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductPage() {
	const products = await getProductList();

	return <ProductList products={products} />;
}
