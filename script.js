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
function findMaxNumber(numArray) {
  if (numArray.length === 0) {
    return null;
  }
  let maxNum = numArray[0];
  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > maxNum) {
      maxNum = numArray[i];
    }
  }
  return maxNum;
}

const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1));

// ****** Task-02 End *******

// ****** Task-3) javascript Spread Operator *******
function mergeArrays(arr1, arr2) {
  let mergeArr = [...arr1, ...arr2];
  return mergeArr;
}
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));

// ****** Task-03 End *******

// ****** Task-4) javascript arrow function *******
const calculateSquare = (num) => {
  let square = num * num;
  return square;
};
console.log(calculateSquare(8));

// ****** Task-04 End *******

// ****** Task-5) javascript es6 map *******
let doubleNumbers = (numbers) => {
  numbers.map((num) => {
    console.log(num * 2);
  });
};
let numbers = [1, 2, 3, 4, 5];

doubleNumbers(numbers);

// ****** Task-05 End *******

// ****** Task-6) javascript es6 static keyword *******
class MathUtility {
  static multiply(num1, num2) {
    return num1 * num2;
  }
}

console.log(MathUtility.multiply(2, 8));

// ****** Task-06 End *******

// ****** Task-7) javascript es6 class inheritance *******

// ****** Task-07 End *******
