
module.exports = {
  plugins: {
    ...(process.env.NODE_ENV === 'production'
        ? {
             '@fullhuman/postcss-purgecss': {
                content: ["node_modules/react-responsive-carousel/lib/**/*.css",
                 "./pages/**/*.js",
                  "./Componets/**/*.js"],
                defaultExtractor: (content) =>
                   content.match(/[\w-/:]+(?<!:)/g) || [],
             },
          }
        : {}),
    tailwindcss: {},
    autoprefixer: {},
  }
}
