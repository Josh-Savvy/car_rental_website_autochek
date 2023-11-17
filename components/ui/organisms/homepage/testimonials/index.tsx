import SectionTitle from "@/components/ui/atoms/cards/common/SectionTitle";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const HomepageTetimonials = () => {
	const containerRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["end start", "start center"],
	});
	const y = useTransform(scrollYProgress, [0, 2], [0, -300]);
	return (
		<section
			className="min-h-screen p-5 py-8 bg-[#181A23] mb-[200vh] pt-20 overflow-hidden"
			ref={containerRef}>
			<div className="flex items-center justify-center mx-auto w-full">
				<div className="flex-grow min-w-[40%]">
					<div className="flex flex-col items-center gap-3">
						{/* {Array.from({ length: 4 }).map((_, i) => (
							<WhyItemCard key={i} />
						))} */}
					</div>
				</div>
				<div className="w-full relative top-24">
					<AnimationOnScroll animateIn="animate__fadeInRight">
						<motion.img
							style={{ y }}
							src="/assets/images/image_Car.png"
							alt="car_example"
							className="w-auto h-[75vh] max-w-[70vw] absolute -right-20 top-0 "
							loading="lazy"
						/>
					</AnimationOnScroll>
				</div>
			</div>
		</section>
	);
};

export default HomepageTetimonials;
