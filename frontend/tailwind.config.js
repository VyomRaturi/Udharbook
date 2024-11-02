/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cont_bg:
          "linear-gradient(60deg, rgba(0,0,0,1) 0%, rgba(20,22,25,1) 50%, rgba(18,47,89,1) 100%)",
        img_bg:
          "linear-gradient(90deg, rgba(12,40,82,1) 0%, rgba(12,40,82,0.5) 25%, rgba(20,22,25,0.34450276692708337) 50%, rgba(20,22,25,0.7282562683276436) 100%)",
        greenGrad:
          "linear-gradient(207deg, rgba(24,252,85,1) 0%, rgba(64,64,64,0.3024859602043942) 82%)",
        blueGrad:
          "linear-gradient(190deg, rgba(11,215,247,1) 0%, rgba(59,60,54,0.29408259885985644) 82%)",
      },
    },
  },
  plugins: [],
};