// SECTION 1 – ARRAY METHODS
// Task 1 – forEach()
let subjects = ["Maths", "Science", "English", "History"];
let result = "";
subjects.forEach((sub, index) => {
  result += `Subject ${index + 1}: ${sub}\n`;
});
console.log(result);

// Why does forEach() return undefined?
// Because forEach() is used only for iteration (side effects like printing), not for creating a new array or returning values.

// Task 2 – map() 
let prices = [100, 200, 300, 400];
let newPrices = prices.map(price => price + price * 0.1);
console.log(newPrices); 

// Task 3 – filter()
let students = [
 { name: "A", marks: 45 },
 { name: "B", marks: 75 },
 { name: "C", marks: 35 },
 { name: "D", marks: 85 }
];
let passedStudents = students.filter(stu => stu.marks > 50);
console.log(passedStudents);

// Task 4 – find()
let topStudent = students.find(stu => stu.marks > 50);
console.log(topStudent);

// Difference between filter() and find():
// filter() → returns all matching elements in an array
// find() → returns only the first matching element

// Task 5 – reduce()
let cart = [
 { item: "Shirt", price: 1000 },
 { item: "Shoes", price: 2000 },
 { item: "Watch", price: 3000 }
];
let total = cart.reduce((sum, item) => sum + item.price, 0);
let totalWithTax = total + total * 0.05;
console.log(totalWithTax);

// Task 6 – some()
let numbers = [1, 3, 5, 7, 8];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); 

// Task 7 – every()
let ages = [22, 25, 19, 30];
let allAbove18 = ages.every(age => age > 18);
console.log(allAbove18); 

// Task 8 – sort()
let salaries = [50000, 10000, 70000, 30000];
console.log(salaries.sort((a, b) => a - b));
console.log(salaries.sort((a, b) => b - a));

// Why normal sort() fails?
// Because default sort() treats numbers as strings ("10000" < "70000"), so we need a compare function.

// Task 9 – Array Conversion
let arr = [10, 20, 30, 40];
console.log(arr.toString());   
console.log(arr.join("-"));    

// SECTION 2 – STRING METHODS
// Task 10 – charAt & charCodeAt
let word = "Developer";
console.log(word.charAt(4));      
console.log(word.charCodeAt(4));  

// Task 11 – slice()
let company = "StacklyCompany";
console.log(company.slice(7));

// Task 12 – Case Conversion
let userInput = "javaScript";
console.log(userInput.toUpperCase());
console.log(userInput.toLowerCase());

// Task 13 – trim()
let email = " naveen@gmail.com ";
console.log(email.trim());

// Task 14 – includes()
let message = "Welcome to JavaScript Training";
console.log(message.includes("JavaScript")); 

// Task 15 – split()
let movie = "spider-man-no-way-home";
console.log(movie.split("-"));

// Task 16 – indexOf & lastIndexOf
let text = "programming";
console.log(text.indexOf("m"));      
console.log(text.lastIndexOf("m"));  

// Task 17 – replace()
let tech = "I love python";
console.log(tech.replace("python", "javascript"));

// Task 18 – startsWith & endsWith
let filename = "report.pdf";
console.log(filename.startsWith("report")); 
console.log(filename.endsWith(".pdf"));    

// Task 19 – repeat()
let star = "*";
console.log(star.repeat(10));

// FINAL TEAM CHALLENGE – Employee Report System
let employees = [
 { name: "Naveen", salary: 50000 },
 { name: "Arun", salary: 30000 },
 { name: "Kiran", salary: 70000 }
];

// 1) Names to uppercase
let upperNames = employees.map(emp => emp.name.toUpperCase());
console.log(upperNames);

// 2) Filter salary > 40000
let highPaid = employees.filter(emp => emp.salary > 40000);
console.log(highPaid);

// 3) Find first salary > 60000
let firstHigh = employees.find(emp => emp.salary > 60000);
console.log(firstHigh);

// 4) Total salary
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);

// 5) Sort salaries descending
let sortedSalaries = employees
  .map(emp => emp.salary)
  .sort((a, b) => b - a);
console.log(sortedSalaries);
