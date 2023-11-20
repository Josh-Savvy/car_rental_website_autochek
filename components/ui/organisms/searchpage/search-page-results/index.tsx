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
	pagination: GetCarsResponseType["pagination"] | null;
}) => {
	const { searchQuery, loading, result, pagination } = props;
	const [currentPaginationIndex, setCurrentPaginationIndex] =
		useState<number>(1);
	return (
		<>
			<h1 className="flex items-center w-full mx-auto justify-center text-xl font-medium">
				{`Showing ${result.length} of
					${pagination?.total}
					${pagination?.total && pagination?.total > 1 ? "results" : "result"}`}
			</h1>
			<div className="my-10 grid md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto lg:px-10 overflow-hidden">
				{!loading && result.length >= 1 ? (
					result.map((car, i) => {
						return (
							<CarHighlightCard.CarHighLightWithDetailsCard
								car={car}
								key={i}
								loading={loading}
								// className="my-5 w-full max-w-[30dvw]"
							/>
						);
					})
				) : result.length === 0 && !loading ? (
					<div>No results found</div>
				) : (
					Array.from({ length: 8 }).map((_, i) => (
						<CarHighlightSkeletonCard.Main key={i} />
					))
				)}
			</div>
			<div className="flex mx-auto flex-wrap justify-center items-center gap-5 w-full max-w-[50dvw]">
				{pagination &&
					Array.from({ length: pagination.total })
						.map((_, i) => {
							const index = i + 1;
							return (
								<div
									key={i}
									onClick={() =>
										setCurrentPaginationIndex(index)
									}
									className={classNames(
										"p-2 px-4 text-center cursor-pointer select-none rounded duration-300",
										currentPaginationIndex === index
											? "bg-[#fe5c23] text-white"
											: "bg-gray-200 ",
									)}>
									{index}
								</div>
							);
						})
						.slice(0, pagination.total - result.length)}
			</div>
		</>
	);
};

export default SearchPageResults;
