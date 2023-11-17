/* eslint-disable @next/next/no-img-element */
import { ICarMake } from "@/interfaces/car.interface";
import React from "react";
import useWindowSize from "@/hooks/useWindowSize";

const TopDealBrandSelector = ({
	carBrands,
	selectedBrand,
	onBrandSelect,
}: {
	carBrands: ICarMake[];
	selectedBrand: ICarMake;
	onBrandSelect?: (brand: ICarMake) => void;
}) => {
	return (
		<>
			<div className="group my-10 max-w-[65dvw] md:flex-row flex-col flex-wrap gap-3 flex justify-center items-center gap-3 mx-auto relative">
				{carBrands
					.map((brand, i) => (
						<div
							key={i}
							onClick={() => {
								if (onBrandSelect) onBrandSelect(brand);
							}}
							className={`p-2 px-6 hidden md:flex items-center duration-300 gap-3 shadow rounded-lg select-none cursor-pointer animate__animated animate__fadeInUp ${
								selectedBrand && selectedBrand.id === brand.id
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
			</div>
		</>
	);
};

export default TopDealBrandSelector;
