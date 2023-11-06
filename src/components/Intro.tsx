"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import ZachPhoto from "../../public/Zach-Business-Headshot-edit.jpg";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const Intro = () => {
	const { ref } = useSectionInView("Home", 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section
			ref={ref}
			id="home"
			className="scroll-mt-[100rem] w-full mr-28 my-36 max-w-[80rem] text-left "
		>
			{/* <div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "tween",
							duration: 0.2,
						}}
					>
						<Image
							alt="Portrait of Zach McLean"
							src={ZachPhoto}
							// src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
							// width="192"
							// height="192"
							quality="95"
							priority={true}
							className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
						/>
					</motion.div>

					<motion.span
						className="text-4xl absolute bottom-0 right-0"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
					>
						🚀
					</motion.span>
				</div>
			</div> */}

			{/* Main H1 */}
			<motion.h1
				className="text-8xl px-4 mb-6"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hey, I'm Zach.</span>
			</motion.h1>

			<motion.h2
				className="text-4xl px-4"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				I'm a <span className="font-bold">full-stack developer</span>
			</motion.h2>

			{/* Main H2 */}
			<motion.p
				className="mb-8 mt-4 px-4 text-xl font-light !leading-[1.8] "
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				I've spent the last <span className="font-bold">3 years</span> learning
				fullstack web-development while <br /> studying at university. I enjoy
				building <span className="italic">sites & apps</span> with <br />
				<span className="underline">React (Next.js)</span> and{" "}
				<span className="underline">C# (ASP.Net Core)</span> I also love playing
				and recording <span className="font-bold">guitar!</span>
			</motion.p>

			{/* Buttons */}
			<motion.div
				className="flex flex-col sm:flex-row items-center justify-start gap-2 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href="#contact"
					//  Group class in tailwind
					className="group flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
					onClick={(e) => {
						setActiveSection("Contact");
						setTimeOfLastClick(Date.now());
					}}
				>
					Contact me here
					<BsArrowRight className=" opacity-70 group-hover:translate-x-1 transition" />
				</Link>
				<a
					href="/Tech-Resume.pdf"
					download
					className="group flex items-center gap-2 bg-white 
							px-7 py-3 rounded-full outline-none 
							focus:scale-110 hover:scale-110 active:scale-105 
							transition cursor-pointer border border-black/10
							dark:bg-white/10"
				>
					Download CV{" "}
					<HiDownload className="opacity-60 group-hover:scale-300 transition" />
				</a>
				<a
					href="https://www.linkedin.com/in/zach-mclean-92a5391b3/"
					target="_blank"
					className="flex items-center gap-2 bg-white 
							text-gray-700 p-4 rounded-full 
							focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 
							active:scale-105 transition 
							cursor-pointer border border-black/10
							dark:bg-white/10 dark:text-white/60"
				>
					<BsLinkedin />
				</a>
				<a
					href="https://github.com/ZachMcLean"
					target="_blank"
					className="text-[1.35rem] flex items-center gap-2 
							bg-white text-gray-700 p-4 rounded-full 
							focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] 
							active:scale-105 transition cursor-pointer 
							border border-black/10 
							dark:bg-white/10 dark:text-white/60"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
};

export default Intro;
