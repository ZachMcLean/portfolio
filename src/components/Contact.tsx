"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
	const { ref } = useSectionInView("Contact");
	return (
		// min(100%,38) 100% is for when the num of pixels is less than 38,  38 is the fixed width for wider screens
		<section
			ref={ref}
			id="contact"
			className="scroll-mt-28 mb-20 w-[min(100%,38rem)] sm:mb-28 max-w-[45rem] text-center"
		>
			<SectionHeading>Contact me</SectionHeading>
			<p className="text-gray-700">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:zachmclean77@gmail.com"></a>{" "}
				zachmclean77@gmail.com or through this form!
			</p>

			<form className="mt-10 flex flex-col ">
				<input
					type="email"
					className="h-14 px-4 rounded-lg border border-black/10"
					placeholder="Your email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4"
					placeholder="Your message"
				/>
				<button
					type="submit"
					className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 
                    text-white rounded-full outline-none transition-all
                    focus:scale-110 hover:scale-110 active:scale-105
                    hover:bg-gray-950"
				>
					Submit{" "}
					<FaPaperPlane
						className="text-xs opacity-70 transition-all
                    group-hover:translate-x-1
                    group-hover:-translate-y-1"
					/>{" "}
				</button>
			</form>
		</section>
	);
}
