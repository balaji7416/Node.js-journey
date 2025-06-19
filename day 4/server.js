const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // Serve the HTML form
    fs.readFile(path.join(__dirname, "form.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading form");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });

  } else if (req.method === "POST" && req.url === "/submit") {
    // Collect form data
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString(); // convert Buffer to string
    });

    req.on("end", () => {
      const parsedData = querystring.parse(body);
      console.log("Form Data Received:", parsedData);

      // Respond to client
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Form submitted successfully!\n\n" + JSON.stringify(parsedData, null, 2));
    });

  } else {
    // Handle 404
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
