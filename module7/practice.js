//solve-1
const number1 = 23;
const number2 = 2;
const number3 = 3;
const  name = 'Rima Akter';
const boolean = false;

//solve-2
let j=0;
const phones =['vivo', 'samgsung', 'xiaomi', 'infinix'];
//solve-3
const add = number1+number2;
console.log(add);
const sub =number1-number2;
console.log(sub);
const mult =number1*number2;
console.log(mult);
const div=number1/number2;
console.log(div);
const modul=number1%number2;
console.log(modul);

//solve-4
if(number1 < number2){
    console.log('number2 is biggest num');
}
else if(number1 > number2){
    console.log('number1 is biggest num');
}
else if(number1 <= number2){
    console.log('number2 is biggest or equal number');
}
else if(number1 >= number2){
    console.log('number1 is biggest or equal number');
}
else if(number1 == number2){
    console.log('number1 and number2 are equal');
}
else if(number1 != number2){
    console.log('number1 and number2 are not equal');
}
else{
    console.log('can not show any number');
}

//solve-5 and solve-6
if(number1 > number2 && number1 != number2){
    console.log('this condition is true');
}
else if(number2 < number3 || number2 == number3){
    console.log('above condition are right');
}

//solve-7
let i = 7;
while(i<=19){
    console.log(i);
    i++;  
}

const laptops =['dell', 'hp', 'apple', 'asus', 'lenovo'];

console.log(laptops.length);
laptops.push('macbook');
console.log(laptops);