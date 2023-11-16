import React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const PickUpLocation = () => {
	const locations = [
		"Nigeria",
		"London",
		"USA",
		"Kenya",
		"New York",
		"South Africa",
	];
	return (
		<div className="flex items-center gap-3 cursor-pointer select-none group relative">
			<FmdGoodOutlinedIcon fontSize="inherit" className="text-2xl" />
			<p className="">Location</p>
			<ArrowDropDownOutlinedIcon
				fontSize="inherit"
				className="text-2xl duration-300 group-hover:rotate-[-180deg]"
			/>
			<div className="shadow rounded-lg group-hover:grid gap-2 hidden bg-white p-3 z-10 absolute top-6 left-0 w-full animate__animated animate__fadeIn">
				{locations.map((loc) => {
					return (
						<span
							key={loc}
							className="duration-300 w-full text-center flex p-1 cursor-pointer hover:bg-zinc-200 duration-300">
							{loc}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default PickUpLocation;
