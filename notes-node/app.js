"use strict";
exports.__esModule = true;
console.log("Starting App..");
var fs_1 = require("fs");
var os_1 = require("os");
var notes_1 = require("./notes");
var lodash = require("lodash");
var inputs_1 = require("./workx/inputs");
var util_1 = require("util");
var _ = require('lodash');
fs_1.appendFile("greetings.txt", "Hello " + os_1.userInfo().username + "!", function (err) {
    if (err)
        throw err;
    console.log("The data is written to the file.");
});
var result = notes_1.add(3, 4);
console.log("The result is " + result);
console.log("Returning Result");
console.log(lodash.difference([2, 1], [2, 3]));
console.log(lodash.isString("Vasanth"));
console.log(lodash.isString(false));
console.log(lodash.isNumber(12344));
util_1.debug;
inputs_1.processInputs();
