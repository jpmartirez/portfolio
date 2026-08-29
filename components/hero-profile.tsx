"use client";

import React from "react";
import Image from "next/image";
import { TypewriterName } from "@/components/typewriter-name";
import { TechStackIcons } from "@/components/tech-stack-icons";
import { Sparkles, Terminal, Mail, ArrowUpRight } from "lucide-react";

export function HeroProfile() {
	return (
		<section className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full max-w-6xl mx-auto">
			{/* Ambient Status Pill above the main card */}
			<div className="text-center mb-6 space-y-2">
				<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/6 border border-white/10 backdrop-blur-md text-xs font-medium text-neutral-300 shadow-sm">
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
					</span>
					<span>
						Artificial Intelligence • Machine Learning • Software Solutions
					</span>
				</div>
			</div>

			{/* Main Glassmorphic Profile Card */}
			<div className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/60 backdrop-blur-xl overflow-hidden">
				{/* Subtle decorative ambient lights inside the card */}
				<div
					className="pointer-events-none absolute -top-28 -left-28 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
					aria-hidden="true"
				/>
				<div
					className="pointer-events-none absolute -bottom-28 -right-28 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"
					aria-hidden="true"
				/>

				<div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10">
					{/* Left Column: Round Profile Picture */}
					<div className="shrink-0 flex flex-col items-center">
						<div className="relative group">
							{/* Outer decorative gradient ring matching BeamsBackground cyan/sky hues */}
							<div className="absolute -inset-1 rounded-full bg-linear-to-tr from-cyan-500/40 via-sky-400/20 to-teal-500/40 blur-sm group-hover:blur-md transition-all duration-300 opacity-75 group-hover:opacity-100" />

							{/* Picture Container */}
							<div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden border-2 border-white/20 bg-neutral-950 shadow-inner">
								<Image
									src="/picture.jpg"
									alt="John Paul Martirez"
									width={400}
									height={400}
									priority
									className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
								/>
							</div>

							{/* Status Badge */}
							<div className="absolute bottom-2 right-2 bg-neutral-900/90 border border-white/20 rounded-full p-1.5 shadow-md">
								<Sparkles className="size-4 text-cyan-400" />
							</div>
						</div>

						{/* Name with Typewriter Animation placed under the picture */}
						<div className="mt-4 text-center">
							<TypewriterName
								name="John Paul Martirez"
								textClassName="text-xl sm:text-2xl font-bold tracking-tight text-white"
							/>
							<p className="text-xs font-medium text-cyan-400/90 mt-1 uppercase tracking-wider">
								Aspiring AI Engineer
							</p>
						</div>
					</div>

					{/* Right Column: Background / Text About Me + Icon Stacks */}
					<div className="flex-1 flex flex-col text-center lg:text-left space-y-4">
						<div className="space-y-2">
							<div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
								<h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
									About Me
								</h2>
								<span className="text-xs px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-medium">
									AI & ML Enthusiast
								</span>
							</div>

							<p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
								I am on an ambitious journey to become an{" "}
								<span className="text-white font-medium">AI Engineer</span>,
								driven by a deep passion for{" "}
								<span className="text-cyan-300 font-medium">
									Artificial Intelligence
								</span>
								,{" "}
								<span className="text-sky-300 font-medium">
									Machine Learning
								</span>
								, and building high-impact{" "}
								<span className="text-white font-medium">
									software solutions
								</span>
								.
							</p>

							<p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
								My focus centers on designing intelligent systems, exploring
								neural architectures, orchestrating LLMs, and crafting scalable
								software applications that bridge algorithmic power with
								seamless user experiences.
							</p>
						</div>

						{/* Divider */}
						<div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent my-1" />

						{/* Below Text: Icon Stacks */}
						<TechStackIcons />

						{/* Action Buttons */}
						<div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
							<a
								href="mailto:contact@example.com"
								className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-neutral-900 hover:bg-neutral-200 transition-colors shadow-sm"
							>
								<Mail className="size-3.5" />
								<span>Contact Me</span>
							</a>
							<a
								href="#projects"
								className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/10 transition-colors"
							>
								<Terminal className="size-3.5 text-cyan-400" />
								<span>View Projects</span>
								<ArrowUpRight className="size-3 text-neutral-400" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
