import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import { GooglePlayIcon } from "../../icons";

const AppStoreCard = () => {
	return (
		<div className="overflow-hidden flex items-center gap-5 w-full justify-center max-w-md mx-auto text-black">
			<a href="#" target="_blank">
				<div className="animate__animated animate__fadeInLeft hover:shadow hover:scale-[1.1] duration-300 bg-white p-2 rounded-[5px] px-4 w-full flex items-center gap-3">
					<div className="">
						<AppleIcon fontSize="large" />
					</div>
					<div className="">
						<p className="text-sm text-[#333]">Download on the</p>
						<p className="font-medium">Apple Store</p>
					</div>
				</div>
			</a>

			<a href="#" target="_blank">
				<div className="animate__animated animate__fadeInRight hover:shadow hover:scale-[1.1] duration-300 bg-white p-2 rounded-[5px] px-4 w-full flex items-center gap-3">
					<div className="">
						<GooglePlayIcon size={30} />
					</div>
					<div className="">
						<p className="text-sm text-[#333]">Get it from</p>
						<p className="font-medium">Google Play</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default AppStoreCard;
