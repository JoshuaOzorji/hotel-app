/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			primary: "Gilda Display",
			secondary: "Barlow",
			tertiary: "Barlow Condensed",
		},
		container: {
			padding: {
				DEFAULT: "15px",
			},
		},
		screens: {
			sm: "320px",
			md: "768px",
			lg: "960px",
			xl: "1140px",
		},
		extend: {
			colors: {
				primary: "#0a0a0a",
				accent: {
					DEFAULT: "#c48619",
					hover: "#806941",
				},
			},
			backgroundImage: {
				room1: "url('./assets/bg/room_1.jpg')",
				room2: "",
			},
		},
	},
	plugins: [],
};
