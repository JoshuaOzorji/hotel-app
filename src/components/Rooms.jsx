import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import Room from "./Room";
import { SpinnerCircular } from "spinners-react";

const Rooms = () => {
	const { rooms, loading } = useContext(RoomContext);
	return (
		<section>
			{loading && (
				<div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center">
					<SpinnerCircular color="#c48619" />
				</div>
			)}
			<div className="sm:px-5 md:padding py-6">
				<h1 className="mx-6 text-5xl sm:text-2xl text-center font-primary">
					Rooms & Suites
				</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-3">
					{rooms.map((room) => {
						return <Room key={room.id} room={room} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Rooms;
