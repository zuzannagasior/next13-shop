import { getProductList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductPage() {
	const products = await getProductList({ take: 20 });

	return <ProductList products={products} />;
}
