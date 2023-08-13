console.log("Assignment-03");
// Assignment-03
// ****** Task-1) javascript For in loop *******
function printObjectProperties(obj) {
  // checking function keys length
  if (Object.keys(obj).length == 0) {
    console.log("Object is empty");
  }
  for (let item in obj) {
    let result = item + ": " + obj[item];
    console.log(result);
  }
}
let person = {
  name: "john doe",
  age: "30",
  profession: "Web Developer",
};
// function calling
printObjectProperties(person);

// ****** Task-01 End *******

// ****** Task-2) javascript function returns *******

// ****** Task-02 End *******

// ****** Task-3) javascript Spread Operator *******

// ****** Task-03 End *******

// ****** Task-4) javascript arrow function *******

// ****** Task-04 End *******

// ****** Task-5) javascript es6 map *******

// ****** Task-05 End *******

// ****** Task-6) javascript es6 static keyword *******

// ****** Task-06 End *******

// ****** Task-7) javascript es6 class inheritance *******

// ****** Task-07 End *******
