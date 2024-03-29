/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", 
  ], 
  plugins: [require("daisyui")],
}

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", 
  ],  
  theme: {
		extend: {
			backgroundImage: {
				'coffee-stain': "url('/src/assets/coffeestain_bg.jpg')",
				'woman-typing': "url('/src/assets/woman-typing.jpg')",
			},
			width: {
				72: "18rem",
				80: "20rem",
				88: "22rem",
				96: "24rem",
			},
			fontFamily: {
				pixelify: ["Pixelify Sans", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				neuebit: ["Neue Bit", "sans-serif"],
				mondwest: ["Mondwest", "sans-serif"],
        spacemono: ["Space Mono", "monospace"],
			},
			fontSize: {
				xxs: "0.5rem",
			},

			daisyui: {
				defaults: {},
			},
		},
		fontFamily: {
			'sans': ['Inter'],
		},
		
	},
  daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#b994f4",
					secondary: "#ff9066",
					accent: "#f0ee8a",
					neutral: "#F7EFEA",
					"base-100": "#44332E",
					"base-content": "#f3eded",
					info: "#add8fb",
					success: "#42a08f",
					warning: "#f0ee8a",
					error: "#ff4f48",
					
				},
			},
		],
	},
  plugins: [require("daisyui")],
}