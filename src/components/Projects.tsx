"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/Project";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
	const { ref } = useSectionInView("Projects", 0.5);

	return (
		<section ref={ref} id="projects" className="scroll-mt-28">
			<SectionHeading>My projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
};
export default Projects;
