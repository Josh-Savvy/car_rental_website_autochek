import SearchPageTemplate from "@/components/templates/searchpage";
import ICar from "@/interfaces/car.interface";
import { GetServerSidePropsContext } from "next";
import React from "react";
import * as API from "@/services/api";
import { GetCarsResponseType } from "@/interfaces/api-response.interface";

const SearchPage = ({
	searchResults,
}: {
	searchResults: GetCarsResponseType[];
}) => {
	return <SearchPageTemplate searchResults={searchResults} />;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const { query } = ctx.query;
	if (!query) return { redirect: { pathname: "/", permanent: false } };
	const searchResults: GetCarsResponseType = await API.searchCars({
		query: query as string,
	});
	return { props: { searchResults } };
};

export default SearchPage;
