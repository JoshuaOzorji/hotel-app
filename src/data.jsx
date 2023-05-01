// rooms images
import Room1Img from "./assets/rooms/1.jpg";
import Room1ImgLg from "./assets/rooms/1-lg.jpg";
import Room1Bg from "./assets/bg/room1.jpg";
import Room2Img from "./assets/rooms/2.jpg";
import Room2ImgLg from "./assets/rooms/2-lg.jpg";
import Room2Bg from "./assets/bg/room2.jpg";
import Room3Img from "./assets/rooms/3.jpg";
import Room3ImgLg from "./assets/rooms/3-lg.jpg";
import Room3Bg from "./assets/bg/room3.jpg";
import Room4Img from "./assets/rooms/4.jpg";
import Room4ImgLg from "./assets/rooms/4-lg.jpg";
import Room4Bg from "./assets/bg/room4.jpg";
import Room5Img from "./assets/rooms/5.jpg";
import Room5ImgLg from "./assets/rooms/5-lg.jpg";
import Room5Bg from "./assets/bg/room5.jpg";
import Room6Img from "./assets/rooms/6.jpg";
import Room6ImgLg from "./assets/rooms/6-lg.jpg";
import Room6Bg from "./assets/bg/room6.jpg";
import Room7Img from "./assets/rooms/7.jpg";
import Room7ImgLg from "./assets/rooms/7-lg.jpg";
import Room7Bg from "./assets/bg/room7.jpg";
import Room8Img from "./assets/rooms/8.jpg";
import Room8ImgLg from "./assets/rooms/8-lg.jpg";
import Room8Bg from "./assets/bg/room8.jpg";

import {
	FaWifi,
	FaCoffee,
	FaBath,
	FaParking,
	FaSwimmingPool,
	FaHotdog,
	FaStopwatch,
	FaCocktail,
} from "react-icons/fa";

