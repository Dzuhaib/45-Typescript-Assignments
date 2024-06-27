let myFavCountries: string[] = ["Saudi Arabia", "UK", "German", "Norway"];



console.log("Orignal Order", myFavCountries);

// Print the array in alphabetical order without modifying the actual list...
let sortedArrayAlphabetical = [...myFavCountries].sort();
console.log("Alphabetical Order:", sortedArrayAlphabetical);
console.log("Original Order (still):", myFavCountries);


// Print the array in reverse alphabetical order without changing the order of the original list
let sortedArrayReverseAlphabetical = [... myFavCountries].sort().reverse();
console.log("Reverse Alphabetical Order:", sortedArrayReverseAlphabetical);
console.log("Original Order (still):", myFavCountries);

// Reverse the order of the original list
myFavCountries.reverse();
console.log("Reversed Order:",  myFavCountries);

// Reverse the order of the list again
myFavCountries.reverse();
console.log("Back to Original Order:",  myFavCountries);

// Sort the array in alphabetical order
myFavCountries.sort();
console.log("Sorted in Alphabetical Order:",  myFavCountries);