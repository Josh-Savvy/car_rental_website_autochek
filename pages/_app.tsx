import React, { useEffect, useState } from "react";
import "../public/styles/globals.css";
import "../public/styles/nprogress.css";
import "animate.css";
import "animate.css/animate.min.css";
import "react-calendar/dist/Calendar.css";
import { Fragment } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RootLayout from "@/components/ui/layout";
import PagePreLoader from "@/components/ui/atoms/loaders/PagePreLoader";
import NProgress from "nprogress";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [initialLoad, setInitialLoad] = useState<boolean>(true);

	useEffect(() => {
		const handleStart = () => {
			NProgress.start();
		};
		const handleStop = () => {
			NProgress.done();
		};
		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleStop);
		router.events.on("routeChangeError", handleStop);
		const timeout = setTimeout(() => {
			setInitialLoad(false);
		}, 4000);
		return () => {
			clearTimeout(timeout);
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleStop);
			router.events.off("routeChangeError", handleStop);
		};
	}, [router]);

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
				<ToastContainer limit={1} />
				{/* <PagePreLoader /> */}
				<Component {...pageProps} />
			</RootLayout>
		</Fragment>
	);
}
