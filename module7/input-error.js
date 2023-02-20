//add number by function
function addNumber(num1, num2){
    const  sum = num1+num2;
    return sum;
}
const firstTotal = addNumber(2, 6);
console.log(firstTotal);

//multiplay
function multiplayNumber(num1, num2){
    const multiplay = num1*num2;
    return multiplay;
}
const firstMultiplay = multiplayNumber(5* 5);
console.log(firstMultiplay);

/* // solve1
const num1 = 12;
const num2 = 10;
const num3 = 3;
const name = "Rima";
const boolean = false;

// solve2
let j1 = 0;
const phones = ['Vivo', 'Samgsung', 'Xiaomi', 'infinix', 'Oppo', 'Realme'];
// solve3
const add = num1 + num2;
console.log(add);
const sub = num1 - num2;
console.log(sub);
const mult = num1 * num2;
console.log(mult);
const div = num1 / num2;
console.log(div);
const modul = num1 % num2;
console.log(modul);

// solve4
if(num1>num2){
    console.log('num1 is bigger');
}
else if(num1<num2){
    console.log('num2 is bigger');
}
else if(num1>=num2){
    console.log('num1 is bigger or equal');
}
else if(num1<=num2){
    console.log('num2 is bigger or equal');
}
else if(num1 == num2){
    console.log('num1 and num2 is equal');
}
else if(num1 != num2){
    console.log('num1 and num2  is not equal');
}
else {
    console.log('num1 and num2 are nathing');
}

// solve6
if(num1>num2 && num1 != num2){
    console.log('This condition are true');
}
else if(num2<num3 || num2 == num3){
    console.log('This condition are right');
}

// solve7
let j = 7;
while(j<=19){
    console.log(j);
    j++;
}

let i = 6;
while(i<=18){
    if(i%2 == 0){
        console.log(i, 'The num is even');
    }
    else{
        console.log(i, 'The num is odd');
    }
    i++;

}

// solve8
const laptops = ['Dell', 'Asus', 'Lenovo', 'HP', 'Macbook', 'MSI'];
for(i =0; i<laptops.length; i++){
    const laptop = laptops[i];
    console.log(laptop);
}
// console.log(laptops.length);
// laptops.push('Walton');
// console.log(laptops);

// solve9
function numberMulti(number1, number2, number3){
    const multi = number1*number2*number3;
    return multi;
}
const numberMultipliction = numberMulti(1, 3, 4);
console.log(numberMultipliction);

// solve10
// var funitures = ['sofa', 'wadrop', 'dressing table', 'bad', 'book table', 'wall showcase', 'dining table'];
var mobile ={
    price: 13000,
    model: 'y11',
    ram: 3,
    stroage: 32,
    color: 'blue'
}
console.log(mobile);
mobile.version = 11;
mobile.color= 'black';
console.log(mobile);

// solve11
function biggerElements(arr, val)
{
    let newArr = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] > val){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(biggerElements([11, 12, 2, 43, 45, 56, 10], 10)); */

/* // inchToFeet
function inchToFeet(inch){
        const feet = inch*0.0833333;
        return feet;
}
const findFeet = inchToFeet(24);
console.log('feet:', findFeet);


function feetToInch(feet){
    const inch = feet*12;
    return inch;
}
const findinch = feetToInch(2);
console.log(findinch);

function centimeterToMeter(centimeter){
    const meter = centimeter*0.01;
    return meter;
}
const countMeter = centimeterToMeter(100);
console.log(countMeter);

function meterToCentimeter(meter){
    const centimeter = meter*100;
    return centimeter;
}
const countCentimeter = meterToCentimeter(1);
console.log(countCentimeter);

function pageRequirements(book1Quantity, book2Quantity, book3Quantity){
const perbook1Pages = 100;
const perbook2Pages = 200;
const perbook3Pages = 300;

const book1 = book1Quantity*perbook1Pages;
const book2 = book2Quantity*perbook2Pages;
const book3 = book3Quantity*perbook3Pages;

const totalBook = book1 + book2 + book3;
return totalBook;
}
const result = pageRequirements(1, 1, 1);
console.log(result);

function onlyPositive(numbers){
    let newArr = [];
    for(let i=0; i<numbers.length; i++){
        const element = numbers[i];
        console.log(element);
        if(numbers[i]>0){
            newArr.push(numbers[i]);
        }
        else{
            break;
        }
    }
    return newArr;
}
const newNumbers = onlyPositive([1, 2, 3, 4, -5, 6, 7]);
console.log(newNumbers);

function longestStr(arr){
    let maxStr = 0;
    for(let e of arr){
        maxStr = Math.max(maxStr, e.length);
    }
    for(let e of arr){
        if(e.length == maxStr){
            return e;
        }
    }
}
console.log(longestStr(['asf', 'sdfgf', 'fhkgjnhoigf'])); */