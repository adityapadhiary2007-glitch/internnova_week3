// Conditional Statements
let number = -4;

// if
if (number > 0) {
    console.log("Number is positive");
}

// if...else
if (number % 2 === 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}

// if...else if...else
if (number > 0) {
    console.log("Positive number");
} else if (number < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// Nested if and logical condition
let age = 19;
let hasId = true;

if (age >= 18) {
    if (hasId) {
        console.log("Eligible");
    }
}

// Greater of three numbers
let a = 12;
let b = 8;
let c = 15;

if (a >= b && a >= c) {
    console.log("Greatest:", a);
} else if (b >= a && b >= c) {
    console.log("Greatest:", b);
} else {
    console.log("Greatest:", c);
}

// Grade based on marks
let marks = 82;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}
