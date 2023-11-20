import useCars from "@/hooks/cars/useCars";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import SearchBarComponent from "@/components/ui/organisms/searchpage/search-bar";
import SearchpageFilterSection from "@/components/ui/organisms/searchpage/filter-section";
import SearchPageResults from "@/components/ui/organisms/searchpage/search-page-results";

const SearchPageTemplate = () => {
	const router = useRouter();
	const queryString = router.asPath.split("?")[1];

	const { cars, carsLoading, pagination } = useCars({
		query: queryString,
	});

	return (
		<section className="min-h-screen">
			<div className="mt-10 flex flex-col gap-2 items-center">
				<div className="sticky h-full min-h-[10vh] py-5 top-0 z-20 w-full bg-[#f3f3f3]/50 backdrop-blur-sm">
					<SearchBarComponent
						showFilterBtn
						// onSubmit={(value) => setSearchQuery(value)}
					/>
				</div>
				<SearchPageResults
					{...{
						loading: carsLoading,
						pagination,
						result: cars,
						searchQuery: "",
					}}
				/>
			</div>
		</section>
	);
};

export default SearchPageTemplate;
