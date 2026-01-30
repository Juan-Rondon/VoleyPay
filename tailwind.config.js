/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'Opensans-bold': ['OpenSans-Bold', 'sans-serif'],
        'Opensans-light': ['OpenSans-Light', 'sans-serif'],
        'Opensans-medium': ['OpenSans-Medium', 'sans-serif'],
      },

      colors: {
        primary: {
          DEFAULT: '#16A1B6',
          50: "#E8FAFC",
          100: "#BFF0F7",
          200: "#97E6F2",
          300: "#6EDCED",
          400: "#45D2E8",
          500: "#1CC8E3",
          600: "#16A1B6",
          700: "#128091",
          800: "#0D5C68",
          900: "#083840",
          950: "#031417"
        },
      },
    },
  },
  plugins: [],
}
