
function sandwich(...items: string[]): void {
    console.log("sandwich order:")

    for (let i = 0; i< items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("Enjoy your sandwich Sarwat Samson")


sandwich('chicken', 'tomato', 'capsicum')
sandwich('beef', 'mushroom', 'cheese')
sandwich('garlic chicken', 'mayo sauce')