import ICar from "@/interfaces/car.interface";
import axiosInstance from "../axiosInstance";

export const getCars = async (): Promise<{ makeList: ICar[] }> => {
	const response = await axiosInstance.get("/car/search");
	return response.data;
};
