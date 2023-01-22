/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
		screens: {
      'xs': '320px',
      'sm': '520px',
      'md': '768px',
      'lg': '1080px',
      'xl': '1220px',
      '2xl': '1536px',
    },
    extend: {
			maxWidth: {
				'container': "1300px"
			},
			backgroundColor: {
				'app': "#323232",
				'header': "#494949"
			},
			colors:{
				'orange': "#ff5747" 
			}
		},
  },
  plugins: [],
}
