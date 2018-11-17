"use strict";
exports.__esModule = true;
var addNote = function (title, body) {
    console.log("Adding Note", title, body);
};
var removeNote = function (title) {
    console.log("Removing Note", title);
};
var readNote = function (title) {
    console.log("Reading Note", title);
};
exports["default"] = {
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
};
