import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";
import "server-only";

export type NavProps<T extends string> = {
	items: { label: string; href: Route<T> }[];
};

export const Nav = <T extends string>({ items }: NavProps<T>) => {
	return (
		<nav>
			<ul className="flex gap-2 text-neutral-500">
				{items.map((item, index) => (
					<li key={index}>
						<ActiveLink
							href={item.href}
							className="font-regular cursor-pointer p-2 font-semibold tracking-wide transition-colors hover:text-magenta"
							activeClassName="text-magenta"
							exact={item.href === "/"}
						>
							{item.label}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
