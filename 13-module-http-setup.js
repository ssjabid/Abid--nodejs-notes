// http module setup

// req = what is coming in
// res = what we are sending back
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to our about page");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<h1>Oops! 404 Not Found</h1>
      <p>We can't find the page you are looking for</p>
      <a href="/">Back to home</a>`);
  }
});
// setup port
server.listen(5000);
