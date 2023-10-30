"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import ZachPhoto from "../../public/Zach-Business-Headshot-edit.jpg";

const Intro = () => {
	return (
		<section className="mb-28 max-w-[50rem] text-center sm:mb-0">
			<div className="flex items-center justify-center">
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
			</div>
			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hello, I'm Zach!</span> I'm a{" "}
				<span className="font-bold">full-stack developer</span> with{" "}
				<span className="font-bold">3 years</span> of experience. I enjoy
				building <span className="italic">sites & apps</span>. My focus is{" "}
				<span className="underline">React (Next.js)</span>.
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
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
				>
					Contact me here
					<BsArrowRight className=" opacity-70 group-hover:translate-x-1 transition" />
				</Link>
				<a
					href="/Tech-Resume.pdf"
					download
					className="group flex items-center gap-2 bg-white  px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
				>
					Download CV{" "}
					<HiDownload className="opacity-60 group-hover:scale-300 transition" />
				</a>
				<a
					href="https://www.linkedin.com/in/zach-mclean-92a5391b3/"
					target="_blank"
					className="flex items-center gap-2 bg-white text-gray-700 p-4 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
				>
					<BsLinkedin />
				</a>
				<a
					href="https://github.com/ZachMcLean"
					target="_blank"
					className="text-[1.35rem] flex items-center gap-2 bg-white text-gray-700 p-4 rounded-full focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
};

export default Intro;
