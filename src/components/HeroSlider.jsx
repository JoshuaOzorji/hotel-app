import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RoomContext } from "../context/RoomContext";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import BookForm from "./BookForm";
const HeroSlider = () => {
	const { slideImages } = useContext(RoomContext);
	return (
		<div className="relative">
			<Swiper
				modules={[EffectFade, Autoplay]}
				effect={"fade"}
				loop={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				className="sm:max-h-screen lg:h-screen ">
				{slideImages.map((slide, index) => {
					return (
						<SwiperSlide
							className="h-full relative flex justify-center items-center"
							key={index}>
							<div className="relative w-full h-full">
								<img src={slide.bg} />
								<div className="bg-black absolute w-screen h-screen bg-black/50 "></div>
							</div>
							<BookForm className="md:flex sm:hidden" />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default HeroSlider;
