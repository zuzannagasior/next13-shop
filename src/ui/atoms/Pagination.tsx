import clsx from "clsx";
import { ActiveLink, type ActiveLinkProps } from "@/ui/atoms/ActiveLink";

export type PaginationProps<T extends string> = {
	totalPages: number;
	hrefBuilder: (page: number) => ActiveLinkProps<T>["href"];
};

const sharedClassName = "text-md p-2 font-semibold";

export const Pagination = <T extends string>({ totalPages, hrefBuilder }: PaginationProps<T>) => {
	return (
		<nav className="mt-8" aria-label="Navigation Pagination">
			<ul className="flex justify-center space-x-2 text-neutral-500">
				{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
					<li key={page}>
						<ActiveLink
							href={hrefBuilder(page)}
							className={sharedClassName}
							activeClassName={clsx(sharedClassName, "text-magenta")}
							exact
						>
							{page}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
