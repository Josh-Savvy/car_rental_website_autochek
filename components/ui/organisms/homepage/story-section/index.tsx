/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import CarHighlightForStoryCard from "@/components/ui/atoms/cards/car/car-highlight-card/CarHighlightForStoryCard";

const ReadOurStories = () => {
	const storiesImages = [
		"/assets/images/story_car_1.png",
		"/assets/images/story_car_3.png",
		"/assets/images/story_car_2.png",
		"/assets/images/story_car_3.png",
	];
	return (
		<section className="pt-10 md:pt-[5dvh] my-5 mb-10 min-h-[80dvh]">
			<h1 className="flex text-2xl md:text-4xl sm:justify-center sm:items-center mb-10 px-10">
				Read our stories
			</h1>
			<div className="max-w-[90dvw] mx-auto relative min-h-[50dvh]">
				<div className="flex overflow-x-scroll pb-10 hide-scroll-bar gap-2 relative mx-auto">
					{storiesImages.map((imageUrl, i) => {
						return (
							<CarHighlightForStoryCard
								{...{ imageUrl }}
								key={i}
							/>
						);
					}).slice(0,3)}
				</div>
			</div>
		</section>
	);
};

export default ReadOurStories;
