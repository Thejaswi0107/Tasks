// 1. Payroll System
function calculateSalary(basicSalary, bonusPercentage) {
  const bonus = (basicSalary * bonusPercentage) / 100;
  const grossSalary = basicSalary + bonus;
  const tax = grossSalary * 0.05;
  const finalSalary = grossSalary - tax;
  console.log("Basic Salary:", basicSalary);
  console.log("Bonus:", bonus);
  console.log("Tax (5%):", tax);
  console.log("Final Salary:", finalSalary);
  return finalSalary;
}
calculateSalary(10000,3)
// 2. Student Result System
function generateResult(name, marksArray) {
  const total = marksArray.reduce((a, b) => a + b, 0);
  const average = total / marksArray.length;
  let grade;
  if (average >= 80) grade = "A";
  else if (average >= 60) grade = "B";
  else if (average >= 40) grade = "C";
  else grade = "Fail";
  return {
    name,
    total,
    average,
    grade
  };
}
console.log(generateResult("Teju",[50,40,35,60]))
// SECTION 2 – Scope & Hoisting
// 3. Debug Code 
function demo(){
if(true){
var a = 10;
let b = 20;
}
console.log(a);
console.log(b);
}
// console.log(a) → 10
// console.log(b) → ReferenceError

//Why?
// var is function-scoped → accessible outside block
//let is block-scoped → not accessible outside { }
// Fixed Code
function demo() {
  let a, b;
  if (true) {
    a = 10;
    b = 20;
  }
  console.log(a);
  console.log(b);
}
demo()
// 4. Hoisting Analysis

// undefined
// ReferenceError: Cannot access 'y' before initialization
// Explanation:
// var x is hoisted (initialized as undefined)
// let y is hoisted but in Temporal Dead Zone (TDZ)

// correct formet is 
let y = 200;
var x = 100;
console.log(x); 
console.log(y);

// SECTION 3 – Callback & Higher Order Functions
// 5. Order Processing
function generateInvoice(id) {
  console.log("Invoice Generated for:", id);
}
function processOrder(orderId, callback) {
  console.log("Order Processed:", orderId);
  callback(orderId);
}
processOrder(101, generateInvoice);
// 6. Bank Transaction
let balance = 1000;
function sendSMS(msg) {
  console.log("SMS:", msg);
}
function transaction(amount, type, callback) {
  if (type === "deposit") {
    balance += amount;
  } else if (type === "withdraw") {
    balance -= amount;
  }
  callback("Balance: " + balance);
}
transaction(500, "deposit", sendSMS);
// SECTION 4 – Currying
// 7. Price Builder
function priceBuilder(basePrice) {
  return function (discount) {
    return function (tax) {
      const discounted = basePrice - (basePrice * discount) / 100;
      const finalPrice = discounted + (discounted * tax) / 100;
      return finalPrice;
    };
  };
}
console.log(priceBuilder(2000)(15)(18));
// SECTION 5 – IIFE
// 8. Secure Company Module
const companyModule = (function () {
  let companyCode = "ABC123";
  return {
    getCompanyStatus() {
      return "Company Active: " + companyCode;
    }
  };
})();
console.log(companyModule.getCompanyStatus());
// SECTION 6 – Generators
// 9. Order ID Generator
function* orderGenerator() {
  let id = 1001;
  while (true) {
    yield "ORD" + id++;
  }
}
const gen = orderIdGenerator();
for (let i = 0; i < 5; i++){
console.log(gen.next().value);
}

// 10. Coupon Spin
function* couponGenerator() {
  yield "10% OFF";
  yield "20% OFF";
  yield "50% OFF";
  yield "No Luck";
  yield "Jackpot";
}
const spin = couponGenerator();
for (let i = 0; i < 5; i++) {
  console.log(spin.next().value);
}


// SECTION 7 – Mini E-Commerce Project
const shop = (function () {
  let cart = [];
  function addToCart(product, price) {
    cart.push({ product, price });
  }
  function calculateTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }
  function applyDiscount(discount) {
    return function (total) {
      return total - (total * discount) / 100;
    };
  }
  function* couponGen() {
    yield "10%";
    yield "20%";
    yield "50%";
  }
  function processPayment(total, callback) {
    callback("Payment Successful: " + total);
  }
  return {
    addToCart,
    calculateTotal,
    applyDiscount,
    couponGen,
    processPayment
  };
})();
shop.addToCart("Mobile", 20000);
shop.addToCart("Headset", 2000);
let total = shop.calculateTotal();
let discount = shop.applyDiscount(10);
let finalAmount = discount(total);
shop.processPayment(finalAmount, console.log);


// CONCEPT QUESTIONS
// 1. Function Declaration vs Expression
// Function Declaration                   Function Expression 
// Hoisted fully                          Not fully hoisted    
// Can be called before definition        Cannot be called before definition 

// 2. Higher Order Function
// A function that takes another function as argument, or returns a function
// Example: map(), filter(), reduce()
// setTimeout(() => {}, 1000);

// 3. Real-Time Example of Generator
// OTP generation
// Order ID generation
// Ticket numbers

// 4. Why We Use IIFE?
// Data privacy
// Avoid global pollution
// Encapsulation

// 5. var vs let vs const
// var is function-scoped and old-style.
// let is block-scoped and can be changed.
// const is block-scoped but its value cannot be changed once assigned.

// Example:
// var a = 10;
// let b = 20;
// const c = 30;
