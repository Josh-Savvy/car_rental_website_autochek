import CarHighlightCard from "@/components/ui/atoms/cards/car/car-highlight-card";
import CarHighlightSkeletonCard from "@/components/ui/atoms/loaders/card-skeletons/CarHighlightSkeletonCard";
import { GetCarsResponseType } from "@/interfaces/api-response.interface";
import ICar from "@/interfaces/car.interface";
import React from "react";

const SearchPageResults = (props: {
	result: ICar[];
	loading: boolean;
	searchQuery: string;
	pagination: GetCarsResponseType["pagination"] | null;
}) => {
	const { searchQuery, loading, result, pagination } = props;
	return (
		<>
			<h1 className="flex items-center w-full mx-auto justify-center text-xl font-medium">
				{`Showing ${result.length} of
					${pagination?.total}
					${result.length > 1 ? "results" : "result"}`}
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
					<div>No results found for &quot;{searchQuery}&quot;</div>
				) : (
					Array.from({ length: 8 }).map((_, i) => (
						<CarHighlightSkeletonCard.Main key={i} />
					))
				)}
			</div>
			<div className="">
				{pagination &&
					Array.from({ length: pagination.pageSize }).map((_, i) => {
						return <>{_}</>;
					})}
			</div>
		</>
	);
};

export default SearchPageResults;
