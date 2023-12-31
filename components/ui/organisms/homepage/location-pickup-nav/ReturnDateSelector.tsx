import React, { Dispatch, SetStateAction, useState } from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Calendar from "react-calendar";

const ReturnDateSelector = ({
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
					if (openCalendar !== "returnCalendar")
						setOpenCalendar("returnCalendar");
					else {
						setOpenCalendar(false);
					}
				}}>
				<CalendarMonthOutlinedIcon
					fontSize="inherit"
					className="text-2xl"
				/>
				<p className="">Return Date</p>
				<ArrowDropDownOutlinedIcon
					fontSize="inherit"
					className={`text-2xl ${
						openCalendar === "returnCalendar" && "rotate-[-180deg]"
					}`}
				/>
			</div>
			{openCalendar === "returnCalendar" && (
				<div className="absolute top-16 w-full z-20 overflow-hidden">
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
export default ReturnDateSelector;
