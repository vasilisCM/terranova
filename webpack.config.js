const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    global: path.resolve(__dirname, "src/js/index.js"), // Global

    home: path.resolve(__dirname, "src/js/pages/home.js"), // Home
    skinNutrition: path.resolve(__dirname, "src/js/pages/skinNutrition.js"), // Skin Nutrition
    about: path.resolve(__dirname, "src/js/pages/about.js"), // About
    contact: path.resolve(__dirname, "src/js/pages/contact.js"), // Contact

    posts: path.resolve(__dirname, "src/js/pages/posts.js"), // Posts
    single: path.resolve(__dirname, "src/js/pages/single.js"), // Single Post

    archiveProduct: path.resolve(__dirname, "src/js/pages/archiveProduct.js"), // Archive Product
    singleProduct: path.resolve(__dirname, "src/js/pages/singleProduct.js"), // Single Product
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  watch: true,
};
