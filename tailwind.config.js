/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",             // ana HTML dosyası
    "./src/**/*.{js,ts,jsx,tsx}" // src içindeki tüm JS/TS/JSX/TSX dosyaları
  ],
  theme: {
    extend: {}, // özel theme eklemek istersen buraya
  },
  plugins: [], // eklenti kullanacaksan buraya
}
