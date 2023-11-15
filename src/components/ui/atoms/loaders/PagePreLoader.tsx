"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Kurale } from "next/font/google";

const kurale = Kurale({ subsets: ["latin"], weight: "400" });

const PagePreLoader = () => {
	const [initialLoad, setInitialLoad] = useState<boolean>(true);

	useEffect(() => {
		const timeout = setTimeout(function () {
			setInitialLoad(false);
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, []);
	const text = ["A", "u", "t", "o", "m", "o", "b", "i", "l", "e"];
	return initialLoad ? (
		<div className="fixed top-0 z-50 bg-black min-h-screen min-w-screen w-full flex justify-center items-center mx-auto">
			<div className={kurale.className}>
				{text.map((t, i) => (
					<motion.span
						key={i}
						className="xs:text-[40px] text-[25px] md:text-[65px] uppercase mx-2"
						animate={{
							opacity: 1,
							translateY: 0,
							color: "#FE5C3C",
						}}
						transition={{ duration: i * 0.5, repeat: Infinity }}
						initial={{
							opacity: 0,
							translateY: "calc(100vw - 50%)",
							color: "#FE5C3C5A",
						}}>
						{t}
					</motion.span>
				))}
			</div>
		</div>
	) : (
		<></>
	);
};

export default PagePreLoader;
