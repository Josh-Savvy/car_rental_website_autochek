import axiosInstance from "../axiosInstance";
import {
	GetCarsResponseType,
	GetCarBrandsResponseType,
} from "@/interfaces/api-response.interface";

export const getCars = async (): Promise<GetCarsResponseType> => {
	
	const response = await axiosInstance.get("/car/search");
	return response.data;
};
export const getCarBrands = async (): Promise<GetCarBrandsResponseType> => {
	const response = await axiosInstance.get("/make?popular=true");
	return response.data;
};
