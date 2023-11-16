"use client";

import React, { useState } from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Calendar from "react-calendar";

const ExploreCarsNavReturnDate = () => {
	const [showCalendar, setShowCalendar] = useState<boolean>(false);
	return (
		<div className="">
			<div
				className="flex items-center gap-3 cursor-pointer select-none"
				onClick={() => setShowCalendar(!showCalendar)}>
				<CalendarMonthOutlinedIcon
					fontSize="inherit"
					className="text-2xl"
				/>
				<p className="">Return Date</p>
				<ArrowDropDownOutlinedIcon
					fontSize="inherit"
					className="text-2xl"
				/>
			</div>
			{showCalendar && (
				<div className="absolute top-16 md:left-[30%] w-full left-0 z-20">
					<Calendar
						// className="bg-white rounded shadow p-3 px-5 w-auto sm:min-w-[50vw] flex items-center flex-col gap-2"
						tileClassName=""
						activeStartDate={new Date()}
						onChange={(value) => {
							console.log("value", value);
							setShowCalendar(false);
						}}
						minDate={new Date()}
					/>
				</div>
			)}
		</div>
	);
};
export default ExploreCarsNavReturnDate;
