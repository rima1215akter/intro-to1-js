/* let sum = 0;
for(i=0; i<=5; i++){
    sum = sum+i;
}
console.log(sum); */

/* let sum = 0;
for(i=5; i>=1; i--){
    console.log(i);
    sum = sum+i;
}
console.log(sum); */

function sum(i){
    if(i == 1){
       return 1;
    }
    return i + sum(i-1);
}
const result = sum(5);
console.log(result);

//factorial
 /* let factorial = 1;
for(let i=5; i>=1; i--){
    factorial = factorial*i;
}
console.log(factorial);  

function factorial(i){
    if(i == 1){
        return 1;
    }
    return i*factorial(i-1);
}
const result = factorial(5);
console.log(result); */

//object
const nayok = {
    name:'Sakib Khan',
    id:245,
    address: 'movie cinema',
    isSingle: false,
    friends:['Apu', 'Raaz', 'Salman'],
    movies:[{name:'no:1', year: 2012}, {name:'king khan', year:2014}],
    act: function(){
        console.log('very bed nayok')
    },
    car:{
        brand:'tesla',
        price:400000,
        manufacture:{
            name:'tesla',
            ceo:'Elon Mask',
            country:'USA'
        }
    }
}
console.log(nayok);
console.log(nayok.act);
nayok.act();

// array
const products =[
    {name:'phone', price:20000},
    {name:'laptop', price:40000}
]
console.log(products[0]);

//const products =[12, 34, 45]
const numbers ={
    '0':12,
    '1':34,
    '2':45
}
console.log(numbers);

//Arguments
function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
    // console.log(arguments[1]);

}
add(12, 13, 14, 15, 16);

//matched
const numbers1 = [12, 34, 56, 78];
/* for(let i=0; i<=numbers1.length; i++){
    const number = numbers1[i];
    console.log(number);
} */

//For of loop
for(const number of numbers1){
    console.log(number);
}

const products1 = [
    {id: 1, name: 'Xiamoi phone', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'Macbook lptop', price: 19000},
    {id: 4, name: 'Dell laptop', price: 19000},
    {id: 5, name: 'Samgsung phone', price: 19000},
    {id: 6, name: 'Nokia phone', price: 19000},

];
// for(const product of products1){
    // console.log(product);
// }

function matchedProductes1(products1, serach){
    const matched = [];
    for(const product of products1){
        if(product.name.toLowerCase().includes(serach.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result1 = matchedProductes1(products1, 'phone');
console.log(result1);