interface item {
    product: string
    price: number
    id: number
}

//creating an objects

const macBook: item = {
    product: 'M2 MacBook Pro',
    price: 599999,
    id: 1
}

const car: item =  {
    product: 'Corolla',
    price: 87500000,
    id: 2

}
console.log("Products");
console.log(`ID: ${macBook.id} Model: ${macBook.product}, price: ${macBook.price}`);
console.log(` ID: ${car.id} Car: ${car.product}, price: ${car.price}`);