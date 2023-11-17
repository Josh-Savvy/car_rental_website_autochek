import React from "react";
import SectionTitle from "@/components/ui/atoms/cards/common/SectionTitle";
import ExploreCarsContainer from "./ExploreCarsContainer";

const ExploreTopDeals = () => {
	return (
		<section className="pt-16 md:pt-[10dvh] my-10 min-h-[80dvh]">
			<SectionTitle
				animate
				title="Best Services"
				subtitle="Explore our Top Deals from Top Rated Dealers"
				classes={{
					subtitle:
						"text-4xl max-w-lg mx-auto font-semibold capitalize mb-6",
				}}
			/>
			<ExploreCarsContainer />
		</section>
	);
};

export default ExploreTopDeals;
