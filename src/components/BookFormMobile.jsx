import React, { useContext } from "react";
import KidsDropdown from "./KidsDropdown";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import AdultDropDown from "./AdultDropDown";
import { RoomContext } from "../context/RoomContext";
import { BiSearch } from "react-icons/bi";

const BookFormMobile = () => {
	const { handleClick } = useContext(RoomContext);
	return (
		<form>
			<div className="mt-10 md:hidden sm:flex w-full  flex-col justify-evenly mx-8 ">
				<div className="sm:border md:border-0">
					<CheckIn />
				</div>

				<div className="sm:border md:border-0">
					<CheckOut />
				</div>

				<div className="sm:border md:border-0">
					<AdultDropDown />
				</div>

				<div className="sm:border md:border-0">
					<KidsDropdown />
				</div>

				<button
					onClick={(e) => handleClick(e)}
					type="submit"
					className="px-6 bg-white hover:bg-accent group py-6 sm:flex sm:flex-row sm:justify-center border md:border-0">
					<BiSearch
						className="group-hover:text-white text-center"
						size="20px"
					/>
				</button>
			</div>
		</form>
	);
};

export default BookFormMobile;
