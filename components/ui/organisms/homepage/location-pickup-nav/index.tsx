import React, { memo, useEffect, useRef, useState } from "react";
import { PrimaryButton } from "@/components/ui/atoms/buttons";
import PickUpLocation from "./PickUpLocation";
import PickUpDateSelector from "./PickUpDateSelector";
import ReturnDateSelector from "./ReturnDateSelector";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useRouter } from "next/router";
import classNames from "classnames";

const PickUpLocationNavComponent = ({
	animate = true,
}: {
	animate?: boolean;
}) => {
	const router = useRouter();
	const [selectQuery, setSelectQuery] = useState<string>("");
	const [openCalendar, setOpenCalendar] = useState<
		"pickupCalendar" | "returnCalendar" | false
	>(false);
	const handleSearch = () => {
		//
	};
	return (
		<section className={"pt-10 md:pt-[20dvh] min-h-[20dvh] relative z-20"}>
			{animate ? (
				<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
					<div className="bg-white shadow-lg flex flex-row gap-10 xl:gap-0 flex-wrap lg:flex-nowrap justify-between items-center mx-6 sm:mx-auto p-4 px-20 md:p-6 rounded-lg sm:max-w-[75dvw] lg:max-w-[55dvw] 2xl:max-w-[40dvw] relative z-50">
						<PickUpLocation />
						<PickUpDateSelector
							openCalendar={openCalendar}
							setOpenCalendar={setOpenCalendar}
						/>
						<ReturnDateSelector
							openCalendar={openCalendar}
							setOpenCalendar={setOpenCalendar}
						/>
						<PrimaryButton
							onClick={handleSearch}
							buttonText="Search"
							className="text-white p-2 px-6 hover:bg-[#b23f28] duration-300 w-full lg:w-auto flex justify-center items-center"
						/>
					</div>
				</AnimationOnScroll>
			) : (
				<div
					className={
						"animate__animated animate__fadeInDown bg-white shadow-lg flex flex-row gap-10 xl:gap-0 flex-wrap lg:flex-nowrap justify-between items-center mx-6 sm:mx-auto p-4 px-20 md:p-6 rounded-lg sm:max-w-[75dvw] lg:max-w-[55dvw] 2xl:max-w-[40dvw] relative z-50"
					}>
					<PickUpLocation />
					<PickUpDateSelector
						openCalendar={openCalendar}
						setOpenCalendar={setOpenCalendar}
					/>
					<ReturnDateSelector
						openCalendar={openCalendar}
						setOpenCalendar={setOpenCalendar}
					/>
					<PrimaryButton
						onClick={handleSearch}
						buttonText="Search"
						className="text-white p-2 px-6 hover:bg-[#b23f28] duration-300 w-full lg:w-auto flex justify-center items-center"
					/>
				</div>
			)}
		</section>
	);
};
const PickUpLocationNav = memo(PickUpLocationNavComponent);
export default PickUpLocationNav;
