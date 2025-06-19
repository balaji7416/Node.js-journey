const fs = require("fs");
const http = require("http");
const queryString = require("querystring");
const path = require("path");

const server = http.createServer((req, res) => {
    let method = req.method;
    let ParsedUrl = new URL(req.url,`http://${req.headers.host}`);
    let url = ParsedUrl.pathname;

    if(url === "/" && method === "GET"){
        fs.readFile(path.join(__dirname,"form.html"), (err, data) =>{
            if(err){
                res.statusCode = 500;
                res.setHeader("Content-Type","text/plain");
                res.end("Server problem");
            }
            else{
                res.statusCode = 200;
                res.setHeader("Content-Type","text/html");
                res.end(data);
            }
        })
    }
    else if(url === "/submit" && method === "POST"){

        let body = "";
        req.on("data", chunk =>{
            body += chunk.toString();
        })

        req.on("end", () =>{
            let parsedData = queryString.parse(body);
            console.log(JSON.stringify(parsedData,null,30));

            // for user displaying
            res.statusCode = 200;
            res.setHeader("Content-Type","text/plain");
            res.end(JSON.stringify(parsedData,null,4));
        })
    }
    else{
        res.statusCode = 404;
        res.setHeader("Content-type","text/plain");
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})