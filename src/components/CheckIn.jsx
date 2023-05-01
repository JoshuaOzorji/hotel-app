import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar } from "react-icons/bs";

const CheckIn = () => {
	const [startDate, setStartDate] = useState(false);
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return (
		<div className="relative flex items-center justify-end transparent">
			<div className="absolute z-10 pr-2">
				<div>
					<BsCalendar className="text-accent text-base" />
				</div>
			</div>

			<DatePicker
				className="w-full py-6 pl-2"
				selected={startDate}
				placeholderText="Check in"
				color="#fff"
				onChange={(date) => setStartDate(date)}
				minDate={today}
			/>
		</div>
	);
};

export default CheckIn;
