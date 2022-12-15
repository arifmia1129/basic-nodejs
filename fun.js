const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        res.write(data);
        res.end();
    })
})

server.listen(5000, () => {
    console.log('server is running on PORT 5000');
})