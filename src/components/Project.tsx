"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	// Framer motion hook
	const { scrollYProgress } = useScroll({
		// must provide a ref
		target: ref,
		// start animating when the bottom of viewport crosses the target
		// end animating when 33% of the section(Projects) has been scrolled
		offset: ["0 1", "1.33 1"],
	});
	// 0.5, 1 says start halfway through the usaul animation to end
	// this scales the anim down and makes it more subtle
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			className="group mb-3 sm:mb-8 last:mb-0 "
		>
			<section
				className="rounded-lg sm:h-[20rem] relative bg-gray-100 
								max-w-[42rem] border border-black/5 overflow-hidden 
								sm:pr-8 hover:bg-gray-200 transition
								dark:bg-white/10 dark:hover:bg-white/20
								dark:text-white sm:group-even:pl-8"
			>
				<div
					className="h-full flex flex-col pt-4 pb-7 px-5 
								sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] 
								sm:group-even:ml-[20rem]"
				>
					<h3 className="text-2xl font-semibold">{title}</h3>
					<p
						className="mt-2 leading-relaxed 
								text-gray-700
								dark:text-white/70"
					>
						{description}
					</p>
					<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
						{tags.map((tag, index) => (
							<li
								className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
								key={index}
							>
								{tag}
							</li>
						))}
					</ul>
				</div>
				<Image
					src={imageUrl}
					alt="Project I created"
					quality={95}
					className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
                    
                    group-hover:scale-[1.04] 
                    group-hover:-translate-x-3 
                    group-hover:translate-y-3 
                    group-hover:-rotate-2 

                    group-even:group-hover:translate-x-3 
                    group-even:group-hover:translate-y-3 
                    group-even:group-hover:rotate-2 

                    transition 
                    group-even:right-[initial] 
                    group-even:-left-40 
					hidden sm:block
					"
				/>
			</section>
		</motion.div>
	);
}
