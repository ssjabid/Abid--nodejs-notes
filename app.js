// built in os module

const os = require("os");

// you can destructure the module to only pick out the methods you want

// example of using os module
// info about current user

const user = os.userInfo();
console.log(user);

// info about uptime - returns the system uptime
const uptime = os.uptime();
console.log(uptime);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
