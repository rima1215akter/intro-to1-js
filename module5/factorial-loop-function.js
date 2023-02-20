/*1! = 1
2! = 2 X 1
3! = 3 X 2 X 1

n! = n* (n-1)!
*/

var factorial = 1;
for (var i=1; i<=6; i++){
    // console.log(i);
    factorial = factorial*i;
}
console.log(factorial);

//for loop incremental
function factorials(number){
    let factorial = 1;
    for(let i = 1; i<=number; i++){
        factorial = factorial*i;
    }
    return factorial;
}

var firstFactorial = factorials(3);
console.log('first factorial:', firstFactorial)  

//while loop incremental
function getFactorial1(number){
    let factorial = 1;
    let i =1;
    while(i<=number){
        factorial = factorial*i;
        i++;
    }
    return factorial;
}

const myFactorial1 = getFactorial1(4);
console.log(myFactorial1);

// while loop decremental
/* var i=5;
while (i>=1){
console.log("Hello World");
i--;
} */

function getFactorial2(number2){
    let factorial = 1;
    let i =number2;
    while(i>=7){
        factorial = factorial*i;
        i--;
    }
    return factorial;
}
const myFactorial2 = getFactorial2(8);
console.log('myFactorial2', myFactorial2);

//for loop decremental
function getFactorial3(number){
    let factorial = 1;
    for(let i=number; i>=1; i--){
        factorial = factorial*i;
    }
    return factorial;
}
const myFactorial3 = getFactorial3(3);
console.log(myFactorial3);

