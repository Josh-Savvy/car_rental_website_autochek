import React, { Fragment } from "react";
import Navbar from "./navbar";
import PagePreLoader from "../atoms/loaders/PagePreLoader";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Fragment>
			{/* <PagePreLoader /> */}
			<Navbar />
			<main className="">{children}</main>
		</Fragment>
	);
};

export default RootLayout;
