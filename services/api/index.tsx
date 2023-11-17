import axiosInstance from "../axiosInstance";
import {
	GetCarsResponseType,
	GetCarBrandsResponseType,
} from "@/interfaces/api-response.interface";

export const searchCars = async (args?: {
	query?: string;
}): Promise<GetCarsResponseType> => {
	const { query } = args || {};
	const response = await axiosInstance.get(`/car/search?query=${query}`);
	return response.data;
};
export const getCarBrands = async (): Promise<GetCarBrandsResponseType> => {
	const response = await axiosInstance.get("/make?popular=true");
	return response.data;
};
