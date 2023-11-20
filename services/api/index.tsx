import axiosInstance from "../axiosInstance";
import {
	GetCarsResponseType,
	GetCarBrandsResponseType,
} from "@/interfaces/api-response.interface";

export const searchCars = async (args?: {
	query?: string;
	pagination?: GetCarBrandsResponseType["pagination"];
}): Promise<GetCarsResponseType> => {
	const { query } = args || {};
	if (!query || query == "") {
		const response = await axiosInstance.get(`/car/search`);
		return response.data;
	}
	const response = await axiosInstance.get(`/car/search?${query}`);
	return response.data;
	// const response = await new Promise<{ data: GetCarsResponseType }>(
	// 	(resolve) =>
	// 		setTimeout(function () {
	// 			resolve({
	// 				data: {
	// 					pagination: {
	// 						currentPage: 1,
	// 						pageSize: 20,
	// 						total: 200,
	// 					},
	// 					result: [
	// 						{
	// 							bodyTypeId: "",
	// 							ccMeasurement: 0,
	// 							city: "Akoka",
	// 							depositReceived: false,
	// 							fuelType: "Petrol",
	// 							hasFinancing: false,
	// 							hasThreeDImage: false,
	// 							hasWarranty: true,
	// 							id: "dofdhskl",
	// 							imageUrl: "/assets/images/benz_2.png",
	// 							installment: 1203929,
	// 							loanValue: 1234922,
	// 							marketplaceOldPrice: 20394839,
	// 							marketplacePrice: 2934922,
	// 							marketplaceVisibleDate:
	// 								new Date().toLocaleDateString(),
	// 							mileage: 1232232,
	// 							mileageUnit: "km",
	// 							sellingCondition: "dofeiwuejkdsc",
	// 							sold: false,
	// 							state: "Lagos",
	// 							stats: {
	// 								appViewCount: 0,
	// 								appViewerCount: 0,
	// 								interestCount: 0,
	// 								processedLoanCount: 0,
	// 								testDriveCount: 0,
	// 								webViewCount: 0,
	// 								webViewerCount: 0,
	// 							},
	// 							title: "Range Rove Sports",
	// 							transmission: "Petol",
	// 							websiteUrl: "",
	// 							year: new Date().getFullYear(),
	// 						},
	// 						{
	// 							bodyTypeId: "",
	// 							ccMeasurement: 0,
	// 							city: "Akoka",
	// 							depositReceived: false,
	// 							fuelType: "Petrol",
	// 							hasFinancing: false,
	// 							hasThreeDImage: false,
	// 							hasWarranty: true,
	// 							id: "dofdhskl",
	// 							imageUrl: "/assets/images/benz_2.png",
	// 							installment: 1203929,
	// 							loanValue: 1234922,
	// 							marketplaceOldPrice: 20394839,
	// 							marketplacePrice: 2934922,
	// 							marketplaceVisibleDate:
	// 								new Date().toLocaleDateString(),
	// 							mileage: 1232232,
	// 							mileageUnit: "km",
	// 							sellingCondition: "dofeiwuejkdsc",
	// 							sold: false,
	// 							state: "Lagos",
	// 							stats: {
	// 								appViewCount: 0,
	// 								appViewerCount: 0,
	// 								interestCount: 0,
	// 								processedLoanCount: 0,
	// 								testDriveCount: 0,
	// 								webViewCount: 0,
	// 								webViewerCount: 0,
	// 							},
	// 							title: "Range Rove Sports",
	// 							transmission: "Petol",
	// 							websiteUrl: "",
	// 							year: new Date().getFullYear(),
	// 						},
	// 						{
	// 							bodyTypeId: "",
	// 							ccMeasurement: 0,
	// 							city: "Teteidfu",
	// 							depositReceived: false,
	// 							fuelType: "Petrol",
	// 							hasFinancing: false,
	// 							hasThreeDImage: false,
	// 							hasWarranty: true,
	// 							id: "dewefdhskl",
	// 							imageUrl: "/assets/images/benz_2.png",
	// 							installment: 1203929,
	// 							loanValue: 1234922,
	// 							marketplaceOldPrice: 20394839,
	// 							marketplacePrice: 2934922,
	// 							marketplaceVisibleDate:
	// 								new Date().toLocaleDateString(),
	// 							mileage: 1232232,
	// 							mileageUnit: "km",
	// 							sellingCondition: "dofeiwuejkdsc",
	// 							sold: false,
	// 							state: "Abuja",
	// 							stats: {
	// 								appViewCount: 0,
	// 								appViewerCount: 0,
	// 								interestCount: 0,
	// 								processedLoanCount: 0,
	// 								testDriveCount: 0,
	// 								webViewCount: 0,
	// 								webViewerCount: 0,
	// 							},
	// 							title: "Toyota Camry Sports",
	// 							transmission: "Petol",
	// 							websiteUrl: "",
	// 							year: new Date().getFullYear(),
	// 						},
	// 						{
	// 							bodyTypeId: "",
	// 							ccMeasurement: 0,
	// 							city: "Rumukoro",
	// 							depositReceived: false,
	// 							fuelType: "Petrol",
	// 							hasFinancing: false,
	// 							hasThreeDImage: false,
	// 							hasWarranty: true,
	// 							id: "dewefdhskl",
	// 							imageUrl: "/assets/images/benz_2.png",
	// 							installment: 1203929,
	// 							loanValue: 1234922,
	// 							marketplaceOldPrice: 20394839,
	// 							marketplacePrice: 2934922,
	// 							marketplaceVisibleDate:
	// 								new Date().toLocaleDateString(),
	// 							mileage: 1232232,
	// 							mileageUnit: "km",
	// 							sellingCondition: "dofeiwuejkdsc",
	// 							sold: false,
	// 							state: "Abuja",
	// 							stats: {
	// 								appViewCount: 0,
	// 								appViewerCount: 0,
	// 								interestCount: 0,
	// 								processedLoanCount: 0,
	// 								testDriveCount: 0,
	// 								webViewCount: 0,
	// 								webViewerCount: 0,
	// 							},
	// 							title: "Toyota Camry Sports",
	// 							transmission: "Petol",
	// 							websiteUrl: "",
	// 							year: new Date().getFullYear(),
	// 						},
	// 						{
	// 							bodyTypeId: "",
	// 							ccMeasurement: 0,
	// 							city: "Rumukoro",
	// 							depositReceived: false,
	// 							fuelType: "Petrol",
	// 							hasFinancing: false,
	// 							hasThreeDImage: false,
	// 							hasWarranty: true,
	// 							id: "dewefdhskl",
	// 							imageUrl: "/assets/images/benz_2.png",
	// 							installment: 1203929,
	// 							loanValue: 1234922,
	// 							marketplaceOldPrice: 20394839,
	// 							marketplacePrice: 2934922,
	// 							marketplaceVisibleDate:
	// 								new Date().toLocaleDateString(),
	// 							mileage: 1232232,
	// 							mileageUnit: "km",
	// 							sellingCondition: "dofeiwuejkdsc",
	// 							sold: false,
	// 							state: "Abuja",
	// 							stats: {
	// 								appViewCount: 0,
	// 								appViewerCount: 0,
	// 								interestCount: 0,
	// 								processedLoanCount: 0,
	// 								testDriveCount: 0,
	// 								webViewCount: 0,
	// 								webViewerCount: 0,
	// 							},
	// 							title: "Toyota Camry Sports",
	// 							transmission: "Petol",
	// 							websiteUrl: "",
	// 							year: new Date().getFullYear(),
	// 						},
	// 					],
	// 				},
	// 			});
	// 		}, 2000),
	// );
	// return response.data;
};
export const getCarBrands = async (): Promise<GetCarBrandsResponseType> => {
	const response = await axiosInstance.get("/make?popular=true");
	return response.data;
};
