// TASK 1 – Employee Merge System (Spread Operator)**
let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 };
let empPromotion = { role: "Developer", bonus: 10000 };
let finalEmployee = {...empBasic,...empPromotion,salary: 40000,experience: "2 years"};
console.log(finalEmployee);

// TASK 2 – Shopping Cart (Spread + Array)
let cart1 = ["Shoes", "Shirt"];
let cart2 = ["Watch", "Cap"];
let finalCart = ["Socks", ...cart1, ...cart2, "Bag"];
console.log(finalCart);

// TASK 3 – Rest Operator Salary Calculator
function calculateTotalSalary(baseSalary, ...bonuses) {
  let totalBonus = bonuses.reduce((sum, b) => sum + b, 0);
  return baseSalary + totalBonus;
}
console.log("Total Salary:", calculateTotalSalary(30000, 2000, 3000, 5000));

// TASK 4 – Advanced Destructuring
let student = {
  name: "Rahul",
  marks: { maths: 90, science: 85, english: 88 }
};
let { name, marks: { maths, science } } = student;
console.log(`${name} scored ${maths} in maths and ${science} in science`);

// TASK 5 – Array Manipulation
let numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 1, 25);
numbers.reverse();
let has50 = numbers.includes(50);
console.log("50 exists:", has50);
console.log("Final Array:", numbers);

// TASK 6 – Flatten Data
let apiData = [1, 2, [3, 4, [5, 6, [7, 8]]]];
let flatArray = apiData.flat(Infinity);
console.log("Flattened Array:", flatArray);
console.log("Index of 6:", flatArray.indexOf(6));

// TASK 7 – Sorting Problem
let prices = [100, 5, 25, 300, 45];
let asc = [...prices].sort((a, b) => a - b);
let desc = [...prices].sort((a, b) => b - a);
console.log("Ascending:", asc);
console.log("Descending:", desc);

// BONUS HARD TASK – Team Level
let users = [
  { name: "A", salary: 20000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 30000 }
];
let updatedUsers = users.map(user => ({...user,salary: user.salary + 5000}));
updatedUsers.sort((a, b) => b.salary - a.salary);
console.log(updatedUsers);
