import ICar from "@/interfaces/car.interface";
import { getUniqueValuesByKey } from "@/utils";
import React, {
	Dispatch,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import useCars from "@/hooks/cars/useCars";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

type ProvidedFiltersType = Pick<ICar, "state" | "transmission">;

type FilterType = { key: string; value: string };

const SearchpageFilterSection = ({
	isVisible,
	setFilterIsVisible,
}: {
	isVisible: boolean;
	setFilterIsVisible: Dispatch<SetStateAction<boolean>>;
}) => {
	const router = useRouter();
	const { cars } = useCars();
	const filterComponentRef = useRef<HTMLDivElement>(null);
	const providedFilters: (keyof ProvidedFiltersType)[] = [
		"state",
		"transmission",
	];

	const [currentFilters, setCurrentFilters] = useState<FilterType[]>([]);

	const filtersValuesArray = Array.from(
		new Set(
			providedFilters.map((fl) =>
				getUniqueValuesByKey<ICar>(cars, fl as keyof ICar),
			),
		),
	);

	const filterSearch = (props: FilterType) => {
		const { query } = router;
		const { key, value } = props;
		if (key && value) {
			if (!query.query) query.query = ``;
			query[key] = value.trim().toLowerCase();
		}
		router.push({
			pathname: router.pathname,
			query,
		});
		// state updates

		scrollTo({ top: 0, behavior: "smooth" });
		setFilterIsVisible(false);

		if (
			!currentFilters.some(
				(filt) => filt.key === key && value === filt.value,
			)
		) {
			setCurrentFilters((prev) => [...prev, props]);
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				filterComponentRef.current &&
				!filterComponentRef.current.contains(event.target as Node)
			) {
				setFilterIsVisible(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					ref={filterComponentRef}
					key="modal"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="relative bg-white p-3 flex flex-col gap-3 px-5 justify-between mt-5 w-full max-w-2xl rounded-lg">
					<span className="flex items-center gap-1">
						<FilterAltIcon />
						<h1 className="text-sm">Filter by</h1>
					</span>
					<div className="flex flex-col gap-3 justify-between items-start">
						{filtersValuesArray.length >= 1 && (
							<>
								{filtersValuesArray.map((fil, ind) => {
									return (
										<>
											<div
												key={ind}
												className="flex items-center gap-1 capitalize text-sm">
												{fil.key}
											</div>
											<select
												key={ind}
												onChange={(e) =>
													filterSearch({
														key: fil.key,
														value: e.target.value,
													})
												}
												className="w-full rounded p-2 px-4">
												<option value="" className="">
													{currentFilters.find(
														(filter) =>
															filter.key ===
															fil.key,
													)?.value || ""}
												</option>
												{fil.values.map((fl, id) => (
													<option
														key={id}
														value={fl}
														className="">
														{fl}
													</option>
												))}
											</select>
										</>
									);
								})}
							</>
						)}
					</div>

					{filtersValuesArray.length >= 1 && (
						<span
							className="absolute -bottom-6 right-1 text-black/50 hover:text-black duration-300 float-right select-none cursor-pointer"
							onClick={() => {
								router.push("/search");
							}}>
							&times; Clear filters
						</span>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default SearchpageFilterSection;
