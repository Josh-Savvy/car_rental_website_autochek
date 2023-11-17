/* eslint-disable @next/next/no-img-element */
import ICar from "@/interfaces/car.interface";
import React, { memo } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

interface CarHighLightWithDetailsCardProps {
	index?: number;
	car: ICar;
}

const CarHighLightWithDetailsCardComp = (
	props: CarHighLightWithDetailsCardProps,
) => {
	const { car } = props;
	const ImageSection = () => (
		<div className="h-[75%] w-full rounded-[10px] overflow-hidden relative">
			<img
				src={car.imageUrl || ""}
				alt={car.title}
				// className="w-full h-full duration-300 group-hover:scale-105 object-cover bg-[#F7F4F3] z-10 relative"
				className="w-full h-full duration-300 object-cover bg-[#F7F4F3] z-10 relative"
				loading="lazy"
			/>
			<div className="absolute top-0 bg-[#F7F4F3] w-full h-full animate__animated animate__fadeIn animate__infinite" />
		</div>
	);

	const DetailSection = () => (
		<div className="grid gap-1 mt-3">
			<div className="flex items-center gap-1">
				<StarOutlinedIcon fontSize="small" className="text-[#FE5C3C]" />
				<span className="font-[500] text-[#666]">
					{car.gradeScore.toFixed(1)}
				</span>
				<span className="font-[500] text-[#666]">(50+ Reviews)</span>
			</div>
			<h1 className="text-xl font-semibold px-1">{car.title}</h1>
			<div className="">
				<div className="flex justify-between items-center">
					<p className="">{}</p>
					<p className=""></p>
				</div>
				<div className="flex justify-between items-center"></div>
			</div>
		</div>
	);

	return (
		<div className="inline-block px-3 animate__animated animate__fadeInUp snap-start group">
			<div className="w-[350px] h-[350px] max-w-sm 2xl:max-w-md overflow-hidden rounded-[10px] p-3 shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
				<ImageSection />
				<DetailSection />
			</div>
		</div>
	);
};
const CarHighLightWithDetailsCard = memo(CarHighLightWithDetailsCardComp);

export default CarHighLightWithDetailsCard;
