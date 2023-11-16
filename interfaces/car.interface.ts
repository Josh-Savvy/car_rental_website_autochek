import { Key } from "react";

export default interface ICar {
	id: Key;
	title: string;
	imageUrl: string;
	year: number;
	city: string;
	state: string;
	gradeScore: number;
	sellingCondition: string;
	hasWarranty: false;
	marketplacePrice: number;
	marketplaceOldPrice: number;
	hasFinancing: true;
	mileage: number;
	mileageUnit: string;
	installment: number;
	depositReceived: false;
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
	sold: false;
	hasThreeDImage: false;
	transmission: string;
	fuelType: string;
	marketplaceVisibleDate: string;
	ccMeasurement: number;
}
