export type ProductItemType = {
	id: string;
	name: string;
	price: number;
	category: string;
	coverImage: {
		src: string;
		alt: string;
	};
	description: string;
	longDescription: string;
};
