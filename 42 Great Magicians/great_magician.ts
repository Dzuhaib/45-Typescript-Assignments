function show_magician(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    })
}
function make_great(magicians:string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' The Great';
    }
}


const magicians2:string[] = ["Ricky", "Derren", "Teller", "Herry"]
make_great(magicians2);
show_magician(magicians2);
