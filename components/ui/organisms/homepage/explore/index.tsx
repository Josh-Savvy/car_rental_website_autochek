import React from "react";
import ExploreCarsNav from "./explore-cars-nav";
import ExploreCarsShowCase from "./ExploreCarsShowCase";

const ExploreCars = () => {
	return (
		<section className="pt-10 md:pt-[20dvh] my-10 min-h-[80dvh]">
			<ExploreCarsNav />
			<ExploreCarsShowCase />
		</section>
	);
};

export default ExploreCars;
