// craco config
module.exports = {
  style: {
    postcss: {
      Plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
