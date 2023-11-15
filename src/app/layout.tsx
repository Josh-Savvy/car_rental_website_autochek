import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RootLayout from "@/components/ui/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "car_rental_app",
		default: "Automobile - Car Rental Website",
	},
};

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<RootLayout>{children}</RootLayout>
			</body>
		</html>
	);
}
