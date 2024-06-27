"use strict";
function show_magician(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' The Great');
    }
    return greatMagicians;
}
let magicians = ["Ricky", "Derren", "Teller", "Herry"];
let greatMagicians = make_great(magicians);
show_magician(magicians);
show_magician(greatMagicians);
