//entry -> output
const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, ''),
        filename: "bundle.js"
    }
};