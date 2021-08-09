
module.exports = {
  plugins: {
    ...(process.env.NODE_ENV === 'production'
        ? {
             '@fullhuman/postcss-purgecss': {
                content: ["node_modules/react-responsive-carousel/lib/**/*.css",
                 "./pages/**/*.js",
                  "./Componets/**/*.js"],
                  defaultExtractor: content => {
                    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
                    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
                    return broadMatches.concat(innerMatches)
                  },
             },
          }
        : {}),
    tailwindcss: {},
    autoprefixer: {},
  }
}
