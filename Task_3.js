// Check whether a number is between 10 and 50 using logical AND
let num = 25;
if (num >= 10 && num <= 50) {
  console.log("Valid Number");
} else {
  console.log("Invalid Number");
}
// Check if user is eligible to log in (Logical AND)
let username = "admin";
let password = "1234";
if (username === "admin" && password === "1234") {
 console.log("Login Successful");
} else {
  console.log("Invalid Credentials");
}
// Even or Odd using Ternary Operator
let n = 7;
let result = (n % 2 === 0) ? "Even" : "Odd";
console.log(result);
// What is the output? Explain step by step
console.log((10 === "10") || (5 > 2) && !(3 < 1));
 // Step-by-step Explanation:
// 1.	10 === "10" → false (strict equality checks    both value and type)
// 2.	5 > 2 → true
// 3.	3 < 1 → false, so !(3 < 1) → true
// 4.	Now expression becomes:
// false || (true && true)
// 5.	true && true → true 
// 6.	false || true → true 
// Final Output:
// True
// PART 2 – Type Conversion
// Find the output and explain
console.log("5" + 2);   // "52"
console.log("5" - 2);   // 3
console.log("5" * 2);   // 10
console.log("5" / 2);   // 2.5
//Explanation:
//	"5" + 2 → String concatenation → "52"
//	"5" - 2 → Converts "5" to number → 3
//	"5" * 2 → Converts to number → 10
//	"5" / 2 → Converts to number → 2.5 //
// Explicit Conversion
let value = "100";
let numValue = Number(value);
let boolValue = Boolean(value);
console.log(numValue);  // 100
console.log(boolValue); // true
// Output and Explanation
console.log(Boolean(""));   // false
console.log(Boolean(" "));  // true
console.log(Boolean(0));    // false
console.log(Boolean([]));   // true
// Explanation:
//	"" → empty string → false
//	" " → space is a character → true
//	0 → false
//	[] → empty array is an object → true //
// PART 3 – Conditional Statements
// Grade Program (if-else if)
let marks = 82;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
// Traffic Signal using switch
let signal = "yellow";
switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
}
// Nested If – Eligibility Check
let age = 20;
let height = 165;
let weight = 55;
if (age >= 18) {
  if (height >= 160) {
    if (weight >= 50) {
      console.log("Selected");
    } else {
      console.log("Weight is less than required");
    }
  } else {
    console.log("Height is less than required");
  }
} else {
  console.log("Age is less than required");
}
// PART 4 – LOOPS
// Print 1 to 20 (for loop)
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
// Print only odd numbers (1 to 20)
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// Print 10 to 1 (while loop)
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}
// Print 1 to 5 (do-while)
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);
// for-of loop (Print characters)
let word = "STACKLY";
for (let ch of word) {
  console.log(ch);
}
// for-in loop (key & value)
let student = {
  name: "Arun",
  course: "MERN",
  duration: "6 months"
};
for (let key in student) {
  console.log(key + " : " + student[key]);
}
// REAL-TIME QUESTIONS
// RT-1: Login System (Logical + Ternary)
let u = "admin";
let p = "1234";
if (u === "admin" && p === "1234") {
  console.log("Login Success"); 
}else {
  console.log("Invalid Credentials");
}
// RT-2: Salary Bonus System
let salary = 60000;
let experience = 4;
if (salary > 50000 && experience > 3) {
  console.log("Eligible for bonus");
} else {
  console.log("Not eligible");
}
// RT-3: Shopping Discount
let amount =  Number(prompt("Enter the ammount:"));;
if (amount >= 5000) {
  console.log("20% discount");
} else if (amount >= 2000) {
  console.log("10% discount");
} else {
  console.log("No discount");
}
// RT-4: Even Number Counter (1 to 50)
let count = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    count++;
  }
}
console.log("Total even numbers:", count);
// Output:
// Total even numbers: 25
// RT-5: Dynamic Greeting System
let hour =  Number(prompt("Enter the current hour (1 to 24):"));;
if (hour >= 1 && hour <= 6) {
  console.log("Good Morning");
} else if (hour >= 7 && hour <= 12) {
  console.log("Morning");
} else if (hour >= 13 && hour <= 16) {
  console.log("Good Afternoon");
} else if (hour >= 17 && hour <= 19) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}


