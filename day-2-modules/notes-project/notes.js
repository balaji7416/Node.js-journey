const fs = require("fs");
const path = require("path");

// Build file path
const notesFilePath = path.join (__dirname, 'notes.txt');


const addNote = (note) => {
    fs.appendFileSync(notesFilePath, note + '\n');
    console.log("note added successfully");
}

const listNotes = () => {
    let data = fs.readFileSync(notesFilePath, "utf-8");
    console.log(data);
}

//create function to delete a note
const deleteNote = (note) => {
    let data = fs.readFileSync(notesFilePath, "utf-8");
    let notesArray = data.split('\n').filter(n => n !== note);
    fs.writeFileSync(notesFilePath, notesArray.join('\n'));
    console.log("note deleted successfully");
}

module.exports = { addNote, listNotes, deleteNote };