export const roomData = [
	{
		id: 1,
		name: "Superior Room",
		description:
			"Extra 15 sq. m/161 sq. ft., city and mountain view, high floor, WiFi. Stretch out in this spacious art deco-style room featuring a large bathroom. Start your day with a fresh coffee prepared in your room. Catch up with work at the desk and stay connected with WiFi access. Relax on the sofa and choose one of our on-demand movies to watch on the 48-inch TV. Freshen up in the spacious bathroom that features a separate bath tub, large walk-in shower, toilet and bidet before slipping in the bathrobe and slippers. Sleeps 2 adults and 1 child on a rollaway.",
		facilities: [
			{ name: "Wifi", icon: <FaWifi /> },
			{ name: "Coffee", icon: <FaCoffee /> },
			{ name: "Bath", icon: <FaBath /> },
			{ name: "Parking Space", icon: <FaParking /> },
			{ name: "Swimming Pool", icon: <FaSwimmingPool /> },
			{ name: "Breakfast", icon: <FaHotdog /> },
			{ name: "GYM", icon: <FaStopwatch /> },
			{ name: "Drinks", icon: <FaCocktail /> },
		],
		size: 30,
		maxPerson: 4,
		price: 120000,
		image: Room1Img,
		imageLg: Room1ImgLg,
		imageBg: Room1Bg,
	},
	{
		id: 2,
		name: "Signature Room",
		description: `Panoramic city view, high floor, art deco-style room, marble bathroom with separate bath, toilet and bidet, WiFi. Enjoy a beautiful view of the city from this bright, airy guest room with large windows, king-sized bed and WiFi access. Relax on one of the chaise chairs and watch the 48-inch LED TV or freshen up in the spacious marble bathroom that features a bathtub, toilet and bidet. Wake up to a fresh cup of coffee prepared in your room and catch up on work in the flexible workstation. Sleeps 2 adults.`,
		facilities: [
			{ name: "Wifi", icon: <FaWifi /> },
			{ name: "Coffee", icon: <FaCoffee /> },
			{ name: "Bath", icon: <FaBath /> },
			{ name: "Parking Space", icon: <FaParking /> },
			{ name: "Swimming Pool", icon: <FaSwimmingPool /> },
			{ name: "Breakfast", icon: <FaHotdog /> },
			{ name: "GYM", icon: <FaStopwatch /> },
			{ name: "Drinks", icon: <FaCocktail /> },
		],
		size: 70,
		maxPerson: 6,
		price: 220000,
		image: Room2Img,
		imageLg: Room2ImgLg,
		imageBg: Room2Bg,
	},
	{
		id: 3,
		name: "King Deluxe Room",
		description: `Panoramic city view, high floor, art deco-style room, large bathroom with tub and walk-in shower. Choose this Deluxe room if you're looking for a bit of extra space and a great view of the city. The large marble bathroom features a separate bath tub, walk-in shower, toilet and bidet. Get caught up on work at the flexible working station and stay in touch with friends and family using our WiFi access. Stretch out and relax while watching an on-demand movie on the 48-inch TV. Sleeps 2 adults and 1 child.`,
		facilities: [
			{ name: "Wifi", icon: <FaWifi /> },
			{ name: "Coffee", icon: <FaCoffee /> },
			{ name: "Bath", icon: <FaBath /> },
			{ name: "Parking Space", icon: <FaParking /> },
			{ name: "Swimming Pool", icon: <FaSwimmingPool /> },
			{ name: "Breakfast", icon: <FaHotdog /> },
			{ name: "GYM", icon: <FaStopwatch /> },
			{ name: "Drinks", icon: <FaCocktail /> },
		],
		size: 50,
		maxPerson: 3,
		price: 210000,
		image: Room3Img,
		imageLg: Room3ImgLg,
		imageBg: Room3Bg,
	},
	{
		id: 4,
		name: "Two Double Beds Guest Room",
		description: `Panoramic city view, high floor, art deco-style rooms, marble bathroom with separate bath, toilet and bidet, WiFi. Treat your family to a stay in this connecting room featuring two airy bedrooms with large windows and two bathrooms. One bedroom features a king-sized bed while the other has two double beds. Relax on one of the chaise chairs and watch the 48-inch LED TV or freshen up in the spacious marble bathroom that features a bathtub, toilet and bidet. Wake up to a fresh cup of coffee prepared in your room and catch up on work in the flexible workstation.`,
		facilities: [
			{ name: "Wifi", icon: <FaWifi /> },
			{ name: "Coffee", icon: <FaCoffee /> },
			{ name: "Bath", icon: <FaBath /> },
			{ name: "Parking Space", icon: <FaParking /> },
			{ name: "Swimming Pool", icon: <FaSwimmingPool /> },
			{ name: "Breakfast", icon: <FaHotdog /> },
			{ name: "GYM", icon: <FaStopwatch /> },
			{ name: "Drinks", icon: <FaCocktail /> },
		],
		size: 50,
		maxPerson: 1,
		price: 89000,
		image: Room4Img,
		imageLg: Room4ImgLg,
		imageBg: Room4Bg,
	},
	{
		id: 5,
		name: "King Room Pool View",
		description: `Extra 15 sq. m/161 sq. ft., city and mountain view, high floor, WiFi. Stretch out in this spacious art deco-style room featuring a large bathroom. Start your day with a fresh coffee prepared in your room. Catch up with work at the desk and stay connected with WiFi access. Relax on the sofa and choose one of our on-demand movies to watch on the 48-inch TV. Freshen up in the spacious bathroom that features a separate bath tub, large walk-in shower, toilet and bidet before slipping in the bathrobe and slippers.`,
		facilities: [
			{ name: "Wifi", icon: <FaWifi /> },
			{ name: "Coffee", icon: <FaCoffee /> },
			{ name: "Bath", icon: <FaBath /> },
			{ name: "Parking Space", icon: <FaParking /> },
			{ name: "Swimming Pool", icon: <FaSwimmingPool /> },
			{ name: "Breakfast", icon: <FaHotdog /> },
			{ name: "GYM", icon: <FaStopwatch /> },
			{ name: "Drinks", icon: <FaCocktail /> },
		],
		size: 66,
		maxPerson: 5,
		price: 320000,
		image: Room5Img,
		imageLg: Room5ImgLg,
		imageBg: Room5Bg,
	},
	{
		id: 6,
		name: "King Guest Room",
		description: `Panoramic city view, high floor, art deco-style room, marble bathroom with separate bath, toilet and bidet, WiFi. Enjoy a beautiful view of the city from this bright, airy guest room with large windows, two double beds and WiFi access. Relax on one of the chaise chairs and watch the 48-inch LED TV or freshen up in the spacious marble bathroom that features a bathtub, toilet and bidet. Wake up to a fresh cup of coffee prepared in your room and catch up on work in the flexible workstation.`,
		facilities: [
			{ name: "Wifi", icon: <FaWifi /> },
			{ name: "Coffee", icon: <FaCoffee /> },
			{ name: "Bath", icon: <FaBath /> },
			{ name: "Parking Space", icon: <FaParking /> },
			{ name: "Swimming Pool", icon: <FaSwimmingPool /> },
			{ name: "Breakfast", icon: <FaHotdog /> },
			{ name: "GYM", icon: <FaStopwatch /> },
			{ name: "Drinks", icon: <FaCocktail /> },
		],
		size: 90,
		maxPerson: 2,
		price: 344000,
		image: Room6Img,
		imageLg: Room6ImgLg,
		imageBg: Room6Bg,
	},
	{
		id: 7,
		name: "Royal Room",
		description: `Panoramic pool view, high floor, art deco-style room, marble bathroom with separate bath, toilet and bidet, WiFi. Enjoy a beautiful view of the pool from this bright, airy guest room with large windows, king-sized bed and WiFi access. Relax on one of the chaise chairs and watch the 48-inch LED TV or freshen up in the spacious marble bathroom that features a bathtub, toilet and bidet. Wake up to a fresh cup of coffee prepared in your room and catch up on work in the flexible workstation.`,
		facilities: [
			{ name: "Wifi", icon: <FaWifi /> },
			{ name: "Coffee", icon: <FaCoffee /> },
			{ name: "Bath", icon: <FaBath /> },
			{ name: "Parking Space", icon: <FaParking /> },
			{ name: "Swimming Pool", icon: <FaSwimmingPool /> },
			{ name: "Breakfast", icon: <FaHotdog /> },
			{ name: "GYM", icon: <FaStopwatch /> },
			{ name: "Drinks", icon: <FaCocktail /> },
		],
		size: 84,
		maxPerson: 7,
		price: 189000,
		image: Room7Img,
		imageLg: Room7ImgLg,
		imageBg: Room7Bg,
	},
	{
		id: 8,
		name: "Family Connecting Room",
		description: `Panoramic city view, high floor, art deco-style rooms, marble bathroom with separate bath, toilet and bidet, WiFi. Treat your family to a stay in this connecting room featuring two airy bedrooms with large windows and two bathrooms. One bedroom features a king-sized bed while the other has two double beds. Relax on one of the chaise chairs and watch the 48-inch LED TV or freshen up in the spacious marble bathroom that features a bathtub, toilet and bidet. `,
		facilities: [
			{ name: "Wifi", icon: <FaWifi /> },
			{ name: "Coffee", icon: <FaCoffee /> },
			{ name: "Bath", icon: <FaBath /> },
			{ name: "Parking Space", icon: <FaParking /> },
			{ name: "Swimming Pool", icon: <FaSwimmingPool /> },
			{ name: "Breakfast", icon: <FaHotdog /> },
			{ name: "GYM", icon: <FaStopwatch /> },
			{ name: "Drinks", icon: <FaCocktail /> },
		],
		size: 148,
		maxPerson: 8,
		price: 499000,
		image: Room8Img,
		imageLg: Room8ImgLg,
		imageBg: Room8Bg,
	},
];

