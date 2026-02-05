//1.Welcome Program
let name = prompt("Enter your name:");
alert("Hi Welcome to JavaScript Training.");
console.log("Hi Welcome to JavaScript Training.");
// 2. Console Methods Practice
console.log(500);
console.warn(500);
console.error(500);
console.clear();
// 3. Data Type Identification
let str = "Hello";
let num1 = 25;
let bool = true;
let und;
let empty = null;
console.log(str, typeof str);
console.log(num1, typeof num1);
console.log(bool, typeof bool);
console.log(und, typeof und);
console.log(empty, typeof empty);
// 4. Arithmetic Operations
let a = 20;
let b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);
// 5. Increment & Decrement
let x = 10;
console.log("Initial:", x);
console.log("Pre-increment:", ++x);
console.log("After pre-increment:", x);
console.log("Post-increment:", x++);
console.log("After post-increment:", x);
console.log("Pre-decrement:", --x);
console.log("After pre-decrement:", x);
console.log("Post-decrement:", x--);
console.log("After post-decrement:", x);
// 6. Assignment Operators
let num = 10;
num += 5;
console.log("After += :", num);
num -= 3;
console.log("After -= :", num);
num *= 2;
console.log("After *= :", num);
num /= 4;
console.log("After /= :", num);
num %= 3;
console.log("After %= :", num);
// 7. Array Access
let arr = ['HTML','CSS','JavaScript','React'];
console.log("First element:", arr[0]);
console.log("Second element:", arr[1]);
console.log("Last element:", arr[arr.length - 1]);
console.log("Total elements:", arr.length);
// 8. Modify Array
let arr1 = ['HTML','CSS','JavaScript','React'];
arr1.push('NodeJS');   
console.log("After adding:", arr1);
arr1.pop();            
console.log("After removing:", arr1);
// 9. Student Object
let student = {
  name: "Thejaswi",
  age: 22,
  course: "JavaScript",
  city: "Bangalore"
};
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.city);
// 10. Nested Object Practice
const company = {
  companyName: "Tech Solutions Pvt Ltd",
  trainer: {
    trainerName: "Rahul Kumar",
    subject: "JavaScript"
  }
};

// Printing values
console.log("Company Name:", company.companyName);
console.log("Trainer Name:", company.trainer.trainerName);
console.log("Trainer Subject:", company.trainer.subject);
