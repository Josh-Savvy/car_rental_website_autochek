import AppStoreCard from "@/components/ui/atoms/cards/common/AppStoreCard";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const DownloadSection = () => {
	const containerRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start center", "center start"],
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, -600]);
	return (
		<section
			className="min-h-screen sm:p-2 py-8 bg-white pt-20 text-white overflow-hidden"
			ref={containerRef}>
			<div className="flex items-start justify-center mx-auto w-full bg-[#181A23] px-6 max-w-[80dvw] rounded-xl h-full min-h-[50dvh] mt-28">
				<div className="flex-grow min-w-[60%] w-full flex flex-col gap-5 items-center justify-center py-[10%]">
					<div className="grid gap-5 mx-auto xl:pl-12">
						<h1 className="text-4xl xl:text-[45px] font-semibold">
							Download the fee RentalX app
						</h1>
						<p className="">
							Lorem ipsum dolo stkdsjd dsiuishdk dsvisvjkdsimet
							Lorem ipsum dolo stkdsjd dsiuishdk dsvisvjkdsimet
							Lorem ipsum dolo stkdsjd dsiuishdk dsvisvjkdsimet
						</p>
					</div>
					<AppStoreCard />
				</div>
				<div className="w-full relative top-24 hidden md:block">
					{/* <AnimationOnScroll
						animateIn="animate__fadeIn"
						animateOnce={false}> */}
					<motion.img
						style={{ y }}
						src="/assets/images/app_demo.png"
						alt="car_example"
						className="w-auto h-[100vh] max-w-[50vw] absolute top-10 md:-right-20 lg:-right-10 2xl:right-0"
						loading="lazy"
					/>
					{/* </AnimationOnScroll> */}
				</div>
			</div>
		</section>
	);
};

export default DownloadSection;
