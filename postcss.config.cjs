// postcss.config.cjs
module.exports = {
  plugins: [
    require('tailwindcss'), // Thêm Tailwind CSS
    require('autoprefixer'), // Giữ autoprefixer
    require('postcss-nested') // Giữ postcss-nested (nếu bạn cần)
  ]
}
