"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-button";
import toast from "react-hot-toast";

export default function Contact() {
	const { ref } = useSectionInView("Contact");
	// new in Next14
	// needs to be one layer deeper (running on button)

	return (
		// min(100%,38) 100% is for when the num of pixels is less than 38,  38 is the fixed width for wider screens
		<motion.section
			ref={ref}
			id="contact"
			className="scroll-mt-28 mb-20 w-[min(100%,38rem)] sm:mb-28 max-w-[45rem] text-center"
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>Contact me</SectionHeading>
			<p
				className="text-gray-700 -mt-6
							dark:text-white/80"
			>
				Please contact me directly at{" "}
				<a className="underline" href="mailto:zachmclean77@gmail.com">
					zachmclean77@gmail.com
				</a>{" "}
				or through this form!
			</p>

			<form
				className="mt-10 flex flex-col dark:text-black"
				//action is the new next js way of sumbitting forms
				// using server actions, you can do an api req with no url
				// within action, we automatically get access to the formData object
				action={async (formData) => {
					console.log("Running on Client");
					console.log(formData.get("senderEmail"));
					console.log(formData.get("senderMessage"));
					const { data, error } = await sendEmail(formData);

					if (error) {
						toast.error(error);
						return;
					}
					toast.success("Email sent successfully");
				}}
			>
				<input
					name="senderEmail"
					type="email"
					required
					maxLength={500}
					className="h-14 px-4 rounded-lg border border-black/10	
							   dark:bg-white dark:bg-opacity-80 
							   dark:focus:bg-opacity-100 transition-all
							   dark:outline-none"
					placeholder="Your email"
				/>
				<textarea
					name="senderMessage"
					className="h-52 my-3 rounded-lg borderBlack p-4
							dark:bg-white dark:bg-opacity-80 
							   dark:focus:bg-opacity-100 transition-all
							   dark:outline-none"
					required
					maxLength={5000}
					placeholder="Your message"
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
