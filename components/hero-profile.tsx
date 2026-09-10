"use client";

import React from "react";
import Image from "next/image";
import { TypewriterName } from "@/components/typewriter-name";
import { TechStackIcons } from "@/components/tech-stack-icons";
import { Sparkles, Terminal, ArrowUpRight } from "lucide-react";

function FacebookIcon({ className = "size-3.5" }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
		</svg>
	);
}

function LinkedinIcon({ className = "size-3.5" }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
		</svg>
	);
}

function GithubIcon({ className = "size-3.5" }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
			/>
		</svg>
	);
}

function InstagramIcon({ className = "size-3.5" }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
		</svg>
	);
}

const SOCIAL_LINKS = [
	{
		name: "Facebook",
		href: "https://www.facebook.com/JohnPaul.Martirez18/",
		icon: <FacebookIcon className="size-3.5" />,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/john-paul-martirez-8819552b7/", 
		icon: <LinkedinIcon className="size-3.5" />,
	},
	{
		name: "GitHub",
		href: "https://github.com/jpmartirez",
		icon: <GithubIcon className="size-3.5" />,
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/lopnajj_/",
		icon: <InstagramIcon className="size-3.5" />,
	},
];

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

						{/* Social Links & Navigation */}
						<div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full">
							{/* Social Links */}
							<div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 w-full sm:w-auto">
								{SOCIAL_LINKS.map((social) => (
									<a
										key={social.name}
										href={social.href || "#"}
										target={social.href ? "_blank" : undefined}
										rel={social.href ? "noopener noreferrer" : undefined}
										className="flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 hover:border-cyan-500/40 transition-all duration-200 active:scale-95 cursor-pointer shadow-sm w-full sm:w-auto"
										title={social.name}
									>
										<span className="shrink-0 text-neutral-300">{social.icon}</span>
										<span className="truncate">{social.name}</span>
									</a>
								))}
							</div>

							{/* Primary CTA */}
							<a
								href="/projects"
								className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white text-neutral-900 hover:bg-neutral-200 transition-colors shadow-sm shrink-0 w-full sm:w-auto"
							>
								<Terminal className="size-3.5" />
								<span>View Projects</span>
								<ArrowUpRight className="size-3" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
