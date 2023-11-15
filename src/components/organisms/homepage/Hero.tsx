"use client";

import useRandomCar from "@/hooks/useRandomCar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

type SocialLinkType = { link: string; platform: string; icon: JSX.Element };

const HomepageHero = () => {
	const socials: SocialLinkType[] = [
		{ link: "#", platform: "Facebook", icon: <></> },
		{ link: "#", platform: "Instagram", icon: <></> },
		{ link: "#", platform: "Dribble", icon: <></> },
	];
	const car = useRandomCar();

	return (
		<div className="bg-[#181818] min-h-screen text-white p-3 pt-32 mb-40 lg:px-[7dvw] px-5">
			<div className="grid grid-cols-12 gap-4 items-start w-full">
				<div className="flex flex-col items-start gap-5 col-span-3">
					{socials.map((social) => (
						<a
							href={social.link}
							className="hover:bg-white/50 hover:border-transparent duration-300 border border-white animate__animated animate__fadeIn p-4 flex items-center justify-center rounded-full"
							title={social.platform}
							key={social.platform}>
							{social.icon}
						</a>
					))}
				</div>
				<div className="col-span-9">
					{}
					<div className="">
						<Image
							src={car?.imageUrl}
							className=""
							alt={car.name}
							loading="lazy"
							width={200}
							height={200}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomepageHero;
