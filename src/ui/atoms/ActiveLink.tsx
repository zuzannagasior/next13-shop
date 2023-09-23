"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Route } from "next";

export type ActiveLinkProps<T extends string> = {
	children: React.ReactNode;
	href: Route<T>;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
};

export const ActiveLink = <T extends string>({
	children,
	href,
	className,
	activeClassName,
	exact = false,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const active = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link href={href} className={active ? activeClassName : className}>
			{children}
		</Link>
	);
};
