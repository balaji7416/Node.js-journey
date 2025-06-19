const fs = require("fs");
const http = require("http");
const queryString = require("querystring");
const path = require("path");

const server = http.createServer((req, res) => {
    let method = req.method;
    let ParsedUrl = new URL(req.url,`http://${req.headers.host}`);   // this will help us to parse the url (convert to object) and get the pathname
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
        req.on("data", chunk =>{                // data is usually received in chunks, so we need to collect it
            body += chunk.toString();           // convert the binary data (chunks) to string 
        })

        req.on("end", () =>{                            // once the data is received      
            let parsedData = queryString.parse(body);   // convert the string to an object
            console.log("data recieved successfully !");

            parsedData.timestamp = new Date().toISOString();
            const dataToWrite = JSON.stringify(parsedData,null,4) + "\n";   // covert the object to a JSON string with indentation of 4 spaces and add a newline character

            fs.appendFile(path.join(__dirname,"submissions.txt"),dataToWrite,(err) =>{  // append the data received to a file
                // if there is an error while writing to the file, send a 500 status code
                if(err){
                    res.statusCode = 500;
                    res.setHeader("Content-type","text/plain");
                    res.end("Server problem");
                    return;
                }
                // if the data is written successfully, send a 200 status code
                res.statusCode = 200;
                res.setHeader("Content-type","text/plain");
                res.end("Data sent successfully");
            })
        })
    }
    else{
        res.statusCode = 404;
        res.setHeader("Content-type","text/plain");
        res.end("Page Not Found");
    }
});

// start the server on port 3000
server.listen(3000, () => {
    console.log("Server is running on port 3000");
})