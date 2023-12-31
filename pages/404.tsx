/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
	const router = useRouter();

	// useEffect(() => {
	// 	router.replace("/");
	// }, []);

	return (
		<>
			<div>
				{/* <div className="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-black bg-opacity-90">
					Loading.....
				</div> */}
				<main className="flex items-center justify-center h-screen bg-gray-100 dark:bg-dark">
					<div className="p-4 space-y-4">
						<div className="flex flex-col items-start space-y-3">
							<p className="font-semibold text-red-500 text-9xl">
								404
							</p>
							<div className="space-y-2">
								<h1
									id="pageTitle"
									className="flex items-center space-x-2">
									<svg
										aria-hidden="true"
										className="w-6 h-6 text-red-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
										/>
									</svg>
									<span className="text-xl font-medium sm:text-2xl">
										Oops! Page not found.
									</span>
								</h1>
								<p className="text-base font-normal">
									Seems like you have followed a broken link.
								</p>
								<p className="text-base font-normal">
									You may return back to the
									<Link href="/">
										<span className="px-1 text-[#FE5C3C] cursor-pointer hover:underline">
											homepage
										</span>
									</Link>
									or try using the search form.
								</p>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default NotFoundPage;
