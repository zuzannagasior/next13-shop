import { getProductList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const products = await getProductList({ take: 4 });

	return <ProductList products={products} />;
}
