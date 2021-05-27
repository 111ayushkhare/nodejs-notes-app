// Importing required npm packages
const yargs = require('yargs');

// Importing custom modules
const notes = require('./notes');

yargs.command({
    command: 'add',
    description: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandType: true,
        },
        body: {
            describe: 'Note body',
            type: 'string',
            demandType: true,
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'update',
    description: 'Updates an existing note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandType: true,
        },
        body: {
            describe: 'Note body',
            type: 'string',
            demandType: true,
        }
    },
    handler(argv) {
        notes.updateNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'read',
    description: 'Read an already present note',
    builder: {
        title: {
            describe: 'Note title',
            type: 'string',
            demandType: true,
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    description: 'Lists all notes present',
    handler() {
        notes.listAllNotes();
    }
});

yargs.command({
    command: 'remove',
    description: 'Removes an already present note',
    builder: {
        title: {
           describe: 'Note title',
           type: 'string',
           demandType: true, 
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'removeall',
    description: 'Removes all the notes',
    handler() {
        notes.removeAll();
    }
});

// Parsing command line arguements
yargs.parse();