import ICar, { ICarMake } from "@/interfaces/car.interface";
import React, { useEffect, useState } from "react";
import * as API from "@/services/api";
import { GetCarBrandsResponseType } from "@/interfaces/api-response.interface";

const useCars = (props?: {
	query?: string;
	pagination?: GetCarBrandsResponseType["pagination"];
}) => {
	const [highlightedCars, setHighlightedCars] = useState<ICar[]>([]);
	const [carBrands, setCarBrands] = useState<ICarMake[]>([]);
	const [carBrandsLoading, setCarBrandsLoading] = useState<boolean>(true);
	const [carsLoading, setCarsLoading] = useState<boolean>(true);
	const [pagination, setPagination] = useState<
		GetCarBrandsResponseType["pagination"] | null
	>(null);

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
			const cars = await API.searchCars({ query: props?.query || "", });
			setHighlightedCars(cars.result);
			setPagination(cars.pagination);
		})()
			.then(() => {
				setCarsLoading(false);
				// Simulate loading exp
				setTimeout(function () {
					setCarsLoading(false);
				}, 1000);
			})
			.catch(() => {
				setCarsLoading(false);
				console.log("Network Error -  API Request Error");
			});
		// return () => {
		// 	if (loading) setLoading(false);
		// };
	}, [props?.query]);

	return {
		cars: highlightedCars,
		carBrands,
		carsLoading,
		carBrandsLoading,
		pagination,
	};
};

export default useCars;
