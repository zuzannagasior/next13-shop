import { type FC } from "react";
import Link from "next/link";
import { Nav } from "../molecules/Nav";
import { CircleIcon } from "@/icons/CircleIcon";
import "server-only";

export const Header: FC = () => {
	return (
		<header>
			<div className="mx-auto flex max-w-7xl items-center justify-between p-5 px-12">
				<Link href="/" className="inline-flex cursor-pointer items-center text-lg font-bold">
					<CircleIcon className="mr-1 fill-magenta" />
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
