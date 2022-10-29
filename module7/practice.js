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
/* let i = 7;
while(i<=19){
    console.log(i);
    i++;  
} */
let i = 7;
while(i<=19){
    if(i%2==0){
    console.log(i,'=the number is even');
    }
    else{
        console.log(i,'=the number is odd');
    }
    i++;
}

const laptops =['dell', 'hp', 'apple', 'asus', 'lenovo'];

console.log(laptops.length);
laptops.push('macbook');
console.log(laptops);

//solve-9

const laptops1 =['dell', 'hp', 'apple', 'asus', 'lenovo'];
for(let i=0; i<=laptops1.length; i++){
    const laptop = laptops1[i];
    console.log(laptop);
}

//solve-10
function numberMutipliction(num1, num2, num3){
    const multiplication = num1 * num2 * num3;
    return multiplication;
}
const numberMulti = numberMutipliction(2, 2, 2);
console.log(numberMulti);

//solve-11
var laptop ={
    price: 60000,
    model: 'insprion 15 3000',
    ram: 4,
    rom: 64,
    color: 'silver-black'
}
console.log(laptop);
laptop.windows = 10;
laptop.color = 'silver'
console.log(laptop);

//solve-12
function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
// var result = [11, 45, 4, 31, 64, 10, 43, 81, 85, 91, 99, 100].filter(BiggerElements(80));
console.log(result); 
//or
function BiggerElements(val){
    return val >= 10;
    }
    var result = [11,4,8,15,10,22,44].filter(BiggerElements);
    console.log(result);
//or
/*  If you don't have filter()  */

function biggerElements(arr, val)
{
    let newArr = []
    for (let i=0; i<arr.length; i++) { //for (let e of arr)
        if (arr[i] > val){                      //if (e > val){
            newArr.push(arr[i]);                  //  newArr.push(e)
        }                                     // }
       
          
    }
    return newArr;
}

console.log(biggerElements([11, 45, 4, 31, 64, 10], 10))     