import HomepageHero from "@/components/ui/organisms/homepage/hero";
import ExploreTopDeals from "@/components/ui/organisms/homepage/explore-top-deals";
import React, { Fragment } from "react";
import PickUpLocationNav from "@/components/ui/organisms/homepage/location-pickup-nav";
import WhyChooseUs from "@/components/ui/organisms/homepage/why-choose-us";
import HomepageTestimonialsSection from "@/components/ui/organisms/homepage/testimonials-section";
import DownloadSection from "@/components/ui/organisms/homepage/download-section";
import ReadOurStories from "@/components/ui/organisms/homepage/story-section";

const HomepageTemplate = () => {
	return (
		<Fragment>
			<HomepageHero />
			<div className="sm:block hidden">
				<PickUpLocationNav />
			</div>
			<ExploreTopDeals />
			<WhyChooseUs />
			<HomepageTestimonialsSection />
			<DownloadSection />
			<ReadOurStories />
		</Fragment>
	);
};

export default HomepageTemplate;
