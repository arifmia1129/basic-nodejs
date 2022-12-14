const path = require("path");


const myFile = __filename;

console.log(path.basename(myFile));

console.log(path.extname(myFile))

const fileInfo = {
    dir: "local/desktop",
    name: "arif",
    ext: ".png"
}

console.log(path.format(fileInfo));

console.log(path.isAbsolute(myFile))
console.log(path.isAbsolute("./math.js"));

console.log(path.parse(myFile))