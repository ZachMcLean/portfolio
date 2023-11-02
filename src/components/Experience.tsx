"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
	return (
		<section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
			<SectionHeading>My Experience</SectionHeading>
			<VerticalTimeline lineColor="black">
				{experiencesData.map((item, index) => (
					<VerticalTimelineElement
						key={index}
						contentStyle={{
							background: "black",
							boxShadow: "none",
							border: "1px solid rgba(0, 0, 0, 0.05)",
							textAlign: "left",
							padding: "1.3rem 2rem",
						}}
						contentArrowStyle={{
							borderRight: "0.4rem solid #9ca3af",
						}}
						date={item.date}
						icon={item.icon}
						iconStyle={{
							background: "white",
							fontSize: "1.5rem",
						}}
					>
						<h3 className="font font-semibold capitalize">{item.title}</h3>
						<p className="font-normal !mt-0">{item.location}</p>
						<p className="!mt-1 !font-normal text-gray-700">
							{item.description}
						</p>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</section>
	);
}
