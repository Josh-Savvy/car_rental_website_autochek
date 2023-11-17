/* eslint-disable @next/next/no-img-element */
import SectionTitle from "@/components/ui/atoms/cards/common/SectionTitle";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";

const WhyChooseUs = () => {
	const containerRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "center start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, -1000]);
	return (
		<section
			className="min-h-screen p-5 py-8 bg-white"
			ref={containerRef}>
			<SectionTitle
				title="Why Choose us"
				subtitle="We offer best experience with our rental deals"
				classes={{
					subtitle:
						"text-4xl max-w-lg mx-auto font-semibold capitalize mb-6",
					title: "text-[#444]",
				}}
				animate
			/>
			<div className="flex items-center justify-center mx-auto w-full">
				<div className="w-full relative bottom-24">
					<AnimationOnScroll
						animateIn="animate__fadeInLeft"
						animateOnce>
						<motion.img
							style={{ y }}
							animate={{ transition: { duration: 0.5 } }}
							src="/assets/images/image_Car.png"
							alt="car_example"
							className="w-auto h-[75vh] max-w-[70vw] absolute -left-10 top-0 "
							loading="lazy"
						/>
					</AnimationOnScroll>
				</div>
				<div className="flex-grow min-w-[40%]">
					<div className="flex flex-col items-center gap-3">
						{Array.from({ length: 4 }).map((_, i) => (
							<WhyItemCard key={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const WhyItemCard = () => {
	return (
		<AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={false}>
			<div className="flex items-center gap-5">
				<div className="bg-[red] p-3 rounded-lg">
					<PersonIcon fontSize="medium" className="text-white" />
				</div>
				<div className="grid gap-2">
					<h1 className="text-xl">Title Title Title Title</h1>
					<p className="text-[#555] tracking-tight max-w-sm">
						content content content content content content ait -
						compiling... event - compiled successfully in 2s 792
						1864 ms
					</p>
				</div>
			</div>
		</AnimationOnScroll>
	);
};
export default WhyChooseUs;
