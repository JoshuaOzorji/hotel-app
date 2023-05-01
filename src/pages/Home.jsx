import React from "react";
import Rooms from "../components/Rooms";
import HeroSlider from "../components/HeroSlider";
import BookFormMobile from "../components/BookFormMobile";

function Home() {
	return (
		<div>
			<HeroSlider />
			<BookFormMobile className="md:hidden sm:flex" />
			<Rooms />
		</div>
	);
}

export default Home;
