import React, { Fragment } from "react";
import Navbar from "./navbar";

const  RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Fragment>
			<Navbar />
			<main className="">{children}</main>
		</Fragment>
	);
};

export default RootLayout;
