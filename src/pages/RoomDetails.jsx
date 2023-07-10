import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
import AdultDropDown from "../components/AdultDropDown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";

import ScrollToTop from "../components/ScrollToTop";

const RoomDetails = () => {
	const { rooms } = useContext(RoomContext);
	const { id } = useParams();

	const room = rooms.find((room) => {
		return room.id === Number(id);
	});

	const { name, description, facilities, price, imageLg, image, imageBg } =
		room;
	return (
		<section id="#rooms">
			<ScrollToTop />
			{/* BANNER */}
			<div className="relative w-full bg-accent">
				<img
					src={imageBg}
					className="bg-center bg-cover w-screen h-screen sm:h-[360px] md:h-screen"
				/>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 ">
					<h1 className="font-primary sm:text-2xl md:text-6xl text-white text-center">
						{name}
					</h1>
				</div>
			</div>

			<main className="bg-white w-full flex md:flex-row sm:flex-col sm:px-6 md:px-16 md:padding my-16 font-secondary">
				<div className="md:w-3/5 md:padding sm:px-0">
					<p className="font-bold sm:text-lg md:text-2xl mb-2">{name}</p>
					<p className="sm:text-base md:text-xl leading-8 pr-7">
						{description}
					</p>
					<div className="mt-6">
						<p className="font-bold  sm:text-lg md:text-2xl">
							Room Facilities:
						</p>
						<span className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-5 ">
							{facilities.map((item, index) => {
								const { name, icon } = item;
								return (
									<div className="flex items-center gap-x-3 flex-1" key={index}>
										<div className="sm:text-xl md:text-3xl text-accent">
											{icon}
										</div>

										<div className="sm:text-sm md:text-base">{name}</div>
									</div>
								);
							})}
						</span>
					</div>
				</div>
				<div className="bg-[#fff4e1] md:w-2/5 flex flex-col  p-6 gap-4 h-full">
					<div>
						<CheckIn />
					</div>
					<div>
						<CheckOut />
					</div>
					<div>
						<AdultDropDown />
					</div>
					<div>
						<KidsDropdown />
					</div>
					<button className="bg-accent text-white uppercase font-tertiary py-3 text-lg hover:bg-primary hover:text-white hover:scale-105 transition">
						book now for ₦{price}
					</button>
				</div>
			</main>
		</section>
	);
};

export default RoomDetails;
