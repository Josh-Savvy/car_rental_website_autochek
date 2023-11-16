"use client";

import { calculatePercentage } from "@/utils";
import React from "react";
import { motion } from "framer-motion";

type StatProps = {
	speed: number;
	temp: number;
	hp: number;
};

const StatsHighlightCard = (props: StatProps) => {
	const { hp, speed, temp } = props;
	const circumference = ((2 * 22) / 7) * 120;

	const Item = ({
		item,
		desc,
		measure,
	}: {
		item: number;
		desc?: string;
		measure?: string;
	}) => (
		<div className="relative flex justify-center items-center">
			<svg className="-rotate-90 w-40 h-40 top-0 left-0 w-full">
				<circle
					cx="80"
					cy="80"
					r="60"
					stroke="currentColor"
					strokeWidth="3"
					fill="transparent"
					className="text-white"
				/>
				<motion.circle
					cx="80"
					cy="80"
					r="60"
					initial={{
						// opacity: 0,
						strokeDashoffset: 0,
					}}
					animate={{
						// opacity: 1,
						strokeDashoffset:
							circumference -
							(calculatePercentage(item, item + 500) / 100) *
								circumference,
					}}
					transition={{ duration: 0.8, ease: "linear" }}
					stroke="currentColor"
					strokeWidth="3"
					fill="transparent"
					strokeDasharray={circumference}
					className="text-[#FE5C3C]"
				/>
			</svg>
			<span className="text-xl absolute left-[28%] w-full h-full top-[50%] mx-auto">
				<p className="">{item}</p>
				<p className=""></p>
				<p className=""></p>
			</span>
		</div>
	);

	return (
		<div className="flex items-center gap-5 p-10">
			<Item item={speed} desc="Top Speed" measure="KM/H" />
			<Item item={temp} desc="Engine Temp" measure="c" />
			<Item item={hp} desc="Power Car" measure="HP" />
		</div>
	);
};

export default StatsHighlightCard;
