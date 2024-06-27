let car: string = 'CIVIC';
let numberA: number = 22;
let numberB: number = 11;
let fruits: string[] = ['apple', 'orange', 'banana'];

// Tests for equality and inequality with strings
console.log("Test 1: Is car equal to 'CIVIC'? I predict True.");
console.log(car === 'CIVIC');

console.log("\nTest 2: Is car not equal to 'Honda'? I predict True.");
console.log(car !== 'Honda');

// Tests using the lower case function
console.log("\nTest 3: Is car in lowercase equal to 'Civic'? I predict True.");
console.log(car.toLowerCase() === 'CIVIC');

// Numerical tests
console.log("\nTest 4: Is numberA greater than numberB? I predict True.");
console.log(numberA > numberB);

console.log("\nTest 5: Is numberA less than or equal to numberB? I predict False.");
console.log(numberA <= numberB);

// Tests using "and" and "or" operators
console.log("\nTest 6: Is car equal to 'CIVIC' and numberA greater than 5? I predict True.");
console.log(car === 'CIVIC' && numberA > 5);

console.log("\nTest 7: Is car equal to 'CIVIC' or numberB greater than 9? I predict True.");
console.log(car === 'CIVIC' || numberB > 10);

// Test whether an item is in an array
console.log("\nTest 8: Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));

// Test whether an item is not in an array
console.log("\nTest 9: Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));