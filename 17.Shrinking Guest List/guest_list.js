"use strict";
// Define an array of people to invite to dinner
let guestList = ["Imran Khan", "Nawaz Sharif", "Asif Ali Zardari"];
// for (let i = 0; i < guestList.length; i++) {
//     console.log('Dear Mr. ' + guestList[i] + ',\n\nYou are cordially invited to dinner. It would be an honor to have you join us.\nSincerely, Bhatti!.\n\n')
// }
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
guestList[0] = new_Guest;
// for (let i = 0; i < guestList.length; i++) {
//     console.log('Dear Mr. ' + guestList[i] + ',\n\nYou are cordially invited to dinner. It would be an honor to have you join us.\nSincerely, Bhatti!.\n\n')
// }
console.log(` Mr. ${absent_Guest} is not coming to the party`);
console.log('Good news! we find a big table so we are inviting 3 more guests.');
// Array me 3 guests add kiye hain.
guestList.unshift('Sir Zia Khan');
guestList.splice(2, 0, 'Maryam Nawaz');
guestList.push('Bilawal Bhuto Zardari');
// Yahan par maine 6 guests k array kko print karaya he
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nYou are cordially invited to dinner. It would be an honor to have you join us.\nSincerely, Bhatti!.\n\n');
}
// Sorry message to guest for not inviting
console.log('\nSorry we can not arrange big table, only two peoples will be invited.');
// Yahan pr  maine guest remvoe kiye hain
while (guestList.length > 2) {
    let remove_Gurest = guestList.pop();
    console.log(`Sorry Mr, ${remove_Gurest} You are not invited for the dinner.`);
}
// Hamare bache huy 2 invited Guests.
for (let i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nYou are still invited.\nSincerely, Bhatti!.\n\n');
}
// Maine saare guest array se remove krdiye
guestList.splice(0, 2);
console.log(guestList);
