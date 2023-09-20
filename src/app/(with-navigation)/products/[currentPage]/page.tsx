import { Suspense } from "react";
import { PaginatedProductList } from "@/ui/organisms/PaginatedProductList";

export default async function ProductPage({ params }: { params: { currentPage: string } }) {
	return (
		<Suspense fallback="loading">
			<PaginatedProductList take={20} page={Number(params.currentPage)} />
		</Suspense>
	);
}
