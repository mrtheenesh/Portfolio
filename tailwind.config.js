// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {
// 			backdropBlur: {
// 				sm: '4px',
// 			  },
			
			
// 		  },
// 		},
// 	plugins: [],
// }

// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceXY: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(150px, -100px)" },
          "50%": { transform: "translate(-100px, 120px)" },
          "75%": { transform: "translate(200px, 80px)" },
        },
      },
      animation: {
        float: "bounceXY 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
