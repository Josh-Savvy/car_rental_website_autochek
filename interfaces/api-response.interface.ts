import ICar, { ICarMake } from "./car.interface";

export type GetCarsResponseType = {
	pagination: { currentPage: number; pageSize: number; total: number };
	result: ICar[];
};

export type GetCarBrandsResponseType = {
	pagination: { currentPage: number; pageSize: number; total: number };
	makeList: ICarMake[];
};
