// const number = 4;
// console.log(number%2 == 0);


function isEven(number){
    if(number%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

const myNumber = 121;
const isMyNumberEven = isEven(myNumber);
console.log("isEvenNumber", isMyNumberEven);

function isodd(number){
    if(number%2 != 0){ //(number%2 ==1)
        return true;
    }
    else{
        return false;
    }
}

const isMyNumberodd = isodd(myNumber);
console.log('is my number odd', isMyNumberodd);