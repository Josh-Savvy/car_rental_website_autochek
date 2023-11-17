/* eslint-disable @next/next/no-img-element */
import ICar, { ICarMake } from "@/interfaces/car.interface";
import React, { useEffect, useState } from "react";
import * as API from "@/services/api";
import ActivityIndicator from "@/components/ui/atoms/loaders/ActivityIndicator";
import useWindowSize from "@/hooks/useWindowSize";
import ShowCaseTopDealCars from "./ShowCaseTopDealCars";
import TopDealBrandSelector from "./TopDealBrandSelector";
import useCars from "@/hooks/cars/useCars";

const ExploreCarsContainer = () => {
	const [selectedBrand, setSelectedBrand] = useState<ICarMake>({
		id: 1,
		imageUrl: "",
		name: "",
	});

	const {
		carBrands,
		cars: highlightedCars,
		loading,
	} = useCars({
		query: selectedBrand?.name,
	});

	return (
		<>
			{carBrands.length >= 1 && (
				<TopDealBrandSelector
					carBrands={carBrands}
					selectedBrand={selectedBrand}
					onBrandSelect={(brand) => {
						console.log(brand);
						setSelectedBrand(brand);
					}}
				/>
			)}
			{!loading ? (
				highlightedCars.length >= 1 ? (
					<>
						<ShowCaseTopDealCars
							highlightedCars={highlightedCars}
						/>
					</>
				) : (
					<div className="mx-auto flex sm:flex-row flex-col items-center justify-center min-h-[30dvh] text-xl capitalize">
						Sorry, cars of this model are Unavailable At the moment.
					</div>
				)
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

export default ExploreCarsContainer;
