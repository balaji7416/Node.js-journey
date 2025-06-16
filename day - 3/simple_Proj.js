let figlet = require("figlet");
let path = require("path");
let fs = require("fs");

let figletTextPath = path.join(__dirname, "figlet.txt");

// Debugging: Log process.argv to verify arguments
console.log("Command-line arguments:", process.argv);

// Ensure the argument is properly retrieved
let figletText = process.argv.slice(2).join(" ") || "hello buddy";

if (!process.argv[2]) {
    console.warn("No text provided via CLI. Using default text: 'hello buddy'");
}

figlet.text(figletText, { font: "Graceful" }, (err, data) => {
    if (err) {
        console.error("Error generating figlet text:", err);
        return;
        
    }
    fs.writeFileSync(figletTextPath, data);
    console.log("Figlet text written to figlet.txt");
});

// To run this script, use the command:
// node simple_Proj.js "Your Text Here"