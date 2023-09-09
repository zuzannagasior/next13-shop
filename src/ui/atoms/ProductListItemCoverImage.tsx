import { type FC } from "react";

export type ProductListItemCoverImageProps = {
	src: string;
	alt: string;
};

export const ProductListItemCoverImage: FC<ProductListItemCoverImageProps> = ({ src, alt }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<img
				width={300}
				height={300}
				src={src}
				alt={alt}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
