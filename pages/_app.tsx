import React, { useEffect, useState } from "react";
import "../public/styles/globals.css";
import "animate.css";
import "animate.css/animate.min.css";
import "react-calendar/dist/Calendar.css";
import { Fragment } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RootLayout from "@/components/ui/layout";
import PagePreLoader from "@/components/ui/atoms/loaders/PagePreLoader";

export default function App({ Component, pageProps }: AppProps) {
	const [initialLoad, setInitialLoad] = useState<boolean>(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setInitialLoad(false);
		}, 4000);
		return () => clearTimeout(timeout);
	}, []);
	return (
		<Fragment>
			<Head>
				<title>Automobile - Car Rental Website</title>
				<link
					rel="icon"
					href="/assets/images/favicon.ico"
					type="image/x-icon"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
				/>
			</Head>
			<RootLayout>
				{initialLoad ? (
					<PagePreLoader />
				) : (
					<>
						<ToastContainer />
						<Component {...pageProps} />
					</>
				)}
			</RootLayout>
			;
		</Fragment>
	);
}
