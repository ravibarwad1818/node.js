const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    fs.readFile("index.js", "utf-8", (err,data) => {
        console.log(data);
});
});

server.listen(3000, () => {
    console.log("Listening to the port no 3000");
});