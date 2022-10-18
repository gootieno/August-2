const http = require("http");
const fs = require("fs");

const getContentType = (filePath) => {
  // /css/application.css
  const extension = filePath.split(".")[1];
  console.log("extension ", extension);

  // css || jpg || other
  switch (extension) {
    case "css":
      return "text/css";
    case "jpg":
      return "image/jpeg";
    default:
      return "text/plain";
  }
};

const server = http.createServer((req, res) => {
  // Your code here
  if (req.method === "GET" && req.url.startsWith("/static")) {
    const urlParts = req.url.split("/static");
    console.log("url parts ", urlParts);

    const path = urlParts[urlParts.length - 1];
    // /css/application.css
    console.log("path ", path);
    const resBody = fs.readFileSync("./assets" + path);

    const contentType = getContentType(path);

    res.statusCode = 200;
    res.setHeader("Content-Type", contentType);
    return res.end(resBody);
  }

  if (req.method === "GET" && req.url === "/") {
    const resBody = fs.readFileSync("index.html", "utf-8");

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    return res.end(resBody);
  }
});

const port = 5000;
server.listen(port, () => console.log("Server is listening on port", port));
