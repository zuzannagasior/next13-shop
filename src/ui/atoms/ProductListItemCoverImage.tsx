import { type FC } from "react";
import NextImage from "next/image";

export type ProductListItemCoverImageProps = {
	src: string;
	alt: string;
};

export const ProductListItemCoverImage: FC<ProductListItemCoverImageProps> = ({ src, alt }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border border-magenta">
			<NextImage
				width={300}
				height={300}
				src={src}
				alt={alt}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
