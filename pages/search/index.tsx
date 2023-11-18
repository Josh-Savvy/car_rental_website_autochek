import SearchPageTemplate from "@/components/templates/searchpage";
import React from "react";

const SearchPage = () => {
	return (
		<>
			{/* {error ? (
				<div className="bg-rose-500 text-red-600 flex justify-center mx-auto max-w-lg p-3">
					{error}
				</div>
			) : null} */}
			<SearchPageTemplate />;
		</>
	);
};

export default SearchPage;
