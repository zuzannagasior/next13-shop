import Link from "next/link";
import { type FC } from "react";
import "server-only";

export const Footer: FC = () => {
	return (
		<footer className="border-t border-t-slate-200 bg-slate-50 text-neutral-500">
			<div className="mx-auto flex max-w-6xl justify-between p-5 px-8">
				<p>@2023</p>
				<div>
					<Link href="/terms" className="underline">
						Terms
					</Link>{" "}
					&{" "}
					<Link href="/privacy-policy" className="underline">
						Privacy Policy
					</Link>
				</div>
			</div>
		</footer>
	);
};
