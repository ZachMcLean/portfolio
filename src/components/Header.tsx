"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import logoImage from "../../public/circled-z-50.png";

const Header = () => {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();

	return (
		<header className="z-[999] relative">
			{/* This is the actual header */}
			<motion.div
				className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border 
					border-white border-opacity-20 bg-white-300 bg-opacity-25 shadow-lg 
					shadow-black/[0.03] backdrop-blur-[0.2rem] 
					dark:bg-gray-900 dark:border-black/10 dark:bg-opacity-25"
				// className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border
				// 		border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg
				// 		shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem]
				// 		sm:w-[36rem] sm:rounded-full
				// 		dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
				initial={{ x: "-50%", opacity: 0 }}
				animate={{ x: "-50%", opacity: 1 }}
				transition={{ ease: "linear", duration: 0.8 }}
			></motion.div>
			{/* <div className="fixed top-[0.8rem] left-5 text-white">
				<Image
					alt="Zach McLean's Header Logo"
					src={logoImage}
					quality="95"
					priority={true}
					className="shadow-sm rounded-full"
				/>
			</div> */}
			<nav
				className="flex fixed top-[0.8rem] left-1/2 h-12 -translate-x-1/2 py-2 
						sm:h-[initial] sm:py-0"
			>
				<ul
					className="flex w-[22rem] flex-wrap items-center justify-center 
						gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] 
						sm:flex-nowrap sm:gap-5"
				>
					{/* for every link, create an li that animates and has a Link to an id*/}
					{links.map((link) => (
						<motion.li
							className="h-3/4 flex items-center justify-center relative"
							key={link.hash}
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
						>
							<Link
								className={clsx(
									"flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-100",
									{
										"text-gray-950 dark:text-gray-200":
											activeSection === link.name,
									}
								)}
								href={link.hash}
								onClick={() => {
									setActiveSection(link.name);
									setTimeOfLastClick(Date.now());
								}}
							>
								{/* This is literally the Name Printed out */}
								{link.name}

								{/* 
									This is the gray blob in the header behind each section
								*/}
								{link.name === activeSection && (
									<motion.span
										className="bg-gray-100 rounded-full absolute inset-0 -z-10
													dark:bg-gray-800"
										layoutId="activeSection"
										transition={{
											type: "spring",
											stiffness: 380,
											damping: 30,
										}}
									></motion.span>
								)}
							</Link>
						</motion.li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
