const fs = require("fs");

fs.readFile("./test.json", (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(JSON.parse(data));
})