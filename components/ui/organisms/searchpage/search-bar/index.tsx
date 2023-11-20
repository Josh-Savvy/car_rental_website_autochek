import { PrimaryButton } from "@/components/ui/atoms/buttons";
import { SearchIcon } from "@/components/ui/atoms/icons";
import { useRouter } from "next/router";
import React, {
	ChangeEvent,
	FormEvent,
	ForwardedRef,
	RefObject,
	forwardRef,
	useEffect,
	useRef,
	useState,
} from "react";
import SearchpageFilterSection from "../filter-section";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const SearchBarComponent = forwardRef(function SearchBarComponent(
	{
		query,
		onChange,
		onSubmit,
		inputRef,
		showFilterBtn = false,
	}: {
		query?: string;
		onChange?: (searchQuery: string) => void;
		onSubmit?: (searchQuery: string) => void;
		inputRef?: RefObject<HTMLInputElement>;
		showFilterBtn?: boolean;
	},
	ref: ForwardedRef<HTMLFormElement>,
) {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState<string>(query || "");
	const [filterIsVisible, setFilterIsVisible] = useState<boolean>(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (onSubmit) {
			onSubmit(searchQuery);
			return;
		}
		router.replace(`/search?query=${encodeURIComponent(searchQuery)}`);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (onChange) onChange(e.target.value);
		setSearchQuery(e.target.value);
		setTimeout(function () {
			router.replace(
				`/search?query=${encodeURIComponent(e.target.value)}`,
			);
		}, 1500);
	};

	return (
		<form
			ref={ref}
			onSubmit={handleSubmit}
			className="bg-white flex items-center mx-auto max-w-lg rounded-lg relative p-1">
			{showFilterBtn && (
				<>
					<div className="absolute top-10 w-full left-0 overflow-hidden">
						<SearchpageFilterSection
							isVisible={filterIsVisible}
							setFilterIsVisible={setFilterIsVisible}
							
						/>
					</div>
					<div className="cursor-pointer px-2">
						<FilterAltIcon
							onClick={() => setFilterIsVisible(!filterIsVisible)}
						/>
					</div>
				</>
			)}
			<input
				ref={inputRef}
				placeholder="Enter name of car.. e.g Toyota, Sienna, Audi..."
				type="text"
				className="bg-transparent focus:ring-0 outline-none p-3 flex-grow placeholder:font-[300]"
				value={searchQuery}
				onChange={handleChange}
			/>

			<PrimaryButton
				type="submit"
				buttonText=""
				icon={<SearchIcon size={30} color="white" />}
				className="p-2"
			/>
		</form>
	);
});

export default SearchBarComponent;
