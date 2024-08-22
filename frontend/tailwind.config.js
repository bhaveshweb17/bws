/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				k2d: ["K2D", "sans-serif"],
				alata: ["Alata", "sans-serif"],
				lato: ["Lato", "sans-serif"],
			},
			height: {
				"50dvh": "50vh",
				"60dvh": "60vh",
				"70dvh": "70vh",
				"80dvh": "80vh",
				"90dvh": "90vh",
			},
			boxShadow: {
				"text-glow":
					"0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)",
			},
		},
	},
	plugins: [],
};
