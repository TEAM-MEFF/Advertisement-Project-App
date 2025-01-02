/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"theme-color": "#0E345A",
			},
			animation: {
				bounce: "bounce 2s infinite ease-in-out",
				ping: "ping 3s infinite ease-in-out",
			},
		},
	},
	plugins: [],
};
