/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import testimonials from "@/data/testimonials";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const TestimonialList = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((prev) =>
				prev < testimonials.length - 1 ? prev + 1 : 0,
			);
		}, 5000);
		return () => clearInterval(intervalId);
	}, [currentIndex, testimonials.length]);

	return (
		<div className="my-5 text-white overflow-hidden max-w-xl w-full">
			<h1 className="max-w-xl text-xl">
				The majority of our users tell us that readable content
				distracts readers the majority of our users tell us that
				readable
			</h1>
			<div className="my-6">
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 20 }}
					transition={{
						type: "spring",
						stiffness: 120,
						damping: 10,
						duration: 2,
					}}
					key={currentIndex}>
					<div className="flex flex-col items-center gap-4">
						<p className="text-xl relative px-6 text-start pl-10 w-full font-[400] tracking-tight leading-[1.25em]">
							<span
								className="absolute text-6xl font-bold left-1 -top-1"
								style={{ fontFamily: "cursive" }}>
								“
							</span>
							{testimonials[currentIndex].comment}
							<span
								className="absolute text-6xl font-bold ml-4 -bottom-8"
								style={{ fontFamily: "cursive" }}>
								”
							</span>
						</p>
					</div>
					<div className="grid gap-2 mt-5">
						<div className="flex items-center gap-3 animate__animated animate__fadeIn pl-8 my-3">
							{Array.from({
								length: testimonials[currentIndex].rating,
							}).map((_, i) => (
								<StarOutlinedIcon
									className="text-[#fe5c23]"
									key={i}
								/>
							))}
							<span className="text-lg">
								{testimonials[currentIndex].rating.toFixed(1)}
							</span>
						</div>
						<div className="flex items-center gap-3 animate__animated animate__fadeIn pl-8 my-2">
							<div className="relative overflow-hidden">
								<img
									src={
										testimonials[currentIndex].person
											.avatar ||
										"/assets/images/default_avatar.png"
									}
									alt={testimonials[currentIndex].person.name}
									className="bg-zinc-200 h-16 w-16 object-cover rounded-full"
									loading="lazy"
								/>
							</div>
							<div className="max-w-md">
								<h1 className="text-2xl font-semibold">
									{testimonials[currentIndex].person.name}
								</h1>
								<p className="text-lg">
									{testimonials[currentIndex].person.jobTitle}
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default TestimonialList;
