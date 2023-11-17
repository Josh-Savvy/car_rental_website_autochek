import React, { Dispatch, SetStateAction, useState } from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import Calendar from "react-calendar";

const PickUpDateSelector = ({
	openCalendar,
	setOpenCalendar,
}: {
	openCalendar: "pickupCalendar" | "returnCalendar" | false;
	setOpenCalendar: Dispatch<
		SetStateAction<"pickupCalendar" | "returnCalendar" | false>
	>;
}) => {
	return (
		<div className="overflow-hidden">
			<div
				className="flex items-center gap-3 cursor-pointer select-none"
				onClick={() => {
					if (openCalendar !== "pickupCalendar")
						setOpenCalendar("pickupCalendar");
					else {
						setOpenCalendar(false);
					}
				}}>
				<EditCalendarOutlinedIcon
					fontSize="inherit"
					className="text-2xl"
				/>
				<p className="">Pick Up Date</p>
				<ArrowDropDownOutlinedIcon
					fontSize="inherit"
					className={`text-2xl ${
						openCalendar === "pickupCalendar" && "rotate-[-180deg]"
					}`}
				/>
			</div>
			{openCalendar === "pickupCalendar" && (
				<div className="absolute top-16 w-full z-50">
					<Calendar
						tileClassName=""
						activeStartDate={new Date()}
						onChange={(value) => {
							console.log("value", value);
							setOpenCalendar(false);
						}}
						minDate={new Date()}
					/>
				</div>
			)}
		</div>
	);
};

export default PickUpDateSelector;
