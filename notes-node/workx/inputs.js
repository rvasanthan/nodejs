"use strict";
exports.__esModule = true;
var lodash = require("lodash");
function processInputs() {
    var command = process.argv;
    console.log(lodash.size(command));
    if (lodash.size(process.argv) <= 2) {
        console.log("There are no commands given");
    }
    else {
        if (process.argv[2] === 'add') {
            console.log('Adding Notes');
        }
        else if (process.argv[2] == 'list') {
            console.log('Listing Notes..');
        }
        else if (process.argv[2] == 'read') {
            console.log('Reading the Note');
        }
        else if (process.argv[2] == 'remove') {
            console.log('Removing the Note');
        }
        else {
            console.log("Command(" + process.argv[2] + ") is not recognized.");
        }
    }
}
exports.processInputs = processInputs;
