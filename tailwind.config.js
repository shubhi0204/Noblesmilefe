// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      spacing: {
        "wide-word": "1em",
      },
      rotate: {
        'y-180': '180deg',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover'],
    },
  },
  plugins: [],
};