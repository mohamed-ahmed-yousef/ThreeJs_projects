"use client";

import Link from 'next/link'
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function LargeScreenNavbar() {
	const currentPath = usePathname();
	return (	
		<header className="flex px-5 gap-x-5 items-center bg-zinc-950   text-slate-300 h-[70px]">
						<Link
							href="/"
							className={cn(
								"hover:underline sm:py-6",
								currentPath === "/" && "font-bold",
							)}
						>
                            Home
						</Link>
						<Link
							href="/step-one"
							className={cn(
								"hover:underline sm:py-6",
								currentPath === "/step-one" && "font-bold",
							)}
						>
                            Step one
						</Link>
						<Link
							href="/step-two"
							className={cn(
								"hover:underline sm:py-6",
								currentPath === "/step-two" && "font-bold",
							)}
						>
                            Step two
						</Link>
		</header>
	);
}