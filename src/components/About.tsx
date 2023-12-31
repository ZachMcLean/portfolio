"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			// set id for section routing(header)
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				As a fresh graduate with a degree in{" "}
				<span className="font-medium">Computer Science</span>, and a minor in{" "}
				{""}
				<span className="font-medium">Mathematics,</span> I am currently looking
				for a job as a{" "}
				<span className="font-medium">full-stack web developer</span>.{" "}
				<span className="italic">My favorite part of programming</span> is the
				problem-solving aspect. I <span className="underline">love</span> the
				feeling of finally figuring out a solution to a problem. My core stack
				is{" "}
				<span className="font-medium">
					React, Next.js, Asp .Net Core, and PostgreSQL
				</span>
				. I am also familiar with TypeScript and Prisma. I am always looking to
				learn new technologies.
				{/* I am currently looking for a{" "}
				<span className="font-medium">full-time position</span> as a software
				developer. */}
			</p>

			<p>
				<span className="italic">When I'm not coding</span>, I enjoy playing
				video games, working out, and . I also enjoy{" "}
				<span className="font-medium">learning new things</span>. I am currently
				learning about{" "}
				<span className="font-medium">history and philosophy</span>. I'm also
				learning how to play the guitar.
			</p>
		</motion.section>
	);
};

export default About;
