/* eslint-disable @next/next/no-img-element */
import CarHighlightCard from "@/components/ui/atoms/cards/car/car-highlight-card";
import ICar from "@/interfaces/car.interface";
import React, { useRef } from "react";
import ArrowForwardIosOutlined from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import useContainerScroll from "@/hooks/useContainerScroll";

const ShowCaseTopDealCars = ({
	highlightedCars,
}: {
	highlightedCars: ICar[];
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { hasScrolled, isEndOfScroll } = useContainerScroll({
		containerRef,
		scrollType: "vertical",
	});

	return (
		<div className="max-w-[90dvw] mx-auto relative group min-h-[50dvh]">
			{hasScrolled && (
				<div className="hover:shadow-xl hidden group-hover:flex absolute top-[35%] bg-white shadow w-16 p-6 h-16 z-20 left-2 rounded-full justify-center items-center animate__animated animate__fadeInLeft animate__faster cursor-pointer">
					<ArrowBackIos />
				</div>
			)}
			<div
				className="flex overflow-x-scroll pb-10 hide-scroll-bar group gap-2 relative"
				ref={containerRef}>
				{highlightedCars
					.map((car, i) => {
						return (
							<CarHighlightCard.CarHighLightWithDetailsCard
								car={car}
								key={i}
							/>
						);
					})
					.slice(1)}
			</div>
			{!isEndOfScroll && (
				<div className="hover:shadow-xl hidden group-hover:flex absolute top-[35%] bg-white shadow w-16 p-6 h-16 right-2 rounded-full justify-center items-center animate__animated animate__fadeInRight animate__faster cursor-pointer">
					<ArrowForwardIosOutlined />
				</div>
			)}
		</div>
	);
};

export default ShowCaseTopDealCars;
