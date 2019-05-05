module.exports = function(variants) {
  return function({ addUtilities }) {
    addUtilities(
      {
        ".dim": {
          opacity: "1",
          transition: "opacity .15s ease-in",
        },

        ".color-inherit": { color: "inherit" },
      },
      variants
    )
  }
}
 