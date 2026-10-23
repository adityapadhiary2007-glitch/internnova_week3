// Loops

// for loop: numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// while loop: even numbers
let even = 2;
while (even <= 10) {
    console.log("Even:", even);
    even += 2;
}

// do...while loop: odd numbers
let odd = 1;
do {
    console.log("Odd:", odd);
    odd += 2;
} while (odd <= 9);

// Multiplication table
let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// Sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum:", sum);

// Reverse order using decrement
for (let i = 10; i >= 1; i--) {
    console.log("Reverse:", i);
}
