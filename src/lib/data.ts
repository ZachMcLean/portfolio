import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/corpcomment.png";
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";

import paragonImg from "../../public/Paragon-pic-01.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	// {
	// 	name: "Experience",
	// 	hash: "#experience",
	// },
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Software Engineer Intern",
		location: "Nashville, TN",
		description:
			"I worked as a full-stack software consulting intern for 3 months",
		icon: React.createElement(CgWorkAlt),
		date: "2019 - 2021",
	},
	{
		title: "Bachelors of Computer Science, Minor in Mathematics",
		location: "Nashville, TN",
		description:
			"I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
		icon: React.createElement(LuGraduationCap),
		date: "2023",
	},

	{
		title: "Full-Stack Developer",
		location: "Houston, TX",
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2021 - present",
	},
] as const;

export const projectsData = [
	{
		title: "ArtLab Dentistry",
		description:
			"I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: corpcommentImg,
	},
	{
		title: "Paragon-Calendar",
		description:
			"A calendar & productivity app for creatives and developers. I was the full-stack developer. It has features like User Authentication, CRUD operations for Events and Notes, and more.",
		tags: [
			"React",
			"TypeScript",
			"Next.js",
			"Tailwind",
			"Prisma",
			"Postgresql",
		],
		imageUrl: paragonImg,
	},
	{
		title: "Social Media App",
		description:
			"A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"C#",
	"ASP.Net Core",
	"Entity-Framework",
	"Express",
	"PostgreSQL",
	"Python",
	"C++",
	"Framer Motion",
] as const;
