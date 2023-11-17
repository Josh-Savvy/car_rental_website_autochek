import React, { memo, useEffect, useRef, useState } from "react";
import { PrimaryButton } from "@/components/ui/atoms/buttons";
import ExploreCarsNavLocation from "./PickUpLocation";
import ExploreCarsNavPickUpDate from "./PickUpDateSelector";
import ExploreCarsNavReturnDate from "./ReturnDateSelector";
import { AnimationOnScroll } from "react-animation-on-scroll";

const PickUpLocationNavComponent = () => {
	const [selectQuery, setSelectQuery] = useState<string>("");
	const [openCalendar, setOpenCalendar] = useState<
		"pickupCalendar" | "returnCalendar" | false
	>(false);

	return (
		<section className="pt-10 md:pt-[20dvh] min-h-[30dvh] relative z-20">
			<AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
				<div className="bg-white shadow-lg flex flex-row gap-10 xl:gap-0 flex-wrap lg:flex-nowrap justify-between items-center mx-6 sm:mx-auto p-4 px-20 md:p-6 rounded-lg sm:max-w-[75dvw] 2xl:max-w-[50dvw] relative z-50">
					<ExploreCarsNavLocation />
					<ExploreCarsNavPickUpDate
						openCalendar={openCalendar}
						setOpenCalendar={setOpenCalendar}
					/>
					<ExploreCarsNavReturnDate
						openCalendar={openCalendar}
						setOpenCalendar={setOpenCalendar}
					/>
					<PrimaryButton
						buttonText="Search"
						className="text-white p-2 px-6 hover:bg-[#b23f28] duration-300 w-full lg:w-auto flex justify-center items-center"
					/>
				</div>
			</AnimationOnScroll>
		</section>
	);
};
const PickUpLocationNav = memo(PickUpLocationNavComponent);
export default PickUpLocationNav;
