// Importing required npm packages
const fs = require('fs');
const chalk = require('chalk');

// Method to add a note to notes.json file
const addNote = (title, body) => {
    const notes = loadNote();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {  // or duplicateNote.length === 0
        notes.push({
            title: title,
            body: body
        });
        saveNote(notes);
        console.log(chalk.green.inverse(`Note with title - \'${title}\' added successfully!`));
    } else {
        console.log(chalk.red.inverse(`Note with title - \'${title}\' already exists`));
        console.log("Try adding note with different title!");
    }
}

// Method to update a note to notes.json file
const updateNote = (title, body) => {
    const notes = loadNote();
    const noteIndexToUpdate = notes.findIndex((note) => note.title === title);
    
    if (noteIndexToUpdate !== -1) {
        notes[noteIndexToUpdate].body = body;
        saveNote(notes);
        console.log(chalk.green.inverse(`Note with title - \'${title}\' updated successfully!`));
    } else {
        console.log(chalk.red.inverse(`Note with title - \'${title}\' does not exist!`));
        console.log("Note update failed, try again with existing title!");
    }    
}

// Method to read a single note from notes.json file
const readNote = (title) => {
    const notes = loadNote();
    const noteToRead = notes.find((note) => note.title === title);

    if (noteToRead) {
        console.log(chalk.inverse(noteToRead.title));
        console.log(noteToRead.body);
    } else {
        console.log(chalk.red.inverse(`Note with title - \'${title}\' does not exist!`));
    }
}

// Method to list all the notes from notes.json file
const listAllNotes = () => {
    const notes = loadNote();

    if (notes.length > 0) {
        notes.forEach((note) => {
            console.log(chalk.inverse(note.title));
            console.log(note.body);
        });
    } else {
        console.log(chalk.red.inverse("No notes exist yet!"));
    }
}

// Method to remove a note from notes.json file
const removeNote = (title) => {
    const notes = loadNote();
    const notesToKeep = notes.filter((note) => note.title !== title);     // fiters and return all notes whose title is not eqaul to given title

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse(`Note with title - \'${title}\' removed successfully!`));
    } else {
        console.log(chalk.red.inverse(`Note with title - \'${title}\' does not exist!`));
    }

    saveNote(notesToKeep);
}

// Method to remove all the notes from notes.json file
const removeAll = () => {
    let notes = loadNote();

    if (notes.length > 0) {
        notes = [];
        console.log(chalk.green.inverse("All notes removed successfuly!"));
    } else {
        console.log(chalk.red.inverse("No notes exist yet!"));
    }

    saveNote(notes)
} 

// Saving a new note to notes.json file
const saveNote = (note) => fs.writeFileSync("notes.json", JSON.stringify(note));

// Loading an already present note from notes.json file
// If note does note exist, error message pops up   
const loadNote = () => {
    try {
        const notesBuffer = fs.readFileSync("notes.json");
        const notesJson = notesBuffer.toString();
        return JSON.parse(notesJson);
    } catch (e) {
        return [];
    }
}

// Exporting all required methods in this file
module.exports = {
    addNote: addNote,
    updateNote: updateNote,
    readNote: readNote,
    listAllNotes: listAllNotes,
    removeNote: removeNote,
    removeAll: removeAll,
}