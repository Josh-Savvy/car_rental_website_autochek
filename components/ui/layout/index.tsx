import React, { Fragment } from "react";
import Navbar from "./navbar";
import PagePreLoader from "../atoms/loaders/PagePreLoader";
import Footer from "./footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Fragment>
			{/* <PagePreLoader /> */}
			<Navbar />
			<main className="">{children}</main>
			<Footer />
		</Fragment>
	);
};

export default RootLayout;
