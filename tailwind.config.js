/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
		screens: {
      'xs': '320px',
      'sm': '520px',
      'md': '768px',
      'lg': '1100px',
      'xl': '1220px',
      '2xl': '1536px',
    },
    extend: {
			flex: {
				'1/3': '0 0 33.333%',
				'main': '1 0 auto'
			},
			maxWidth: {
				'container': "1100px"
			}, 
			backgroundColor: {
				'app': "#0f1f38", 
				'header': "#d44136",
			},
			colors:{
				'orange': "#d44136",
				'second': "#1b4b5a"
				
			}
		},
  },
  plugins: [],
}
