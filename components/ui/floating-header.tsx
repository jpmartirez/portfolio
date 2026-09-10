"use client";

import React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetDescription,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: "About Me",
			href: "/",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Certifications",
			href: "/certifications",
		},
	];

	return (
		<header
			className={cn(
				"sticky top-5 z-50",
				"mx-auto w-full max-w-3xl rounded-lg border border-white/10 shadow-lg shadow-black/30",
				"bg-neutral-900/80 supports-backdrop-filter:bg-neutral-900/70 backdrop-blur-lg",
				"text-neutral-100",
			)}
		>
			<nav className="mx-auto flex items-center justify-between p-1.5">
				<Link
					href="/"
					className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100 hover:bg-white/10"
				>
					<p className="text-base font-bold text-white">JP</p>
				</Link>
				<div className="hidden items-center gap-1 lg:flex">
					{links.map((link) => (
						<Link
							key={link.label}
							className={cn(
								buttonVariants({ variant: "ghost", size: "sm" }),
								"text-neutral-300 hover:text-white hover:bg-white/10",
							)}
							href={link.href}
						>
							{link.label}
						</Link>
					))}
				</div>
				<div className="flex items-center gap-2">
					<Button
						size="sm"
						className="bg-white text-neutral-900 hover:bg-neutral-200 font-semibold cursor-pointer "
					>
						Download CV
					</Button>
					<Sheet open={open} onOpenChange={setOpen}>
						<Button
							size="icon"
							variant="outline"
							onClick={() => setOpen(!open)}
							className="lg:hidden border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
						>
							<MenuIcon className="size-4" />
						</Button>
						<SheetContent
							className="bg-neutral-900/95 supports-backdrop-filter:bg-neutral-900/85 gap-0 backdrop-blur-lg border-white/10 text-neutral-100"
							showClose={false}
							side="left"
						>
							<SheetTitle className="sr-only">Navigation Menu</SheetTitle>
							<SheetDescription className="sr-only">
								Main site navigation links
							</SheetDescription>
							<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
								{links.map((link) => (
									<Link
										key={link.label}
										onClick={() => setOpen(false)}
										className={cn(
											buttonVariants({
												variant: "ghost",
												className: "justify-start",
											}),
											"text-neutral-300 hover:text-white hover:bg-white/10",
										)}
										href={link.href}
									>
										{link.label}
									</Link>
								))}
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
