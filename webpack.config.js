const path = require(`path`);

module.exports = {
  entry: [
    `./source/js/mobile-menu.js`,
    `./source/js/smooth-anchors.js`,
  ],
  output: {
    filename: `main.js`,
    path: path.resolve(__dirname, `./source/js`),
    iife: true
  },
  devtool: false
};
