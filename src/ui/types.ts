export type ProductItemType = {
	id: string;
	name: string;
	price: number;
	category: string;
	description: string;
	longDescription: string;
	coverImage?: {
		src: string;
		alt: string;
	};
};
