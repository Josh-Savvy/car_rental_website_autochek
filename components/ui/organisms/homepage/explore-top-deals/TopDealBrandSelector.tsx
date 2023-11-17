/* eslint-disable @next/next/no-img-element */
import { ICarMake } from "@/interfaces/car.interface";
import React from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { motion } from "framer-motion";

const TopDealBrandSelector = ({
	carBrands,
	selectedBrand,
	onBrandSelect,
	loading,
}: {
	carBrands: ICarMake[];
	selectedBrand: ICarMake;
	onBrandSelect?: (brand: ICarMake) => void;
	loading: boolean;
}) => {
	return (
		<>
			<div className="group my-5 max-w-[65dvw] md:flex-row flex-col flex-wrap gap-3 flex justify-center items-center gap-3 mx-auto relative">
				{!loading && carBrands.length >= 1 ? (
					<>
						{carBrands
							.map((brand, i) => (
								<div
									key={i}
									onClick={() => {
										if (onBrandSelect) onBrandSelect(brand);
									}}
									className={`p-2 px-6 hidden md:flex items-center duration-300 gap-3 shadow rounded-lg select-none cursor-pointer animate__animated animate__fadeIn ${
										selectedBrand &&
										selectedBrand.id === brand.id
											? "bg-[#FE5C3C] text-white"
											: "hover:bg-[#FE5C3C] hover:text-white bg-white"
									}`}>
									<img
										src={brand.imageUrl}
										alt={brand.name}
										className={"w-[25px] h-[25px]"}
										loading="lazy"
									/>
									<p className="text-sm">
										{brand.name.split("-")[0]}
									</p>
								</div>
							))
							.slice(0, 5)}
						<div
							className={`p-2 px-6 font-semibold flex justify-center items-center duration-300 gap-1 shadow rounded-lg select-none cursor-pointer hover:bg-[#FE5C3C] hover:text-white bg-white `}>
							Explore <span className="md:flex hidden">20+ </span>
							<span className="md:hidden">Car Makes</span>
						</div>
					</>
				) : (
					Array.from({ length: 4 }).map((_, i) => (
						<div
							key={i}
							className={`p-2 px-6 hidden md:flex items-center duration-300 gap-3 shadow rounded-lg select-none cursor-default ${"bg-white"}`}>
							<motion.span
								className="bg-zinc-400 p-3 px-5 rounded"
								animate={{
									opacity: [0, i * 0.2 + 1, 0],
								}}
								transition={{
									duration: 2,
									ease: "linear",
									repeat: Infinity,
									repeatType: "reverse",
								}}
							/>
							<motion.p
								className="bg-zinc-300 p-2 px-10 rounded"
								animate={{
									opacity: [0, i * 0.4 + 2, 0],
								}}
								transition={{
									duration: 2,
									ease: "linear",
									repeat: Infinity,
									repeatType: "reverse",
								}}
							/>
						</div>
					))
				)}
			</div>
		</>
	);
};

export default TopDealBrandSelector;
