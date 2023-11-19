import { PrimaryButton } from "@/components/ui/atoms/buttons";
import { SearchIcon } from "@/components/ui/atoms/icons";
import useCars from "@/hooks/cars/useCars";
import ICar from "@/interfaces/car.interface";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { buildQueryString, getUniqueValuesByKey } from "@/utils";
import { useRouter } from "next/router";
import CarHighlightCard from "@/components/ui/atoms/cards/car/car-highlight-card";
import CarHighlightSkeletonCard from "@/components/ui/atoms/loaders/card-skeletons/CarHighlightSkeletonCard";

type PickedFilters = Pick<ICar, "state" | "city" | "transmission">;
type ExractedFilterType = { key: string; value: string };

const SearchPageTemplate = ({ query }: { query?: string }) => {
	const router = useRouter();
	// const query = decodeURIComponent(query as string) || "";
	const providedFilters: (keyof PickedFilters)[] = [
		"state",
		"city",
		"transmission",
	];

	const [filters, setFilters] = useState<ExractedFilterType[]>([]);

	const [searchQuery, setSearchQuery] = useState<string>(query as string);

	const queryString = buildQueryString<ExractedFilterType>(
		filters,
		searchQuery,
	);

	const { cars, carsLoading } = useCars({ query: queryString });
	const filtersValuesArray = useMemo(() => {
		return Array.from(
			new Set(
				providedFilters.map((fl) =>
					getUniqueValuesByKey<ICar>(cars, fl),
				),
			),
		);
	}, [cars]);

	const addToFilter = useCallback((key: string, value: string) => {
		setFilters((prevFiltersArray) => {
			// Check if the key already exists in the array
			const existingFilterIndex = prevFiltersArray.findIndex(
				(filter) => filter.key === key,
			);
			if (existingFilterIndex !== -1) {
				// If the key exists, update the value
				const updatedFilters = [...prevFiltersArray];
				updatedFilters[existingFilterIndex].value = value;
				return updatedFilters;
			}
			// If the key doesn't exist, add new
			return [...prevFiltersArray, { key, value }];
		});
	}, []);

	useEffect(() => {
		console.log(queryString);
		console.log(filters);
	}, [filters, searchQuery]);

	return (
		<section className="min-h-screen">
			<div className="mt-10">
				<div className="bg-white flex items-center mx-auto max-w-lg rounded-lg overflow-hidden gap-4 px-1">
					<input
						placeholder="Enter name of car.. e.g Toyota, Sienna, Audi..."
						type="text"
						className="bg-transparent focus:ring-0 outline-none p-4 flex-grow placeholder:font-[300]"
						value={searchQuery}
						onChange={(e) => {
							// setTimeout(function () {
							setSearchQuery(e.target.value);
							// }, 2000);
						}}
					/>
					<PrimaryButton
						type="submit"
						buttonText=""
						icon={<SearchIcon size={30} color="white" />}
						className="p-2"
						onClick={() => {
							router.push(
								`/search?query=${encodeURIComponent(
									searchQuery,
								)}`,
							);
						}}
					/>
				</div>
				<div className="relative bg-white p-3 flex gap-5 items-center mx-auto justify-between mt-5 w-auto max-w-2xl rounded-lg">
					<span className="flex items-center gap-1">
						<FilterAltIcon />
						<h1 className="">Filter by</h1>
					</span>
					<div className="grid gap-2">
						<div className="flex gap-3 justify-between items-center capitalize">
							{providedFilters.map((fil, ind) => (
								<div
									key={ind}
									className="flex items-center gap-1">
									{fil}
								</div>
							))}
						</div>
						<div className="flex gap-3 justify-between items-center">
							{filtersValuesArray.length >= 1 && (
								<>
									{filtersValuesArray.map((fil, ind) => {
										return (
											<select
												key={ind}
												onChange={(e) => {
													if (e.target.value)
														addToFilter(
															fil.key,
															e.target.value,
														);
												}}
												className="w-full rounded p-2 px-4">
												<option
													value=""
													className=""></option>
												{fil.values.map((fl, id) => (
													<option
														key={id}
														value={fl}
														className="">
														{fl}
													</option>
												))}
											</select>
										);
									})}
								</>
							)}
						</div>
					</div>
					{filters.length >= 1 && (
						<span
							className="absolute -bottom-6 right-1 text-black/50 hover:text-black duration-300 float-right select-none cursor-pointer"
							onClick={() => {
								setSearchQuery("");
								setFilters([]); // Reset the filters
							}}>
							&times; Clear filters
						</span>
					)}
					{/*  */}
				</div>
				{/* <div className="my-3">{JSON.stringify(cars)}</div> */}
				<div className="my-10 grid md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto lg:px-10 overflow-hidden">
					{!carsLoading && cars.length >= 1 ? (
						cars
							.map((car, i) => {
								return (
									<CarHighlightCard.CarHighLightWithDetailsCard
										car={car}
										key={i}
										loading={carsLoading}
										// className="my-5 w-full max-w-[30dvw]"
									/>
								);
							})
							.slice(1)
					) : cars.length === 0 && !carsLoading ? (
						<div>
							No results found for &quot;{searchQuery}&quot;
						</div>
					) : (
						Array.from({ length: 8 }).map((_, i) => (
							<CarHighlightSkeletonCard.Main key={i} />
						))
					)}
				</div>
			</div>
		</section>
	);
};

export default SearchPageTemplate;
