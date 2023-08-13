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
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.sound}`);
  }
}

class Dog extends Animal {
  fetch() {
    console.log("Fetching the ball!");
  }
}

const animal = new Animal("Lion", "Roar");

animal.makeSound();

const dog = new Dog("Buddy", "Woof");

dog.makeSound();

dog.fetch();

// ****** Task-07 End *******

// ****** Task- 8) javascript es6 super keyword ******
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  introduce() {
    super.introduce();
    console.log(`I am majoring in ${this.major}.`);
  }
}
// Person method calling
const person1 = new Person("John", 30);

person1.introduce();

// subclass method calling
const student1 = new Student("Alice", 20, "Computer Science");

student1.introduce();

// ****** Task-08 End *******
