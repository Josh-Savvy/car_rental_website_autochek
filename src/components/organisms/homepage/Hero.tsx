import Image from "next/image";
import React from "react";
import CarOne from "@/assets/images/audi_1.webp";
import CarTwo from "@/assets/images/car_2.webp";
import { Kurale } from "next/font/google";
import AppStoreCard from "@/components/ui/atoms/cards/common/AppStoreCard";
import {
	FacebookIcon,
	InstagramIcon,
	LinkedinIcon,
} from "@/components/ui/atoms/icons";

const kurale = Kurale({ subsets: ["latin"], weight: "400" });

type SocialLinkType = { link: string; platform: string; icon: JSX.Element };

const HomepageHero = () => {
	const socials: SocialLinkType[] = [
		{
			link: "#",
			platform: "Facebook",
			icon: <FacebookIcon color="#fff" size={20} />,
		},
		{
			link: "#",
			platform: "Instagram",
			icon: <InstagramIcon color="#fff" size={20} />,
		},
		{
			link: "#",
			platform: "LinkedIn",
			icon: <LinkedinIcon color="#fff" size={20} />,
		},
	];

	const randomCarImages: string[] = [CarOne.src, CarTwo.src];
	const randomIndex = Math.floor(Math.random() * randomCarImages.length);
	const carImage = randomCarImages[randomIndex];

	return (
		<div className="bg-gradient-to-b from-[#181818] via-[#222] to-[#555] min-h-[80dvh] text-white p-3 pt-28 mb-40 lg:px-[7dvw] px-5 relative">
			<div className="flex md:gap-20 justify-between items-start w-full">
				<div className="hidden sm:flex flex-col items-start gap-5 col-span-3 min-w-[10%] md:min-w-[20%] lg:min-w-[25%]">
					{socials.map((social, i) => (
						<a
							href={social.link}
							title={social.platform}
							key={social.platform}>
							<div className="hover:bg-white/30 backdrop-blur-md hover:border-transparent duration-300 border border-white animate__animated animate__fadeIn p-2 flex items-center justify-center rounded-full">
								{social.icon}
							</div>
						</a>
					))}
				</div>
				<div className="flex flex-col justify-end md:mt-5 flex-grow">
					<h1
						className={`${kurale.className} animate__animated animate__fadeIn capitalize text-2xl xs:text-4xl sm:text-[40px] lg:text-[60px] leading-tight tracking-tight text-center`}>
						Fast and Easy way to rent <br className="my-2" />
						<span className="text-[#FE5C3C]"> a branded </span>
						car
					</h1>
					<div className="my-8 grid gap-2">
						<p className="text-center tracking-tight">
							Discover RentalX car rental options in USA with rent
							a car
						</p>
						<p className="text-center tracking-tight">
							Select from a range of car options and local
							specials.
						</p>
					</div>
					<div className="">
						<AppStoreCard />
					</div>
				</div>
			</div>
			<div className="absolute -bottom-24 md:bottom-[-20vh] -left-32 animate__animated animate__slideInLeft">
				<Image
					src={carImage}
					className=""
					alt={carImage}
					loading="lazy"
					width={900}
					height={900}
				/>
			</div>
		</div>
	);
};

export default HomepageHero;
