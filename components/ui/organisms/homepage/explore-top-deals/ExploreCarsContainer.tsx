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
		carBrandsLoading,
		carsLoading,
	} = useCars({
		query: selectedBrand?.name,
	});
	const { isExtraLargeScreen } = useWindowSize();
	return (
		<>
			<TopDealBrandSelector
				carBrands={carBrands}
				loading={carBrandsLoading}
				selectedBrand={selectedBrand}
				onBrandSelect={(brand) => {
					setSelectedBrand(brand);
				}}
			/>

			{!carsLoading ? (
				highlightedCars.length >= 1 ? (
					<>
						<ShowCaseTopDealCars
							loading={carsLoading}
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
					<>
						<ShowCaseTopDealCars
							loading={carsLoading}
							highlightedCars={Array.from({
								length: isExtraLargeScreen ? 5 : 4,
							})}
						/>
					</>
				</div>
				// CarHighlightSkeletonCard
			)}
		</>
	);
};

export default ExploreCarsContainer;
