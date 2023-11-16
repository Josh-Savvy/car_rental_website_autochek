"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import Calendar from "react-calendar";

const ExploreCarsNavPickUpDate = ({
	openCalendar,
	setOpenCalendar,
}: {
	openCalendar: "pickupCalendar" | "returnCalendar" | false;
	setOpenCalendar: Dispatch<
		SetStateAction<"pickupCalendar" | "returnCalendar" | false>
	>;
}) => {
	return (
		<div className="">
			<div
				className="flex items-center gap-3 cursor-pointer select-none"
				onClick={() => {
					if (!openCalendar) setOpenCalendar("pickupCalendar");
					setOpenCalendar(false);
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
				<div className="absolute top-16 md:left-[30%] w-full left-0 z-20">
					<Calendar
						// className="bg-white rounded shadow p-3 px-5 w-auto sm:min-w-[50vw] flex items-center flex-col gap-2"
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

export default ExploreCarsNavPickUpDate;
