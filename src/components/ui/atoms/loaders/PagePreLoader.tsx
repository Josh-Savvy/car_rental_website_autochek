"use client";
import React, { useEffect, useState } from "react";

const PagePreLoader = () => {
	const [initialLoad, setInitialLoad] = useState<boolean>(true);

	useEffect(() => {
		const timeout = setTimeout(function () {
			setInitialLoad(false);
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, []);
	return initialLoad ? (
		<div className="fixed top-0 z-50 bg-black min-h-screen min-w-screen w-full">
			<div className=""></div>
		</div>
	) : (
		<></>
	);
};

export default PagePreLoader;
