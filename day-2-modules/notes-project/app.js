const notes = require("./notes");

let command = process.argv[2];
let value = process.argv[3];

if(command=="add"){
    notes.addNote(value);
}else if(command=="list"){
    notes.listNotes();
}else if(command=="delete"){
    notes.deleteNote(value);
}else{
    console.log("enter a valid command and value");
}