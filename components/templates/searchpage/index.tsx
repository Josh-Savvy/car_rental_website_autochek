import { PrimaryButton } from "@/components/ui/atoms/buttons";
import { SearchIcon } from "@/components/ui/atoms/icons";
import useCars from "@/hooks/cars/useCars";
import ICar from "@/interfaces/car.interface";
import React, { useEffect, useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { buildQueryString, getArrayObjectKeyValues } from "@/utils";
import { useRouter } from "next/router";
import CarHighlightCard from "@/components/ui/atoms/cards/car/car-highlight-card";
import CarHighlightSkeletonCard from "@/components/ui/atoms/loaders/card-skeletons/CarHighlightSkeletonCard";
import { capitalize } from "@mui/material";

type ExractedFilterType = Pick<ICar, "state" | "city">;

const SearchPageTemplate = () => {
	const router = useRouter();
	const query = decodeURIComponent(router.query.query as string) || "";
	const filters: (keyof ExractedFilterType)[] = ["state", "city"];

	const initialFilter: {
		key: keyof ExractedFilterType;
		value: string;
	} = {
		key: "state",
		value: "",
	};

	const [filter, setFilter] = useState<typeof initialFilter>(initialFilter);

	const [filteredArray, setFilteredArray] = useState<string[]>([]);

	const [searchQuery, setSearchQuery] = useState<string>("");

	const queryString = buildQueryString<ExractedFilterType>(
		filter,
		searchQuery,
	);

	const { cars, carsLoading } = useCars({ query: queryString });

	useEffect(() => {
		setFilteredArray(getArrayObjectKeyValues<ICar>(cars, filter.key));
	}, [filter, cars]);

	useEffect(() => {
		if (query) setSearchQuery(query);
	}, [router]);
	useEffect(() => {
		console.log(queryString);
	}, [filter]);

	return (
		<section className="min-h-screen">
			<div className="mt-10">
				<div className="bg-white flex items-center mx-auto max-w-lg rounded-lg overflow-hidden gap-4 px-1">
					<input
						placeholder="Enter keyword.. e.g Toyota, Sienna, Audi..."
						type="text"
						className="bg-transparent focus:ring-0 outline-none p-4 flex-grow placeholder:font-[300]"
						value={capitalize(searchQuery)}
						onChange={(e) => {
							setTimeout(function () {
								setSearchQuery(e.target.value.trim());
							}, 2000);
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
									searchQuery.trim().toLowerCase(),
								)}`,
							);
						}}
					/>
				</div>
				<div className="bg-white p-3 flex flex-col gap-3 mx-auto max-w-lg mt-5">
					<div className="flex  justify-between items-center">
						<div className="flex item-center gap-3">
							<span className="flex items-center gap-1">
								<FilterAltIcon />
								<h1 className="">Filter by</h1>
							</span>
							{filters &&
								filters.map((fil, ind) => (
									<div
										key={ind}
										className="flex items-center gap-1">
										<input
											key={ind}
											value={fil}
											type="radio"
											className="p-2"
											checked={filter.key === fil}
											onChange={(e) =>
												setFilter({
													key: fil,
													value: e.target.value,
												})
											}
										/>
										{fil}
									</div>
								))}
						</div>
						{/* <span
							className="text-black float-right select-none cursor-pointer"
							onClick={() => {
								setSearchQuery("");
								setFilter(initialFilter); // Reset the filters
							}}>
							&times; Clear filters
						</span> */}
					</div>
					{filteredArray.length >= 1 && (
						<>
							{/* {filter} */}
							<select
								onChange={(e) => {
									setFilter({
										...filter,
										value: e.target.value,
									});
								}}
								className="w-full rounded p-2 px-4">
								{filteredArray.map((fl, id) => (
									<option key={id} value={fl} className="">
										{fl}
									</option>
								))}
							</select>
						</>
					)}
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