export const footerLinks = [
	{
		id: 1,
		title: "Quick link",
		links: [
			{
				name: "Services",
			},
			{
				name: "About",
			},
			{
				name: "Blogs",
			},
			{
				name: "Contact",
			},
		],
	},

	{
		id: 2,
		title: "Company",
		links: [
			{
				name: "Global location",
			},
			{
				name: "Mission",
			},
			{
				name: "Career",
			},
			{
				name: "Discounts",
			},
		],
	},

	{
		id: 3,
		title: "Legal information",
		links: [
			{
				name: "Term of use",
			},
			{
				name: "Privacy policy",
			},
			{
				name: "License Agreement",
			},
			{
				name: "Report Abuse",
			},
		],
	},
];

import Image1 from "./assets/heroSlider/1.jpg";
import Image2 from "./assets/heroSlider/2.jpg";
import Image3 from "./assets/heroSlider/3.jpg";

export const slides = [
	{
		title: "Your Luxury Hotel For Vacation",
		bg: Image1,
		btnText: "See our rooms",
	},
	{
		title: "Your Luxury Hotel For Vacation",
		bg: Image2,
		btnText: "See our rooms",
	},
	{
		title: "Your Luxury Hotel For Vacation",
		bg: Image3,
		btnText: "See our rooms",
	},
];

export const navLinks = [
	{
		id: 1,
		title: "Home",
		linkTo: "/",
	},

	{
		id: 2,
		title: "Rooms",
		linkTo: "#",
	},
	{
		id: 3,
		title: "Restaurant",
		linkTo: "#",
	},
	{
		id: 4,
		title: "Spa",
		linkTo: "#",
	},
];
