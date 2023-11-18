import SearchPageTemplate from "@/components/templates/searchpage";
import ICar from "@/interfaces/car.interface";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import React from "react";
import * as API from "@/services/api";
import { GetCarsResponseType } from "@/interfaces/api-response.interface";

const SearchPage = ({
	searchResults,
}: {
	searchResults: GetCarsResponseType;
}) => {
	return <SearchPageTemplate searchResults={searchResults} />;
};

export const getServerSideProps = async (
	ctx: GetServerSidePropsContext,
): Promise<
	GetServerSidePropsResult<{ searchResults: GetCarsResponseType | [] }>
> => {
	try {
		const { query } = ctx.query;
		if (!query) {
			return { redirect: { destination: "/", permanent: false } };
		}
		const searchResults: GetCarsResponseType = await API.searchCars({
			query: query as string,
		});
		return { props: { searchResults } };
	} catch (error) {
		console.error("Error fetching data:", error);
		return { props: { searchResults: [] } };
	}
};

export default SearchPage;
