import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import { GooglePlayIcon } from "../../icons";
import Link from "next/link";

const AppStoreCard = () => {
	return (
		<div className="overflow-hidden xs:flex-row flex-col flex sm:flex-nowrap md:flex-wrap lg:flex-nowrap sm:items-center gap-3 sm:gap-5 w-full justify-center max-w-md sm:mx-auto text-black">
			<Link href="#" target="_blank">
				<div className="animate__animated animate__fadeInLeft hover:shadow-lg hover:scale-[1.1] duration-300 bg-white p-2 rounded-[5px] px-4 w-full flex items-center gap-3 cursor-pointer">
					<div className="">
						<AppleIcon fontSize="large" />
					</div>
					<div className="">
						<p className="text-sm text-[#333]">Download on the</p>
						<p className="font-medium lg:text-lg">Apple Store</p>
					</div>
				</div>
			</Link>

			<Link href="#" target="_blank">
				<div className="animate__animated animate__fadeInRight hover:shadow-lg hover:scale-[1.1] duration-300 bg-white p-2 rounded-[5px] px-4 w-full flex items-center gap-3 cursor-pointer">
					<div className="">
						<GooglePlayIcon size={30} />
					</div>
					<div className="">
						<p className="text-sm text-[#333]">Get it from</p>
						<p className="font-medium lg:text-lg">Google Play</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default AppStoreCard;
