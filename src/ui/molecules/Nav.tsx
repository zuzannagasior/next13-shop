import { type FC } from "react";
import { type LinkProps } from "next/link";
import { ActiveLink } from "../atoms/ActiveLink";
import "server-only";

export type NavProps = {
	items: { label: string; href: LinkProps<string>["href"] }[];
};

export const Nav: FC<NavProps> = ({ items }) => {
	return (
		<nav>
			<ul className="flex gap-2 text-neutral-500">
				{items.map((item, index) => (
					<li key={index}>
						<ActiveLink
							href={item.href}
							className="font-regular cursor-pointer p-2 font-semibold tracking-wide transition-colors hover:text-magenta"
							activeClassName="text-magenta"
						>
							{item.label}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
