import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Zach McLean | Portfolio",
	description: "Zach is a fresh graduate and an aspiring Front-end Developer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// whole page scroll smooth for # routing
		// we add ! to override any default behavior
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} 
						bg-gray-50 text-gray-950 relative pt-28 sm:pt-36
						dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90
						`}
			>
				<div
					className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] 
								h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
								sm:w-[68.75rem] 
								dark:bg-[#946263]"
				></div>

				<div
					className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] 
								h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
								sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] 
								xl:left-[-15rem] 2xl:left-[-5rem]
								dark:bg-[#676394]"
				></div>
				<ActiveSectionContextProvider>
					<Header />
					{children}
					<Footer />
					<Toaster />
				</ActiveSectionContextProvider>

				<ThemeSwitch />
			</body>
		</html>
	);
}
