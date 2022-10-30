//inch to feet conversion
function inchToFeet(inch){
   const  feet = inch*0.083333;
    return feet;
}

const findFeet = inchToFeet(12);
console.log(findFeet);

/* function feetToInch(feet){
    const inch = feet/12;
     return inch;
 }
 
 const findinch = feetToInch(1);
 console.log(findinch); */

 //crntimeter to meter
 function centimeterToMeter(centimeter){
    const meter = centimeter*0.01;
    return meter;
 }
 const result = centimeterToMeter(100);
 console.log(result);


 //calculation pages number
 function psgeRequirements(book1Quantity, book2Quantity, book3Quantity){
    const perbook1Pages = 100;
    const perbook2Pages = 200;
    const perbook3Pages = 300;

    const book1 = book1Quantity*perbook1Pages;
    const book2 = book2Quantity*perbook2Pages;
    const book3 = book3Quantity*perbook3Pages;
    // return book1, book2, book3;
    const totalBook = book1 + book2 + book3;
    return totalBook;
 }
const result1 = psgeRequirements(1, 1, 1);
console.log(result1);


//separate positive and negative numbers in array javascript
const numbers =[1, 2, 3, 4, -6, 9, 8];

function onlyPositive(numbers){
    let nowArr = [];
    for(let i=0; i<numbers.length; i++){
        const element = numbers[i];
        console.log(element);
        if(numbers[i]>0){
            nowArr.push(numbers[i]);
        }
        else if(numbers[i]<0){
            break;
        }
    }
    return nowArr;
}
const newNumbers = onlyPositive(numbers);
console.log(newNumbers);


 //array big size string return
 const friends =['Mishu', 'Lima', 'Shahajadi', 'shimu'];
function bestFriend(arra)
  {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(bestFriend(friends));

// or JavaScript: Find the longest string from a given array
 function longestStr(arr){
    let maxStr = 0
    for (let e of arr){
     maxStr = Math.max(maxStr, e.length)
    }
    for (let e of arr){
       if (e.length === maxStr)
       return e
    }
}

console.log(longestStr(["ab", "a", "abcd"]))
 //array big size string return
 /*  const friends =['Mishu', 'Lima', 'Shahajadi', 'shimu'];


  function bestFriend(arr, max){
    for(let i=0; i<arr.length; i++){
        const friend = friends;
        return friend;
    }
    
  }
  var max = Math.max(['Mishu', 'Lima', 'Shahajadi', 'shimu']);
  console.log(max); */
 
