import CarHighlightCard from "@/components/ui/atoms/cards/car/car-highlight-card";
import CarHighlightSkeletonCard from "@/components/ui/atoms/loaders/card-skeletons/CarHighlightSkeletonCard";
import { GetCarsResponseType } from "@/interfaces/api-response.interface";
import ICar from "@/interfaces/car.interface";
import classNames from "classnames";
import React, { useState } from "react";

const SearchPageResults = (props: {
	result: ICar[];
	loading: boolean;
	searchQuery?: string;
	filter?: string;
	pagination: GetCarsResponseType["pagination"] | null;
}) => {
	const { searchQuery, loading, result, pagination, filter } = props;
	const [currentPaginationIndex, setCurrentPaginationIndex] = useState<number>(1);
	const PAGINATION_THRESHOLD = 10;
	return (
		<>
			{searchQuery && result.length > 0 && (
				<h1 className="flex items-center w-full mx-auto justify-center text-xl font-medium">
					{`Showing ${result.length} of
					${pagination?.total}
					${pagination?.total && pagination?.total > 1 ? "results" : "result"}`}
				</h1>
			)}
			{!loading && result.length >= 1 ? (
				<div className="my-10 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 lg:gap-10 mx-auto lg:px-12 overflow-hidden">
					{result.map((car, i) => {
						return <CarHighlightCard.CarHighLightWithDetailsCard car={car} key={i} loading={loading} />;
					})}
				</div>
			) : result.length === 0 && !loading ? (
				<div className="text-xl text-center justify-center flex items-center">
					🥲 No results found for {searchQuery} <br className="" />
					[with filters - {filter}]
				</div>
			) : (
				<div className="my-10 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mx-auto lg:px-12 overflow-hidden">
					{Array.from({ length: 8 }).map((_, i) => (
						<CarHighlightSkeletonCard.Main key={i} />
					))}
				</div>
			)}
			<div className="flex mx-auto flex-wrap justify-center items-center gap-5 w-full max-w-[50dvw]">
				{pagination &&
					Array.from({ length: pagination.total })
						.map((_, i) => {
							const index = i + 1;
							return (
								<div
									key={i}
									onClick={() => setCurrentPaginationIndex(index)}
									className={classNames(
										"p-2 px-4 text-center cursor-pointer select-none rounded duration-300",
										currentPaginationIndex === index ? "bg-[#fe5c23] text-white" : "bg-gray-200 ",
									)}>
									{index}
								</div>
							);
						})
						.slice(0, pagination.total - result.length)
						.slice(0, 6)}

				{result.length > PAGINATION_THRESHOLD && (
					<>
						<span className="">.....</span>
						<div
							onClick={() => setCurrentPaginationIndex(PAGINATION_THRESHOLD)}
							className="hover:bg-[#fe5c23] hover:text-white p-2 px-4 text-center cursor-pointer select-none rounded duration-300 bg-gray-200">
							{PAGINATION_THRESHOLD}
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default SearchPageResults;
