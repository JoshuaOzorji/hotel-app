import React from "react";
import { Link } from "react-router-dom";
import { BsPeople, BsArrowsFullscreen } from "react-icons/bs";

const Room = ({ room }) => {
	//destructure room
	const { id, name, image, size, maxPerson, description, price } = room;
	return (
		<div className=" bg-white shadow-2xl group m-6 rounded-t-3xl">
			{/* image */}
			<div className="overflow-hidden">
				<img
					src={image}
					alt="room image"
					className="rounded-t-3xl w-full group-hover:scale-110 transition-all duration-300 h-[240px]"
				/>
			</div>

			{/* details */}
			<div className="flex flex-col items-center text-center p-8">
				<div className="flex justify-center">
					<div className="flex gap-8 font-tertiary flex-row justify-between w-full bg-slate-100 rounded-2xl shadow-xl uppercase px-4 sm:text-[12px] md:text-base">
						<div className="flex flex-row items-center">
							<BsPeople
								className="sm:w-3 sm:h-3 md:w-5 md:h-5 "
								color="#c48619"
							/>
							<span className="pl-1">Max People {maxPerson}</span>
						</div>

						<div className="flex flex-row items-center">
							<BsArrowsFullscreen
								className="sm:w-3 sm:h-3 md:w-4 md:h-4 "
								color="#c48619"
							/>
							<span className="pl-1">Size {size}</span>
						</div>
					</div>
				</div>
				<p
					name="name"
					className="font-primary h3 font-bold mt-2 line-clamp-1 sm:text-base md:text-lg">
					{name}
				</p>

				<p className="line-clamp-3 mb-4 sm:text-sm md:text-base">
					{description}
				</p>
				<Link
					to={`/room/${id}`}
					className="btn rounded-2xl btn-secondary py-2 hover:scale-105 transition px-3 sm:text-sm md:text-base">
					Book now from ₦{price}
				</Link>
			</div>
		</div>
	);
};

export default Room;
