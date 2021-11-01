var path = require("path");
var fs = require("fs");
const http = require("http");
const hostname = "localhost";
const port = 5000;

const server = http.createServer(function (req, res) {
  console.log(`Request for ${req.url} by method ${req.method}`);
  if (req.method === "GET") {
    let fileUrl = req.url;
    if (fileUrl === "/") {
      res.statusCode = 200;
      res.setHeader("Contect-Type", "text/html");
      res.end(`<html><body><h1>Home Page</h1></body></html>`);
    } else if(fileUrl === "/about"){
        res.statusCode = 200;
        res.setHeader("Contect-Type", "text/html");
        res.end(`<html><body><h1>About Page</h1></body></html>`);
    } else if(fileUrl === "/contact"){
        res.statusCode = 200;
        res.setHeader("Contect-Type", "text/html");
        res.end(`<html><body><h1>Contact Page</h1></body></html>`);
    } else {
        res.statusCode = 404;
        res.setHeader("Contect-Type", "text/html");
        res.end(`<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`);
    }
  }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
