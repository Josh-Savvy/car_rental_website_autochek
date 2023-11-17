import React from "react";
import SectionTitle from "@/components/ui/atoms/cards/common/SectionTitle";
import ExploreCarsContainer from "./ExploreCarsContainer";

const ExploreTopDeals = () => {
	return (
		<section className="pt-10 md:pt-[5dvh] my-5 mb-10 min-h-[80dvh]">
			<SectionTitle
				animate
				title="Best Services"
				subtitle="Explore our Top Deals from Top Rated Dealers"
				classes={{
					subtitle:
						"text-4xl max-w-sm mx-auto font-semibold capitalize mb-6",
					container: "px-5",
				}}
			/>
			<ExploreCarsContainer />
		</section>
	);
};

export default ExploreTopDeals;
