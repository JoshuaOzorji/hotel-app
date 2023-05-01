import React, { useState, useEffect } from "react";
import { navLinks } from "../data";
import LogoWhite from "../assets/logo-dark.svg";
import LogoDark from "../assets/logo-dark.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
	const [header, setHeader] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.scrollY > 50 ? setHeader(true) : setHeader(false);
		});
	});
	return (
		<header
			className={`${
				header
					? "bg-white rounded-b-xl sm:py-3 md:py-6 shadow-lg"
					: "bg-transparent md:py-8 sm:py-3"
			}  fixed z-50 w-full transition-all duration-500 `}>
			<div className="mx-auto flex flex-col items-center md:gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0 padding sm:gap-y-2">
				<div className="">
					<a href="/">
						{header ? (
							<img src={LogoDark} alt="logo" />
						) : (
							<img src={LogoWhite} alt="logo" />
						)}
					</a>
				</div>

				<div
					className={`${
						header ? "text-primary" : "text-white"
					} flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}>
					{navLinks.map((link) => {
						return (
							<ul key={link.id} className="">
								<a href={link.linkTo}>
									<li className="cursor-pointer hover:text-accent">
										{link.title}
									</li>
								</a>
							</ul>
						);
					})}
				</div>
			</div>
			{/* MOBILE MENU */}
			{/* <div
				className={`${
					header ? "md:hidden" : "sm:flex "
				} sm:flex md:hidden fixed z-50 w-full transition-all duration-500 `}>
				<ul className="flex flex-row gap-4 items-center">
					<li>Home</li>
					<li>Rooms</li>
					<li>Restaurant</li>
					<li>Spa</li>
				</ul>
			</div> */}
		</header>
	);
};

export default Header;
