const figlet = require("figlet");
const path = require("path");
const fs = require("fs");

const figletTextPath = path.join(__dirname, "figlet.txt");
const figletText = "Hello Buddy";
figlet.text(figletText,{font: "Graceful"},(err,data) =>{
    if(err){
        console.error("Error genrating figlet text:",err);
        return;
    }
    fs.writeFileSync(figletTextPath,data);
    console.log("Figlet text written to figlet.txt");
})