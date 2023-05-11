import { Config } from "tailwindcss"

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
} satisfies Config
