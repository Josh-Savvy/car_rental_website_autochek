import { PrimaryButton } from "@/components/ui/atoms/buttons";
import { SearchIcon } from "@/components/ui/atoms/icons";
import PickUpLocationNav from "@/components/ui/organisms/homepage/location-pickup-nav";
import useCars from "@/hooks/cars/useCars";
import { GetCarsResponseType } from "@/interfaces/api-response.interface";
import ICar from "@/interfaces/car.interface";
import React, { useEffect, useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { getArrayObjectKeyValues } from "@/utils";
import { useRouter } from "next/router";
import { capitalize } from "@mui/material";
import CarHighlightCard from "@/components/ui/atoms/cards/car/car-highlight-card";

const SearchPageTemplate = () => {
	const router = useRouter();
	const { query } = router.query;
	const filters: (keyof Pick<ICar, "state" | "city">)[] = ["state", "city"];

	const [filter, setFilter] = useState<string>(filters[0]);
	const [filteredArray, setFilteredArray] = useState<string[]>([]);

	const [inputQuery, setInputQuery] = useState<string>("");
	const [filterQuery, setFilterQuery] = useState<string>("");

	const [searchQuery, setSearchQuery] = useState<string>(
		(query as string) || "",
	);
	const { cars, carsLoading } = useCars({ query: searchQuery });

	useEffect(() => {
		setFilteredArray(getArrayObjectKeyValues<ICar>(cars, filter));
	}, [filter, cars]);

	const runSearch = () =>
		setSearchQuery(`${inputQuery}&${filter}=${filterQuery}`);

	useEffect(() => {
		runSearch();
	}, [filter, filterQuery]);

	return (
		<section className="min-h-screen">
			<div className="mt-10">
				<div className="bg-white flex items-center mx-auto max-w-lg rounded-lg overflow-hidden gap-4 px-1">
					<input
						placeholder="Enter keyword.. e.g Toyota, Sienna, Audi..."
						type="text"
						className="bg-transparent focus:ring-0 outline-none p-4 flex-grow placeholder:font-[300]"
						value={inputQuery}
						onChange={(e) => {
							setInputQuery(e.target.value);
							setTimeout(() => runSearch, 1000);
						}}
					/>
					<PrimaryButton
						type="submit"
						buttonText=""
						icon={<SearchIcon size={30} color="white" />}
						className="p-2"
						onClick={() => {
							router.push(`/search?query=${inputQuery}`);
						}}
					/>
				</div>
				<div className="bg-white p-3 flex flex-col gap-3 mx-auto max-w-lg mt-5">
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
										checked={filter === fil}
										onChange={(e) =>
											setFilter(e.target.value)
										}
									/>
									{fil}
								</div>
							))}
					</div>
					{filteredArray.length >= 1 && (
						<>
							{/* {filter} */}
							<select
								onChange={(e) => {
									setSearchQuery(
										`${searchQuery}&${filter}=${e.target.value}`,
									);
									setFilterQuery(e.target.value);
								}}
								className="w-full rounded p-2 px-4">
								{filteredArray.map((fl, id) => (
									<option
										key={id}
										value={fl}
										className=""
										onClick={(e) => setFilterQuery(fl)}>
										{fl}
									</option>
								))}
							</select>
						</>
					)}
				</div>
				{/* <div className="my-3">{JSON.stringify(cars)}</div> */}
				<div className="my-10 grid md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-10 xl:gap-5 mx-auto lg:px-10">
					{cars
						.map((car, i) => {
							return (
								<CarHighlightCard.CarHighLightWithDetailsCard
									car={car}
									key={i}
									loading={carsLoading}
								/>
							);
						})
						.slice(1)}
				</div>
			</div>
		</section>
	);
};

export default SearchPageTemplate;
