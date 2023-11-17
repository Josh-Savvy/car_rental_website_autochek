import { PrimaryButton } from "@/components/ui/atoms/buttons";
import { SearchIcon } from "@/components/ui/atoms/icons";
import PickUpLocationNav from "@/components/ui/organisms/homepage/location-pickup-nav";
import useCars from "@/hooks/cars/useCars";
import { GetCarsResponseType } from "@/interfaces/api-response.interface";
import ICar from "@/interfaces/car.interface";
import React, { useState } from "react";

type SearchFilter = {
	states: ICar["state"][];
};

const SearchPageTemplate = ({
	searchResults,
}: {
	searchResults: GetCarsResponseType[];
}) => {
	const {} = useCars();
	const [filters, setFilters] = useState<SearchFilter[] | null>([
		{ states: ["skdjhd", "sdlkfjhdjskl"] },
	]);

	return (
		<section className="min-h-screen">
			<div className="mt-10">
				<div className="bg-white flex items-center mx-auto max-w-md rounded-lg overflow-hidden gap-4 px-1">
					<input
						placeholder="Enter keyword.. e.g Toyota, Sienna, Audi..."
						type="text"
						className="bg-transparent focus:ring-0 outline-none p-4 flex-grow placeholder:font-[300]"
					/>
					<PrimaryButton
						type="submit"
						buttonText=""
						icon={<SearchIcon size={30} color="white" />}
						className="p-2"
					/>
				</div>
				<div className="bg-white p-3 flex flex-col item-center mx-auto justify-center max-w-sm mt-5">
					<h1>Filter - </h1>
					{filters ? (
						<div className="">
							{filters.map((fil, ind) => (
								<div className="" key={ind}>
									{fil.states && (
										<div className="flex flex-col items-start gap-3">
											States
											{fil.states.map((state, si) => (
												<span
													className="flex items-center gap-2"
													key={si}>
													<input
														className="ml-1"
														type="radio"
														value={state}
													/>
													{state}
												</span>
											))}
										</div>
									)}
								</div>
							))}
						</div>
					) : (
						"No filters"
					)}
				</div>
			</div>
		</section>
	);
};

export default SearchPageTemplate;
