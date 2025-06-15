let fs = require("fs");

let data = `hell budd \n`;

let fileName = "notes.txt";

fs.appendFileSync(fileName,data);
fs.appendFileSync(fileName,data);

console.log(fs.readFileSync(fileName,"utf-8"));
fs.unlinkSync(fileName);