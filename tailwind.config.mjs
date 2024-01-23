import animated from "tailwindcss-animated"
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"primary": {
					"100": "#e4e6ee",
					"200": "var(--primary-color-200)",
					500: "#47506a",
					600: "#2a3041",
					700: "#0F121B"
				},
				secondary: {
					"base": "#0C0E16",
					200: "#b5b9ce"
				},
				"tertiary": {
					100: "#e9ebf2",
					300: "#8f9cbe",
					500: "#49546f",
					600: "#2c3446"
				}
			},
			boxShadow: {
				"btn-primary": `0px 0px 4px 0px #1d222f inset,
												0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.03),
												0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.04),
												0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.04),
												0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.05),
												0px 100px 80px 0px rgba(0, 0, 0, 0.07),
												0px 4px 4px 0px rgba(0, 0, 0, 0.25);`,
				"btn-secondary": `0px 0px 4px 0px #2C3446 inset,
												0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.03),
												0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.04),
												0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.04),
												0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.05),
												0px 100px 80px 0px rgba(0, 0, 0, 0.07),
												0px 4px 4px 0px rgba(0, 0, 0, 0.25); `,
				"card-primary": `0px 2.317px 1.854px 0px rgba(0, 0, 0, 0.04), 
													0px 5.388px 4.31px 0px rgba(0, 0, 0, 0.05), 
													0px 9.675px 7.74px 0px rgba(0, 0, 0, 0.05), 
													0px 16.057px 12.846px 0px rgba(0, 0, 0, 0.04), 
													0px 26.453px 21.163px 0px rgba(0, 0, 0, 0.03), 
													0px 46.233px 36.986px 0px rgba(0, 0, 0, 0.03), 
													0px 100px 80px 0px rgba(0, 0, 0, 0.07);`
			}
		}
	},
	plugins: [animated],
}
