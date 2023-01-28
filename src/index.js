const http = require("http");

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end();
  }
});

server.listen(4000, () => {
  console.log(`Server is running on http://localhost:4000`);
});
