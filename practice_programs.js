// JavaScript Practice Programs

// 1. Calculate total and average of three marks
let mark1 = 80;
let mark2 = 75;
let mark3 = 90;
let total = mark1 + mark2 + mark3;
console.log("1. Total marks:", total);
console.log("1. Average:", total / 3);

// 2. Check whether a number is positive, negative, or zero
let number = 7;
if (number > 0) {
    console.log("2. Positive");
} else if (number < 0) {
    console.log("2. Negative");
} else {
    console.log("2. Zero");
}

// 3. Check whether a number is even or odd
let value = 14;
if (value % 2 === 0) {
    console.log("3. Even");
} else {
    console.log("3. Odd");
}

// 4. Print the multiplication table of a number
let tableNumber = 4;
for (let i = 1; i <= 10; i++) {
    console.log("4.", tableNumber + " x " + i + " = " + (tableNumber * i));
}

// 5. Find the sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("5. Sum from 1 to 100:", sum);
