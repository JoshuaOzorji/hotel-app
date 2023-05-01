import React, { useContext } from "react";
import logoWhite from "../assets/logo-white.svg";
import { RoomContext } from "../context/RoomContext";
import { SiFacebook } from "react-icons/si";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	const { footerMenu } = useContext(RoomContext);
	return (
		<div className="padding bg-primary rounded-t-3xl  pt-4 flex flex-col justify-center p-0">
			<div className="flex flex-row justify-center mt-10 mb-8 ">
				<a href="/">
					<img src={logoWhite} className="cursor-pointer  w-48" />
				</a>
			</div>

			<div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3   justify-between md:mt-0 mt-10  sm:place-items-center content-start text-center">
				{footerMenu.map((menu) => (
					<div key={menu.id} className="flex flex-col ">
						<h4 className="text-accent">{menu.title}</h4>
						<ul className="list-none mt-2 cursor-pointer">
							{menu.links.map((link) => (
								<li
									key={link.name}
									className="font-secondary text-[#BAC0C3] text-[12.8px] py-[8px] hover:underline ">
									{link.name}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="text-white flex flex-row justify-center gap-8 items-center py-6">
				<SiFacebook size="20px" />
				<BsInstagram size="20px" />
				<FaTwitter size="20px" />
				<BsYoutube size="20px" />
			</div>

			<p className="font-secondary text-[#BAC0C3] text-[12.8px] text-center py-4">
				Copyright &copy; 2023. All rights reserved.
			</p>
		</div>
	);
};

export default Footer;
