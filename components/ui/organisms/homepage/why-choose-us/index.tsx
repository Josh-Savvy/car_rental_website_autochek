import SectionTitle from "@/components/ui/atoms/cards/common/SectionTitle";
import React from "react";

const WhyChooseUs = () => {
	return (
		<section className="min-h-[50dvh] p-5 py-8 bg-white">
			<SectionTitle
				title="Why Choose us"
				subtitle="We offer best experience with our rental deals"
				classes={{
					subtitle:
						"text-4xl max-w-lg mx-auto font-semibold capitalize mb-6",
					title: "text-[#444]",
				}}
				animate
			/>
			<div className=""></div>
		</section>
	);
};

export default WhyChooseUs;
