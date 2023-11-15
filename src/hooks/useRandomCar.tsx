import ICar from "@/interfaces/car.interface";
import * as API from "@/services/api";
import React, { useEffect, useState } from "react";

const useRandomCar = () => {
	const [randomCar, setRandomCar] = useState<ICar>({
		id: 0,
		imageUrl: "",
		name: "kjk",
	});
	useEffect(() => {
		(async function () {
			const carsData = await API.getCars();
			setRandomCar(carsData.makeList[4]);
		})();
	}, []);
	return randomCar;
};

export default useRandomCar;
