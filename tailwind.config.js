/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  safelist: [
    "py-3",
    "py-5",
    "bg-background/80",
    "backdrop-blur-md",
    "shadow-xs",
    "opacity-100",
    "opacity-0",
    "pointer-events-auto",
    "pointer-events-none",
    "flex",
    "hidden",
    "md:flex",
    "md:hidden"
  ],
  plugins: [],
}
