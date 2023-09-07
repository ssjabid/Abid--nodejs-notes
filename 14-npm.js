// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install -g <packagename> (mac)

// package.json - manifest file (stores important info about project/package)
// manual apprpach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// node modules folder gets created by npm - this is where you will find the package dependencies
// npm i lodash
// this will install lodash package + dependencies will be in node modules folder

// in order to start using packages - do the below

const lodash = require("lodash");
const items = [1, [2, [3, 4]]];
const newItems = lodash.flattenDeep(items);

console.log(newItems);
