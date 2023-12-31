"use client";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
	const [theme, setTheme] = useState<Theme>("light");

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			window.localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			setTheme("light");
			window.localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	};

	useEffect(() => {
		// how to set theme from local storage
		const localTheme = window.localStorage.getItem("theme") as Theme | null;
		if (localTheme) {
			setTheme(localTheme);
			if (localTheme === "dark") {
				document.documentElement.classList.add("dark");
			}
			// else set the theme as system default
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		}
	}, []);

	return (
		<button
			className="flex items-center justify-center 
                        fixed bottom-8 left-5 bg-white w-[3rem] h-[3rem] 
                        bg-opacity-80 backdrop-blur-[0.5rem] border border-white 
                        border-opacity-40 shadow-2xl rounded-full
                        hover:scale-[1.15] active:scale-105 transition-all
                        dark:bg-gray-950"
			onClick={toggleTheme}
		>
			{theme === "light" ? <BsSun /> : <BsMoon />}
		</button>
	);
}
