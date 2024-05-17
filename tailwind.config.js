/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
<<<<<<< HEAD
    extend: {
      rotate:{
        '270':'270deg'
      },
    },
=======
    extend: {},
>>>>>>> 51612bde9eaeaabf992a8069cd7103efe966f0f7
  },
  plugins: [require("daisyui")],
}