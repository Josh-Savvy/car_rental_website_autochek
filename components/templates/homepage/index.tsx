import HomepageHero from "@/components/ui/organisms/homepage/hero";
import ExploreTopDeals from "@/components/ui/organisms/homepage/explore-top-deals";
import React, { Fragment } from "react";
import PickUpLocationNav from "@/components/ui/organisms/homepage/location-pickup-nav";
import WhyChooseUs from "@/components/ui/organisms/homepage/why-choose-us";
import HomepageTetimonials from "@/components/ui/organisms/homepage/testimonials";

const HomepageTemplate = () => {
	return (
		<Fragment>
			<HomepageHero />
			<PickUpLocationNav />
			<ExploreTopDeals />
			<WhyChooseUs />
			<HomepageTetimonials />
		</Fragment>
	);
};

export default HomepageTemplate;
