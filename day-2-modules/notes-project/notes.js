const fs = require("fs");

const addNote = (note) =>{
    fs.appendFileSync("notes.txt",note+'\n');
    console.log("note added successfully");
}

const listNotes = () =>{
    let data = fs.readFileSync("notes.txt","utf-8");
    console.log(data);
}

module.exports = {addNote,listNotes};