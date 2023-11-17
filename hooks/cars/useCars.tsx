import ICar, { ICarMake } from "@/interfaces/car.interface";
import React, { useEffect, useState } from "react";
import * as API from "@/services/api";

const useCars = (props?: { query?: string }) => {
	const [highlightedCars, setHighlightedCars] = useState<ICar[]>([]);
	const [carBrands, setCarBrands] = useState<ICarMake[]>([]);
	const [carBrandsLoading, setCarBrandsLoading] = useState<boolean>(true);
	const [carsLoading, setCarsLoading] = useState<boolean>(true);

	// Fetch Car Brands
	useEffect(() => {
		(async function () {
			const brands = await API.getCarBrands();
			setCarBrands(brands.makeList);
		})()
			.then(() => {
				setCarBrandsLoading(false);
			})
			.catch(() => {
				setCarBrandsLoading(false);
				console.log("Network Error -  API Request Error");
			});
	}, []);

	// Fetch Cars - Based on Query
	useEffect(() => {
		(async function () {
			if (!carsLoading) setCarsLoading(true);
			const cars = await API.searchCars({ query: props?.query || "" });
			setHighlightedCars(cars.result);
		})()
			.then(() => {
				setCarsLoading(false);
			})
			.catch(() => {
				setCarsLoading(false);
				console.log("Network Error -  API Request Error");
			});
		// return () => {
		// 	if (loading) setLoading(false);
		// };
	}, [props?.query]);

	return { cars: highlightedCars, carBrands, carsLoading, carBrandsLoading };
};

export default useCars;
