import Link from "next/link";
import React from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollTopButton() {
	return (
		<Link
			href="#home"
			className='flex items-center justify-center 
                        fixed bottom-8 right-5  w-[3rem] h-[3rem] 
                        bg-opacity-80 backdrop-blur-[0.5rem] border border-white 
                        border-opacity-40 shadow-2xl rounded-full
                        hover:scale-[1.15] active:scale-105 transition-all
                        bg-gray-900"'
		>
			<FaChevronUp />
		</Link>
	);
}
