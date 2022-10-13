//inch to feet
function inchToFeet(inches){
    var feet = inches/12;
    return feet;
}

var myInches = 144;
var feet = inchToFeet(myInches);
console.log(feet);

//mile to kilometer

function mileToKilometer(miles){
    var km = miles*1.06934;
    return km;
}

var mykilometer = mileToKilometer(12.2);
console.log(mykilometer);

//even number 

function isEven(number){
    if(number%2 ==0 ){
        return true;
    }
    else{
        return false;
    }
}

const herNumber = 132;
const isEvenHerNumber = isEven(herNumber);
console.log(isEvenHerNumber);


//odd number 
function isOdd(number){
    if(number%2 != 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumber = isOdd(13);
console.log(myNumber);


//leap year 
function isLeapYear(year){
    if(year%4 == 0 ){
        return true;
    }
    return false;
}
const leapYear = 2024;
const isMyYearLeapYear = isLeapYear(leapYear);
console.log(isMyYearLeapYear);

//factorial
let factorial = 1;
for(let i=1; i<=4; i++){
    factorial = factorial*i;
}
console.log(factorial);

//for loop 
function factorials(number){
    let factorial = 1;
    for(let i=1; i<=number; i++){
        factorial = factorial*i;
        console.log(factorial);
    }
    return factorial;
}

const myFactorial = factorials(5);
console.log(myFactorial);

//while loop
function getFactorial(number){
    let factorial = 1;
    let i = 1;
    while(i<=number){
        factorial = factorial*i;
        console.log(factorial);
        i++;
    }
    return factorial;
}
const herFactorial = getFactorial(5);
console.log(herFactorial);

//celcius to farenheit

function celsiusToFahrenheit(celcius){
   const fahrenheit = (celcius *9/5) +32;
   return fahrenheit;
}

const setFahrenheit = celsiusToFahrenheit(20);
console.log(setFahrenheit);

//fahrenheit to celsius

function fahrenheitToCelsius(fahrenheit){
    const celsius =5/9 * (fahrenheit-32);
    return celsius;
}

const setCelsius = fahrenheitToCelsius(68);
console.log(setCelsius);

//grade calculation
const number = 60;

if(number > 80){
    console.log('I got A+');
}
else if(number>= 70){
    console.log('I got A');
}
else if(number == 60){
    console.log('I got A-');
}
else if(number != 50){
    console.log('I got B');
}
else if(number < 40){
    console.log('I got C');
}
else if(number <= 33){
    console.log('I got D');
}
else{
    console.log('I got F');
}