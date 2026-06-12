"use client";

import React from "react";
import { Grid2x2PlusIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: "Features",
			href: "#",
		},
		{
			label: "Pricing",
			href: "#",
		},
		{
			label: "About",
			href: "#",
		},
	];

	return (
		<header
			className={cn(
				"sticky top-5 z-50",
				"mx-auto w-full max-w-3xl rounded-lg border border-white/10 shadow-lg shadow-black/30",
				"bg-neutral-900/80 supports-[backdrop-filter]:bg-neutral-900/70 backdrop-blur-lg",
				"text-neutral-100",
			)}
		>
			<nav className="mx-auto flex items-center justify-between p-1.5">
				<div className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100 hover:bg-white/10">
					<Grid2x2PlusIcon className="size-5 text-white" />
					<p className="text-base font-bold text-white">Asme</p>
				</div>
				<div className="hidden items-center gap-1 lg:flex">
					{links.map((link) => (
						<a
							key={link.label}
							className={cn(
								buttonVariants({ variant: "ghost", size: "sm" }),
								"text-neutral-300 hover:text-white hover:bg-white/10",
							)}
							href={link.href}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex items-center gap-2">
					<Button
						size="sm"
						className="bg-white text-neutral-900 hover:bg-neutral-100 font-semibold"
					>
						Login
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
							className="bg-neutral-900/95 supports-[backdrop-filter]:bg-neutral-900/85 gap-0 backdrop-blur-lg border-white/10 text-neutral-100"
							showClose={false}
							side="left"
						>
							<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
								{links.map((link) => (
									<a
										key={link.label}
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
									</a>
								))}
							</div>
							<SheetFooter className="border-white/10">
								<Button
									variant="outline"
									className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
								>
									Sign In
								</Button>
								<Button className="bg-white text-neutral-900 hover:bg-neutral-100 font-semibold">
									Get Started
								</Button>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
