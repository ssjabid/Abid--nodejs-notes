// modules
// node uses commonJS - every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-modules-alternative-flavour");
require("./7-modules-mind-grenade");

console.log(names);
console.log(data);

sayHi("abid");
sayHi(names.john);
sayHi(names.peter);
