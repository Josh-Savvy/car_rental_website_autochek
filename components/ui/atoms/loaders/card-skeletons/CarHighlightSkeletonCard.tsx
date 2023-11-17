import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

// interface CarHighlightSkeletonCardProps extends HTMLMotionProps<"div"> {}

const DetailSection = () => {
	return (
		<>
			<div className="flex items-center gap-1 max-w-[50%] my-5">
				<motion.div
					animate={{
						opacity: [0, 1, 0],
					}}
					transition={{
						duration: 2,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="bg-[#FE5C3C5A] w-4 h-4 rounded-full"
				/>
				<motion.div
					animate={{
						opacity: [0, 0.6, 0],
					}}
					transition={{
						duration: 2,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="bg-zinc-300 flex-grow my-3 rounded-lg p-2 px-4"
				/>
			</div>
			<motion.div
				animate={{
					opacity: [0, 0.6, 0],
				}}
				transition={{
					duration: 2,
					ease: "linear",
					repeat: Infinity,
					repeatType: "reverse",
				}}
				className="bg-zinc-300 max-w-[80%] rounded-lg p-2 px-4"
			/>
			<div className="grid grid-cols-2 gap-3 mt-5 items-end">
				{Array.from({ length: 4 }).map((_, i) => (
					<motion.div
						key={i}
						animate={{
							opacity: [0, i * 0, 6, 0],
						}}
						transition={{
							duration: 2,
							ease: "linear",
							repeat: Infinity,
							repeatType: "reverse",
						}}
						className="bg-zinc-300 w-full h-full rounded-lg p-1 px-3"
					/>
				))}
			</div>
			<div className="flex justify-between items-center my-8 gap-3 w-full">
				<motion.div
					animate={{
						opacity: [0, 0.6, 0],
					}}
					transition={{
						duration: 2,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="bg-zinc-300  w-[50%] rounded-lg p-2 px-4"
				/>
				<motion.div
					animate={{
						opacity: [0, 1, 0],
					}}
					transition={{
						duration: 2,
						ease: "linear",
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className="bg-[#FE5C3C5A] w-[30%] rounded p-4"
				/>
			</div>
		</>
	);
};

const ImageSection = () => {
	return (
		<motion.div
			animate={{
				opacity: [0, 1, 0],
			}}
			transition={{
				duration: 2,
				ease: "linear",
				repeat: Infinity,
				repeatType: "reverse",
			}}
			className="bg-zinc-300 w-full p-20 h-[50%] rounded-lg"
		/>
	);
};

const Main = () => {
	return (
		<div
			className={`w-[320px] sm:w-[385px] h-auto max-w-sm 2xl:max-w-md overflow-hidden rounded-[10px] p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out`}>
			<CarHighlightSkeletonCard.ImageSection />
			<CarHighlightSkeletonCard.DetailSection />
		</div>
	);
};

const CarHighlightSkeletonCard = {
	DetailSection: DetailSection,
	ImageSection: ImageSection,
	Main: Main,
};

export default CarHighlightSkeletonCard;
