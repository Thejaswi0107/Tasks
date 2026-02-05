1. What is the difference between var, let, and const?

•	var is function-scoped and allows redeclaration and reinitialization.
•	let is block-scoped and allows reinitialization but not redeclaration.
•	const is block-scoped and does not allow redeclaration or reinitialization.

2. Which keyword allows redeclaration and why?

var allows redeclaration because it is function-scoped, not block-scoped, which can lead to unexpected behavior.

3. Which keyword allows reinitialization?

Both var and let allow reinitialization.

4. Which keyword does not allow redeclaration and reinitialization?

const does not allow redeclaration or reinitialization once the value is assigned.

5. Why should const be used for fixed values?

const should be used for fixed values because it prevents accidental changes, improves code safety, and makes the program easier to understand.

6. What error occurs when redeclaring a let variable?

SyntaxError occurs when a let variable is redeclared in the same scope.

7. What error occurs when reassigning a const variable?

 TypeError occurs when attempting to reassign a value to a const variable.

8. Which keyword is preferred in modern JavaScript and why?

let and const are preferred in modern JavaScript because they are block-scoped and help avoid errors caused by var.

9. Can const be declared without initialization? Explain.

No, const cannot be declared without initialization because it must be assigned a value at the time of declaration.

10. When should var be avoided?

var should be avoided in modern JavaScript because it is function-scoped and can cause scope-related bugs.

11. Predict the output 
      var a = 10; 
a = 20;
      var a = 30; 
      console.log(a);

output: 30

12. Predict the output 
      let b = 5; 
           b = 15; 
      console.log(b);

output: 15
 
13. Identify the error 
      let x = 10; 
      let x = 20; 

output: 20

14. Identify the error: 
      const y = 50; 
                y = 100;

output: Error

15. Using var to show redeclaration 

	var num = 10;
var num = 20;
console.log(num);
output: 20
	
16. Using let to show reinitialization 
	
	let count = 5;
count = 10;
console.log(count); 
output: 20

17. Using const and explaining immutability 

	const age = 25;
age = 30; 
output: Error

18. Converting var to let 

var name = "Ram";
let name = "Ram";

19. Converting var to const 

	var country = "India";
const country = "India";

20. Own example explanation 
•	var example
var city = "Hyderabad";
var city = "Bangalore";
•	let example
let marks = 80;
marks = 90;
•	const example
const college = "MVIT";

