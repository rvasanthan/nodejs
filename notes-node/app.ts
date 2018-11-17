console.log("Starting App..");

import { appendFile } from 'fs';
import { userInfo } from 'os';
import { add } from './notes';
import lodash = require('lodash');
import { processInputs } from './workx/inputs'
import { debug } from 'util';
import yargs = require('yargs');

var _ = require('lodash');

appendFile("greetings.txt", `Hello ${userInfo().username}!`, (err) => {
    if(err) throw err;
    console.log("The data is written to the file.");
});

var result = add(3,4);
console.log(`The result is ${result}`);
console.log("Returning Result");

console.log(lodash.difference([2,1], [2,3]));
console.log(lodash.isString("Vasanth"));
console.log(lodash.isString(false));
console.log(lodash.isNumber(12344));

processInputs();





