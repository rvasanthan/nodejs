var addNote = (title, body) => {
    console.log("Adding Note", title, body);
}

var removeNote = (title) => {
    console.log("Removing Note", title);
}

var readNote = (title) => {
    console.log("Reading Note", title);
}

export default {
    addNote,
    removeNote,
    readNote
}