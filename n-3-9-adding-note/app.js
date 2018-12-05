console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs
  .command('add', 'Add a New Note', {
    title: {
      describe: "Title of the note",
      demand: true,
      alias: 't'
    },
    body: {
      describe: "Body of the note",
      demand: true,
      alias: 'b'
    }
  })
  .help()
  .argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);
debugger;
if (command === 'add') {
  var returnedNotes = notes.addNote(argv.title, argv.body);
  if(returnedNotes) {
    console.log("Notes successfully Added");
  } else {
    console.log("Title already taken");
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing the number of Noted ${allNotes.length}`);
  allNotes.forEach(element => {
    console.log(element);
  });
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
