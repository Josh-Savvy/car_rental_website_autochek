/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CarHighlightForStoryCard = (story: { imageUrl: string }) => {
	return (
		<div className="inline-block px-3 animate__animated animate__fadeIn snap-start group mx-auto">
			<div
				className={`w-[400px] sm:w-[400px] h-[410px] sm:h-[450px] max-w-sm overflow-hidden rounded-[10px] p-5 bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out`}>
				<div className="h-[40%] w-full rounded-[10px] overflow-hidden relative">
					<img
						src={story.imageUrl || ""}
						alt={""}
						className="w-auto h-auto max-w-sm max-h-sm duration-300 object-cover bg-[#F7F4F3] group-hover:scale-105 z-10 relative"
						loading="lazy"
					/>
					<div className="absolute top-0 bg-[#F7F4F3] w-full h-full" />
				</div>
				<div className="flex items-start flex-col gap-2 mt-4">
					<div className="bg-[#fe5c23] rounded text-center p-2 px-5 flex justify-start text-white">
						Tags
					</div>
					<h1 className="tracking-tight text-3xl leading-[1.05em] mb-5 sm:max-w-[80%]">
						Start a blog to reach you
					</h1>
					<p className="max-w-[80%] text-sm mb-3">
						They are very soft and don&apos;t leave any pain. He
						likes to take care of his family.
					</p>
					<Link href={"#"}>
						<div className="flex items-center justify-start gap-1 text-black hover:text-[#fe5c23] cursor-pointer select-none duration-300">
							Find out more
							<ArrowForwardIosIcon fontSize="small" />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CarHighlightForStoryCard;
