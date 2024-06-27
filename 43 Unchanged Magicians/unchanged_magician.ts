function show_magician(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    })
}
function make_great(magicians:string[]): string[] {
    let greatMagicians:string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' The Great');
    }
    return greatMagicians;
}


let magicians:string[] = ["Ricky", "Derren", "Teller", "Herry"];
let greatMagicians: string[] = make_great(magicians);
show_magician(magicians);
show_magician(greatMagicians);

