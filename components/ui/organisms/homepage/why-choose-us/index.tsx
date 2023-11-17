/* eslint-disable @next/next/no-img-element */
import SectionTitle from "@/components/ui/atoms/cards/common/SectionTitle";
import reasons, { IReason } from "@/data/reasons";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const WhyChooseUs = () => {
	const containerRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["center center", "center start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

	return (
		<section
			className="min-h-screen xs:p-5 xs:py-8 bg-white"
			ref={containerRef}>
			<SectionTitle
				title="Why Choose us"
				subtitle="We offer best experience with our rental deals"
				classes={{
					subtitle:
						"text-4xl max-w-lg mx-auto font-semibold capitalize mb-6",
					title: "text-[#444]",
					container: "px-5",
				}}
				animate
			/>
			<div className="flex lg:flex-row flex-col items-center justify-center mx-auto w-full gap-10">
				<div className="w-full relative lg:bottom-36">
					<AnimationOnScroll
						animateIn="animate__fadeInLeft"
						animateOnce>
						<motion.img
							transition={{
								type: "spring",
								damping: 10,
								stiffness: 100,
							}}
							style={{ y }}
							src="/assets/images/image_Car.png"
							alt="car_example"
							className="w-auto h-[75vh] lg:max-w-[70vw] absolute left-0 lg:-left-10 top-0 "
							loading="lazy"
						/>
					</AnimationOnScroll>
				</div>
				<div className="flex-grow min-w-screen xs:min-w-[65%] lg:min-w-[40%] bg-black/40 lg:bg-transparent lg:backdrop-blur-none backdrop-blur-sm p-6 z-20 lg:rounded">
					<div className="flex flex-col items-start gap-10">
						{reasons.map((reason, i) => (
							<WhyItemCard {...reason} key={i} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const WhyItemCard = (reason: IReason) => {
	const { content, icon, title } = reason;
	return (
		<AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={false}>
			<div className="flex sm:flex-row flex-col items-start sm:items-center gap-1 sm:gap-5">
				<div className="flex items-center gap-5">
					<div className="bg-[#f2532c] p-3 rounded-lg">{icon}</div>
					<h1 className="text-white lg:text-black text-2xl font-medium sm:hidden">
						{title}
					</h1>
				</div>
				<div className="grid gap-2 items-start">
					<h1 className="text-white lg:text-black text-2xl font-medium sm:inline-block hidden">
						{title}
					</h1>
					<p className="text-white lg:text-[#555] tracking-tight max-w-sm">
						{content}
					</p>
				</div>
			</div>
		</AnimationOnScroll>
	);
};
export default WhyChooseUs;
