/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import AppStoreCard from "@/components/ui/atoms/cards/common/AppStoreCard";
import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
} from "@/components/ui/atoms/icons";
import StatsHighlightCard from "@/components/ui/atoms/cards/car/StatsHighlightCard";

type SocialLinkType = { link: string; platform: string; icon: JSX.Element };

const HomepageHero = () => {
	const socials: SocialLinkType[] = [
		{
			link: "#",
			platform: "Facebook",
			icon: <FacebookIcon color="#fff" size={25} />,
		},
		{
			link: "#",
			platform: "Instagram",
			icon: <InstagramIcon color="#fff" size={25} />,
		},
		{
			link: "#",
			platform: "LinkedIn",
			icon: <LinkedinIcon color="#fff" size={25} />,
		},
	];

	// const randomCarImages: string[] = [CarOne.src, CarTwo.src];
	const randomCarImages: string[] = ["/assets/images/audi_1.webp"];
	const randomIndex = Math.floor(Math.random() * randomCarImages.length);
	const carImage = randomCarImages[randomIndex];

	return (
		<section className="bg-gradient-to-b from-[#181818] via-[#222] to-[#555] min-h-[90dvh] text-white p-3 pt-28 mb-40 lg:px-[7dvw] px-5 relative">
			<div className="flex justify-between items-start w-full h-full">
				<div className="hidden sm:flex flex-col items-start gap-5 lg:min-w-[15dvw] xl:min-w-[25dvw] 2xl:min-w-[15dvw] ">
					{socials.map((social, i) => (
						<a
							href={social.link}
							title={social.platform}
							key={social.platform}>
							<div className="hover:bg-white/30 backdrop-blur-md hover:border-transparent duration-300 border border-white animate__animated animate__fadeIn p-3 flex items-center justify-center rounded-full">
								{social.icon}
							</div>
						</a>
					))}
				</div>
				<div className="flex flex-col justify-end md:mt-5 flex-grow h-full gap-4">
					<h1
						style={{
							fontFamily: `Lucida Sans`,
						}}
						className={` flex gap-6 flex-col animate__animated animate__fadeInUp capitalize text-3xl xs:text-4xl sm:text-6xl xl:text-7xl 2xl:text-[85px] tracking-tight text-left sm:text-center`}>
						Fast and Easy way to rent{" "}
						{/* <br className="sm:flex hidden my-5" /> */}
						<span
							style={{
								fontFamily: `Lucida Sans`,
							}}
							className="text-[#FE5C3C]">
							{" "}
							a branded{" "}
							<span
								style={{
									fontFamily: `Lucida Sans`,
								}}
								className="text-[#fff]">
								car
							</span>
						</span>
					</h1>
					<div className="my-8 grid gap-2 text-lg">
						<p className="text-left sm:text-center tracking-tight">
							Discover RentalX car rental options in USA with rent
							a car
						</p>
						<p className="text-left sm:text-center tracking-tight">
							Select from a range of car options and local
							specials.
						</p>
					</div>
					<div className="flex z-20">
						<AppStoreCard />
					</div>
					{/* <div className="flex items-end justify-end absolute m-5 bottom-2 right-0">
						<StatsHighlightCard hp={65} speed={222} temp={92} />
					</div> */}
				</div>
			</div>
			<div className="xl:hidden absolute -bottom-44 xs:bottom-[-30dvh] sm:bottom-[-40dvh] -left-36 animate__animated animate__slideInLeft">
				<img
					src={carImage}
					className=""
					alt={carImage}
					loading="lazy"
					width={900}
					height={900}
				/>
			</div>
			<div className="absolute hidden xl:block xl:bottom-[-40dvh] 2xl:bottom-[-25dvh] -left-36 animate__animated animate__slideInLeft">
				<img
					src={carImage}
					className=""
					alt={carImage}
					loading="lazy"
					width={1050}
					height={1050}
				/>
			</div>
		</section>
	);
};

export default HomepageHero;
