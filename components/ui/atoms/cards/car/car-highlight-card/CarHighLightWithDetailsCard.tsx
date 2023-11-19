/* eslint-disable @next/next/no-img-element */
import ICar from "@/interfaces/car.interface";
import React, { memo } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SpeedIcon from "@mui/icons-material/Speed";
import { GearTransmissionIcon } from "../../../icons";
import { PrimaryButton } from "../../../buttons";
import { motion } from "framer-motion";
import CarHighlightSkeletonCard from "../../../loaders/card-skeletons/CarHighlightSkeletonCard";
import classNames from "classnames";

interface CarHighLightWithDetailsCardProps {
	car: ICar;
	loading: boolean;
	className?: string;
}

const CarHighLightWithDetailsCardComp = (
	props: CarHighLightWithDetailsCardProps,
) => {
	const { car, loading, className } = props;
	const ImageSection = () => (
		<div className="h-[55%] w-full rounded-[10px] overflow-hidden relative">
			<img
				src={car.imageUrl || ""}
				alt={car.title}
				// className="w-full h-full duration-300 group-hover:scale-105 object-cover bg-[#F7F4F3] z-10 relative"
				className="w-full h-full duration-300 object-cover bg-[#F7F4F3] hover:scale-105 z-10 relative"
				loading="lazy"
			/>
			<div className="absolute top-0 bg-[#F7F4F3] w-full h-full animate__animated animate__fadeIn animate__infinite" />
		</div>
	);

	const DetailSection = () => (
		<div className="grid gap-1 mt-3">
			<div className="flex items-center gap-1">
				<StarOutlinedIcon fontSize="small" className="text-[#FE5C3C]" />
				{car.gradeScore ? (
					<>
						<span className="font-[500] text-[#666]">
							{car?.gradeScore.toFixed(1)}
						</span>
						<span className="font-[500] text-[#666]">
							(50+ Reviews)
						</span>
					</>
				) : (
					<span className="font-[500] text-[#666]">No reviews</span>
				)}
			</div>
			<h1 className="text-xl font-semibold px-1">{car.title}</h1>
			<div className="flex justify-between items-center mt-5 text-[#444]">
				<div className="flex items-center gap-2">
					<SpeedIcon
						fontSize="inherit"
						className="text-2xl text-[#444]"
					/>
					<p className="text-sm">
						{car.mileage.toLocaleString()} {car.mileageUnit}
					</p>
				</div>
				<div className="flex items-center gap-2">
					<GearTransmissionIcon size={20} />
					<p className="text-sm capitalize">{car.transmission}</p>
				</div>
			</div>
			<div className="hidden sm:flex justify-between items-center mt-4 text-[#444]">
				<div className="flex items-center gap-2">
					<LocalGasStationIcon className="text-[#444]" />
					<p className="text-sm capitalize">{car.fuelType}</p>
				</div>
				<div className="flex items-center gap-2">
					<FmdGoodOutlinedIcon fontSize="medium" />
					<p className="text-sm capitalize">{car.state}</p>
				</div>
			</div>
			<div className="flex justify-between items-center mt-5 text-[#444]">
				{car.installment !== 0 ? (
					<>
						<h1 className="text-[#000] text-xl font-medium flex gap-1">
							₦{car.installment.toLocaleString()}
							<span className="text-[#444]">/day</span>
						</h1>
						<PrimaryButton
							buttonText="Rent Now"
							className="p-2 px-5 rounded text-white"
						/>
					</>
				) : (
					<div className="text-[#d31119] text-lg font-medium text-center">
						Unavailable
					</div>
				)}
			</div>
		</div>
	);

	return (
		<div className="inline-block px-3 animate__animated animate__fadeIn snap-start group">
			{!loading ? (
				<div
					className={classNames(
						`overflow-hidden rounded-[10px] p-4 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out w-[320px] sm:w-[385px] h-[425px] sm:h-[525px] max-w-sm 2xl:max-w-md`,
						className,
					)}>
					<ImageSection />
					<DetailSection />
				</div>
			) : (
				<CarHighlightSkeletonCard.Main />
			)}
		</div>
	);
};
const CarHighLightWithDetailsCard = memo(CarHighLightWithDetailsCardComp);

export default CarHighLightWithDetailsCard;
