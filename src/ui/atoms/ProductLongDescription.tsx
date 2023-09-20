import { type FC } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

export type ProductLongDescriptionProps = {
	text: string;
};

export const ProductLongDescription: FC<ProductLongDescriptionProps> = ({ text }) => {
	return (
		<p className="prose-sm">
			<MDXRemote source={text} />
		</p>
	);
};
