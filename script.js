
// Variables and Data Types
let name = "John Doe";
let age = 25;
let isStudent = true;
let favoriteColors = ["blue", "green", "red"];
let user = {
    name: "John Doe",
    age: 25,
    isStudent: true
};

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Favorite Colors: ${favoriteColors} (Type: ${typeof favoriteColors})`);
console.log(`User: ${JSON.stringify(user)} (Type: ${typeof user})`);

// Operators: Simple Calculator
function simpleCalculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    let result;
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero!";
        }
    } else {
        result = "Invalid operation!";
    }

    alert(`Result: ${result}`);
}

// Functions: Greet User
function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript assignment.`;
}

// Part 2: JavaScript Control Structures

// If Statements: Check Voting Eligibility
let userAge = prompt("What is your age?");
if (userAge >= 18) {
    document.body.innerHTML += "<p>You are eligible to vote!</p>";
} else {
    document.body.innerHTML += "<p>You are not eligible to vote yet.</p>";
}

// Loops: Display Numbers from 1 to 10
let ol = document.createElement("ol");
for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    ol.appendChild(li);
}
document.body.appendChild(ol);

// Part 3: Introduction to the DOM

// Changing the <h1> text
document.querySelector("h1").textContent = "JavaScript in Action!";

// Adding a new paragraph inside dynamic-content div
let newP = document.createElement("p");
newP.textContent = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newP);
