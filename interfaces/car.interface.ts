import { Key } from "react";

export default interface ICar {
	id: string | number;
	title: string;
	imageUrl: string;
	year: number;
	city: string;
	state: string;
	gradeScore?: number;
	sellingCondition: string;
	hasWarranty: boolean;
	marketplacePrice: number;
	marketplaceOldPrice: number;
	hasFinancing: boolean;
	mileage: number;
	mileageUnit: string;
	installment: number;
	depositReceived: boolean;
	loanValue: number;
	websiteUrl: string;
	stats: {
		webViewCount: number;
		webViewerCount: number;
		interestCount: number;
		testDriveCount: number;
		appViewCount: number;
		appViewerCount: number;
		processedLoanCount: number;
	};
	bodyTypeId: string;
	sold: boolean;
	hasThreeDImage: boolean;
	transmission: string;
	fuelType: string;
	marketplaceVisibleDate: string;
	ccMeasurement: number;
}
export interface ICarMake {
	id: number;
	name: string;
	imageUrl: string;
}
