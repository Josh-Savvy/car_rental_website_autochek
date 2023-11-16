import HomepageHero from "@/components/ui/organisms/homepage/hero";
import ExploreCars from "@/components/ui/organisms/homepage/explore";
import React, { Fragment } from "react";
import PickUpLocationNav from "@/components/ui/organisms/homepage/explore/location-pickup-nav";

const HomepageTemplate = () => {
	return (
		<Fragment>
			<HomepageHero />
			<PickUpLocationNav />
			<ExploreCars />
		</Fragment>
	);
};

export default HomepageTemplate;
