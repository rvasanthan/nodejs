console.log('Starting notes.js');

const fs = require('fs');

var fetchNote = (filename) => {
  try {
    var notesString = fs.readFileSync(filename);
    notes = JSON.parse(notesString);
    return notes;
  } catch (e) {
    return []
  }
};

var saveNotes = (notes, filename) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = fetchNote('notes-data.json');
  var note = {
    title,
    body
  };
debugger;

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes, 'notes-data.json');
    return notes;
  }
};

var getAll = () => {
  return fetchNote('notes-data.json');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
