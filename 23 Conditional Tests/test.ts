let car: string = 'CIVIC';

// Test 1
console.log("Test 1: Is car equal to 'Honda'? I predict True.");
console.log(car === 'Honda');

// Test 2
console.log("\nTest 2: Is car not equal to 'Lambourgny'? I predict True.");
console.log(car !== 'Lambourgny');

// Test 3
console.log("\nTest 3: Does car have a length greater than 4? I predict True.");
console.log(car.length > 4);

// Test 4
console.log("\nTest 4: Is car equal to 'CIVIC' (case-sensitive comparison)? I predict False.");
console.log(car === 'CIVIC');

// Test 5
console.log("\nTest 5: Is car equal to 'CIVIC' or 'Honda'? I predict True.");
console.log(car === 'CIVIC' || car === 'Honda');

// Test 6
console.log("Test 6: Is car not equal to 'CIVIC'? I predict false.");
console.log(car !== 'CIVIC');