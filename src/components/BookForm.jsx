import React, { useContext } from "react";
import KidsDropdown from "./KidsDropdown";
import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import AdultDropDown from "./AdultDropDown";
import { RoomContext } from "../context/RoomContext";
import { BiSearch } from "react-icons/bi";

const BookForm = () => {
	const { handleClick } = useContext(RoomContext);
	return (
		<form className="">
			<div className="backdrop-blur-sm bg-black/20 sm:hidden md:flex md:flex-row justify-evenly padding top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute bg-black">
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
					className="px-6 bg-transparent hover:bg-accent group py-6 sm:flex sm:flex-row sm:justify-center border md:border-0">
					<BiSearch
						className="group-hover:text-white text-center text-white"
						size="20px"
					/>
				</button>
			</div>
		</form>
	);
};

export default BookForm;
