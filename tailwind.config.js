/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
		screens: {
      'xs': '320px',
      'sm': '520px',
      'md': '768px',
      'lg': '950px',
      'xl': '1100px',
      '2xl': '1220px',
    },
    extend: {
			flex: {
				'1/2': '0 0 50%',
				'main': '1 0 auto'
			},
			maxWidth: {
				'container': "1100px"
			}, 
			backgroundColor: {
				'app': "#020917", 
				'header': "#02161e",
			},
			backgroundImage: {
        'greeting': "url('/public/assets/block1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
			colors:{
				'orange': "#ff665b",
				'second': "#02161e"
				
			}
		},
  },
  plugins: [],
}
