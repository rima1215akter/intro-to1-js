const number1 = 342;
const number2 = 455;
const number3 = 677;

// two compeair
/* if(number1>number2){
    console.log('number1 is bigger');
}
else{
    console.log('number2 is bigger');
} */

//three compeair(way-1)
if(number1>number2 && number1>number3){
    console.log('numbe1 is bigger')
}
else if(number2>number1 && number2>number3){
    console.log('number2 is bigger');
}
else{
    console.log('number3 is bigger');
}

//shortcut three compeair(way-2)
var max = Math.max(number1, number2, number3);
console.log('largest is', max);

//two compeair(way-3)

function findLargest(first, second){
    if(first>second){
        return first;
    }
    else{
        return second;
    }
}

var largest = findLargest(34, 56);
console.log(largest);

//three compeair(way-3)

function findLargest1(first, second, third){
    if(first>second && first>third){
        return first;
    }
    else if(second>first && second>third){
        return second;
    }
    else{
        return third;
    }
}

var largest1 = findLargest1(225, 756, 657);
console.log(largest1);


//find smallest number
function smallestNumber(numbe1, number2){
    if(numbe1>number2){
        return number2;
    }
    else{
        return numbe1;
    }
}

const smallest = smallestNumber(11, 23);
console.log(smallest);