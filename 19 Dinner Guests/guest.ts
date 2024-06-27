let guestList:string[] = ["Imran Khan", "Bilawal Bhuto", "Mariam Nawaz Sharif"];

let absent_guest: string = "Mariam Nawaz Sharif";
let new_guest: string = "Shehbaz Sharif";
guestList[2] = new_guest ;

// Here we have added 3 guest.
guestList.unshift('Murad Saeed');
guestList.splice(4,7,'Marwat');
guestList.push('Myself😂');
for(let i=0; i<guestList.length; i++) {
    console.log(`Dear ${guestList},\nLet's come together and celebrate with delicious food and wonderful friends. Please join us for a dinner party at our home.\n\nThank you`);
}
console.log(`\nApologies, we're unable to accommodate a large table; we can only invite two people.`);
while(guestList.length > 2) {
    let remove_guest = guestList.pop();
    console.log(`Sorry Ms. ${remove_guest}, Unfortunately, you are not invited for the Dinner.`);   
}

// Our remaining 2 invited guests.
guestList.splice(0, 2);
console.log(guestList);

// Exercise 19

// print a message indicating the number of people you are inviting to dinner.

console.log(`Total number of guest are: ${guestList.length}`);
