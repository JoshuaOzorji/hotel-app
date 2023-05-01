import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const lis = [
	{ name: "1 Adult" },
	{ name: "2 Adult" },
	{ name: "3 Adult" },
	{ name: "4 Adult" },
];

const AdultDropDown = () => {
	const { adults, setAdults } = useContext(RoomContext);

	return (
		<Menu as="div" className="bg-white relative py-6 ">
			<Menu.Button className="w-full h-full flex items-center justify-between font-primary gap-6 px-2 text-gray-500">
				{adults}
				<BsChevronDown />
			</Menu.Button>

			<Menu.Items
				as="ul"
				className="bg-white absolute w-full flex flex-col z-50">
				{lis.map((li, index) => {
					return (
						<Menu.Item
							onClick={() => setAdults(li.name)}
							key={index}
							as="li"
							className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer text-gray-500">
							{li.name}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
};

export default AdultDropDown;
