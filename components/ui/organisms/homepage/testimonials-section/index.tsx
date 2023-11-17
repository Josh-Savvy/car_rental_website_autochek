import SectionTitle from "@/components/ui/atoms/cards/common/SectionTitle";
import testimonials from "@/data/testimonials";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import TestimonialList from "./TestimonialList";

const HomepageTestimonialsSection = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["end start", "start center"],
	});
	const y = useTransform(scrollYProgress, [0, 2], [0, -800]);
	return (
		<section className="min-h-screen p-2 py-8 bg-[#181A23] pt-20 overflow-hidden">
			<div
				className="flex justify-center mx-auto w-full"
				ref={containerRef}>
				<div className="flex-grow min-w-[40%] w-full sm:pl-20 lg:pl-10 2xl:pl-[10dvw]">
					<SectionTitle
						title="Testimonials"
						subtitle="Our Client's reviews & testimonials"
						classes={{
							container:
								"flex items-start flex-col items-start justify-start text-white w-full px-0",
							title: "text-white",
							subtitle:
								"md:text-3xl lg:text-5xl capitalize font-[400] text-start max-w-lg -ml-1",
						}}
					/>
					<TestimonialList />
				</div>
				<div className="w-full relative top-24 hidden lg:block">
					<AnimationOnScroll
						animateIn="animate__fadeInRight"
						animateOnce>
						<motion.img
							style={{ y }}
							src="/assets/images/benz_2.png"
							alt="car_example"
							className="w-auto h-[75vh] max-w-[65vw] xl:-right-20 2xl:right-0 absolute top-40"
							loading="lazy"
						/>
					</AnimationOnScroll>
				</div>
			</div>
		</section>
	);
};

export default HomepageTestimonialsSection;
