const http = require("http");
const fs = require("fs");
const path = require("path");
const queryString = require("querystring");

const server = http.createServer((req, res) => {
    let method = req.method;
    let ParsedUrl = new URL(req.url,`http://${req.headers.host}`);
    let url = ParsedUrl.pathname;

    if(method === "GET" && url==="/"){
        fs.readFile(path.join(__dirname,"form.html"), (err,data) => {
            if(err){
                res.statusCode=500;
                res.setHeader("Content-Type","text/plain");
                res.end("Server Error");
            }
            else{
                res.statusCode=200;
                res.setHeader("Content-Type","text/html");
                res.end(data);
            }
        })
    }

    else if(method === "POST" && url==="/submit"){
        let body = "";
        req.on("data", chunk =>{
            body += chunk.toString();
        })

        req.on("end", ()=>{
            const parsedData = queryString.parse(body);
            console.log("Form Data Received:", parsedData);

        res.statusCode=200;
        res.setHeader("Content-Type","text/plain");
        res.end("Form Submitted successfully!\n\n" + JSON.stringify(parsedData,null,3));
        })

        
    }

    else{
        res.statusCode=404;
        res.setHeader("Content-Type","text/plain");
        res.end("NOT FOUND");
    }
});

server.listen(3000,()=>{
    console.log("server is live at http://localhost:3000");
});