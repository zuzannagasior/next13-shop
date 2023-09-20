import { type Route } from "next";
import clsx from "clsx";
import { ActiveLink } from "../atoms/ActiveLink";
import "server-only";

export type NavProps<T extends string> = {
	items: { label: string; href: Route<T> }[];
};

const sharedClassName = "font-semibold tracking-wide border-b-2 transition-colors py-2 px-1";

export const Nav = <T extends string>({ items }: NavProps<T>) => {
	return (
		<nav>
			<ul className="flex gap-2 text-neutral-500">
				{items.map((item, index) => (
					<li key={index}>
						<ActiveLink
							href={item.href}
							className={clsx(sharedClassName, "border-transparent hover:text-magenta")}
							activeClassName={clsx(sharedClassName, "font-semibold text-magenta border-magenta")}
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
