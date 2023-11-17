import ICar, { ICarMake } from "@/interfaces/car.interface";
import React, { useEffect, useState } from "react";
import * as API from "@/services/api";

const useCars = (props?: { query?: string }) => {
	const [highlightedCars, setHighlightedCars] = useState<ICar[]>([]);
	const [carBrands, setCarBrands] = useState<ICarMake[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	// Fetch Car Brands
	useEffect(() => {
		(async function () {
			const brands = await API.getCarBrands();
			setCarBrands(brands.makeList);
		})()
			.then(() => {})
			.catch(() => {
				setLoading(false);
				console.log("Network Error -  API Request Error");
			});
	}, []);

	// Fetch Cars Based on Query
	useEffect(() => {
		(async function () {
			if (!loading) setLoading(true);
			const cars = await API.searchCars({ query: props?.query || "" });
			setHighlightedCars(cars.result);
			console.log(cars);
		})()
			.then(() => {
				setLoading(false);
				scrollBy({ left: 0, behavior: "smooth" });
			})
			.catch(() => {
				setLoading(false);

				console.log("Network Error -  API Request Error");
			});
	}, [props?.query]);

	return { cars: highlightedCars, carBrands, loading };
};

export default useCars;
