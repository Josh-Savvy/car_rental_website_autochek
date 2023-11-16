"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import { PrimaryButton } from "@/components/ui/atoms/buttons";
import ExploreCarsNavLocation from "./ExploreCarsNavLocation";
import ExploreCarsNavPickUpDate from "./ExploreCarsNavPickUpDate";
import ExploreCarsNavReturnDate from "./ExploreCarsNavReturnDate";
import { motion, useAnimation, useInView } from "framer-motion";

const ExploreCarsNav = () => {
	const [selectQuery, setSelectQuery] = useState<string>("");

	const controls = useAnimation();
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, {
		once: true,
	});

	useEffect(() => {
		if (inView) {
			controls.start({
				opacity: 1,
				y: 0,
				transition: { duration: 0.8, type: "spring", bounce: 0.25 },
			});
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial={{ opacity: 0, y: 100 }}
			transition={{ duration: 0.8 }}>
			<div className="bg-white shadow-lg flex flex-row flex-wrap lg:flex-nowrap justify-between items-center mx-6 sm:mx-auto p-4 px-20 md:p-6 rounded-lg sm:max-w-[75dvw] relative">
				<ExploreCarsNavLocation />
				<ExploreCarsNavPickUpDate />
				<ExploreCarsNavReturnDate />
				<PrimaryButton
					buttonText="Search"
					className="text-white p-2 px-6 hover:scale-105 scale-100 duration-300 w-full lg:w-auto flex justify-center items-center"
				/>
			</div>
		</motion.div>
	);
};

const MemoizedExploreCarsNav = memo(ExploreCarsNav);

export default MemoizedExploreCarsNav;
