let numbers: number[] = [1,2,3,4,5,6,7,8,9];

//Loop through the array
for (let number of numbers) {
    let ordinalEnding: string;

    if (number ===1) {
        ordinalEnding = "st";
    } else if (number === 2) {
        ordinalEnding = 'nd';
    } else if (number === 3) {
        ordinalEnding = 'rd';
    } else {
        ordinalEnding = 'th';
    }

    
console.log(`${number}${ordinalEnding}`);

}