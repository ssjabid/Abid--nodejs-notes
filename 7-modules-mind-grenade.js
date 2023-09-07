const num1 = 5;
const num2 = 7;

// if you have a function in one of your files and you require it as a module -
// then the function will run in the file you required it into (see app.js)
// when you import a module you actually invoke it

function addValues() {
  console.log(`the sum is : ${num1 + num2}`);
}
