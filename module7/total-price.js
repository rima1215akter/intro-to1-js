const cart = [
    {
        name:'laptop',
        price: 45000,
        quantity: 1
    },
    {
        name:'shirt',
        price: 500,
        quantity: 2
    },
    {
        name:'watch',
        price: 1500,
        quantity: 3
    },
    {
        name:'phone',
        price: 14000,
        quantity: 4
    }
];
/* let totalPrice = 0;
for(const product of products){
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice); */

let cartTotal = 0;
for(const product of cart){
    console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);