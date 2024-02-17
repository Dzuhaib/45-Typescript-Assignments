// Define an array of people to invite to dinner
let guestList: string[] = ["Imran Khan", "Nawaz Sharif", "Asif Ali Zardari"];


for (let i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nYou are cordially invited to dinner. It would be an honor to have you join us.\nSincerely, Bhatti!.\n\n')
}

let absent_Guest :string = 'Imran Khan' ;
let new_Guest :string = 'Kamran Tessori' ;

guestList[0] = new_Guest ;

for (let i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nYou are cordially invited to dinner. It would be an honor to have you join us.\nSincerely, Bhatti!.\n\n')
}

console.log(` Mr. ${absent_Guest} is not coming to the party`)