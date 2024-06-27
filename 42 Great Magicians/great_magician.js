"use strict";
function show_magician(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' The Great';
    }
}
const magicians2 = ["Ricky", "Derren", "Teller", "Herry"];
make_great(magicians2);
show_magician(magicians2);
