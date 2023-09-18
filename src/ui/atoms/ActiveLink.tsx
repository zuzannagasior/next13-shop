"use client";

import Link, { type LinkProps } from "next/link";
import { type FC } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export type ActiveLinkProps = {
	children: React.ReactNode;
	href: LinkProps<string>["href"];
	className?: string;
	activeClassName?: string;
};

export const ActiveLink: FC<ActiveLinkProps> = ({ children, href, className, activeClassName }) => {
	const pathname = usePathname();
	const active = pathname === href;

	return (
		<Link href={href} className={clsx(className, active && activeClassName)}>
			{children}
		</Link>
	);
};
