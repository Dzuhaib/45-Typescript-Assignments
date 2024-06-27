"use strict";
// Define an array of people to invite to dinner
let guestList = ["Imran Khan", "Nawaz Sharif", "Asif Ali Zardari"];
// for (let i = 0; i < guestList.length; i++) {
//     console.log('Dear Mr. ' + guestList[i] + ',\n\nYou are cordially invited to dinner. It would be an honor to have you join us.\nSincerely, Bhatti!.\n\n')
// }
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
guestList[0] = new_Guest;
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nYou are cordially invited to dinner. It would be an honor to have you join us.\nSincerely, Bhatti!.\n\n');
}
console.log(` Mr. ${absent_Guest} is not coming to the party`);
console.log('Good news! we find a big table so we are inviting 3 more guests.');
guestList.unshift('Sir Zia Khan');
guestList.splice(2, 0, 'Maryam Nawaz');
guestList.push('Bilawal Bhuto Zardari');
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nYou are cordially invited to dinner. It would be an honor to have you join us.\nSincerely, Bhatti!.\n\n');
}
