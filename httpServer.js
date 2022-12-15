const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('<h1>Hello Node JS Server</h1>')
})

server.listen(5000, () => {
    console.log('Server is running on PORT 5000');
})