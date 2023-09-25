import { type FC } from "react";
import Link from "next/link";
import { Circle } from "lucide-react";
import { Nav } from "../molecules/Nav";
import "server-only";

export const Header: FC = () => {
	return (
		<header>
			<div className="mx-auto flex max-w-7xl items-center justify-between p-5 px-12">
				<Link
					href="/"
					className="inline-flex cursor-pointer items-center font-serif text-lg font-bold"
				>
					<Circle className="mr-1 text-magenta" />
					SHOP
				</Link>
				<Nav
					items={[
						{ label: "Home", href: "/" },
						{ label: "All", href: "/products" },
					]}
				/>
			</div>
		</header>
	);
};
