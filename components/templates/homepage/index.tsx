import HomepageHero from "@/components/ui/organisms/homepage/hero";
import ExploreCars from "@/components/ui/organisms/homepage/explore";
import React, { Fragment } from "react";

const HomepageTemplate = () => {
	return (
		<Fragment>
			<HomepageHero />
			<ExploreCars />
		</Fragment>
	);
};

export default HomepageTemplate;
