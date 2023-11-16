/* eslint-disable @next/next/no-img-element */
import CarHighlightCard from "@/components/ui/atoms/cards/car/car-highlight-card";
import ICar, { ICarMake } from "@/interfaces/car.interface";
import React, { useEffect, useMemo, useState } from "react";
import * as API from "@/services/api";
import ActivityIndicator from "@/components/ui/atoms/loaders/ActivityIndicator";
import { AnimationOnScroll } from "react-animation-on-scroll";
import useWindowSize from "@/hooks/useWindowSize";

const ExploreCarsShowCase = () => {
	const [highlightedCars, setHighlightedCars] = useState<ICar[]>([]);
	const [carBrands, setCarBrands] = useState<ICarMake[]>([]);
	const [selectedBrand, setSelectedBrand] = useState<ICarMake>(carBrands[0]);

	const { isLargeScreen, isMediumScreen, isSmallScreen } = useWindowSize();

	useEffect(() => {
		(async function () {
			// Fetch Cars
			const cars = await API.getCars();
			setHighlightedCars(cars.result);
			// Fetch Car Brands
			const brands = await API.getCarBrands();
			setCarBrands(brands.makeList);
			setSelectedBrand(brands.makeList[0]);
		})()
			.then(() => {})
			.catch(() => console.log("Network Error -  API Request Error"));
	}, []);

	return (
		<>
			{carBrands.length >= 1 && (
				<div className="my-5 max-w-[65dvw] flex justify-center items-center gap-3 mx-auto">
					{carBrands
						.map((brand, i) => (
							<div
								key={i}
								onClick={() => setSelectedBrand(brand)}
								className={`p-2 px-6 flex items-center duration-300 gap-3 shadow rounded select-none cursor-pointer ${
									selectedBrand &&
									selectedBrand.id === brand.id
										? "bg-[#FE5C3C] text-white"
										: " hover:bg-[#FE5C3C] hover:text-white bg-white"
								}`}>
								<img
									src={brand.imageUrl}
									alt={brand.name}
									className={"w-[30px] h-[30px]"}
									loading="lazy"
								/>
								<p className="text-sm">
									{brand.name.split("-")[0]}
								</p>
							</div>
						))
						.slice(0, isMediumScreen ? 3 : isLargeScreen ? 5 : 1)}
				</div>
			)}
			{carBrands.length >= 1 && highlightedCars.length >= 1 ? (
				<div className="max-w-[90dvw] mx-auto">
					<div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
						<div className="flex flex-nowrap">
							{highlightedCars
								.map((car, i) => {
									return (
										// <AnimationOnScroll
										// 	animateIn="animate__slideInUp"
										// 	animatePreScroll
										// 	animateOnce
										// 	key={i}>
										<CarHighlightCard.CarHighLightWithDetailsCard
											car={car}
											key={i}
										/>
										// </AnimationOnScroll>
									);
								})
								.slice(1)}
						</div>
					</div>
				</div>
			) : (
				<div className="flex justify-center items-center my-20">
					<ActivityIndicator
						size={60}
						className="border-[#000] border-[5px]"
					/>
				</div>
			)}
		</>
	);
};

export default ExploreCarsShowCase;
