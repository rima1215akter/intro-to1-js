//problem-1:seerToMon
function seerToMon(seer){
    const mon = seer*0.025;
    return mon;
}
const totalMon = seerToMon(40);
console.log(totalMon);

//problem-2:totalSales
function totalSales(shirtQuantity, pantQuantity, shoesQuantity){
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoesPrice = 500;

    const shirt = shirtQuantity * perShirtPrice;
    const pant = pantQuantity * perPantPrice;
    const shoes = shoesQuantity * perShoesPrice;
    
    const totalPrice = shirt + pant + shoes;

    return totalPrice;
}

const sales = totalSales(1, 1, 1);
console.log(sales);

//problem-3 :deliveryCost
function deliveryCost(number){
    const deliverDensityFirstNumber = 100;
    const deliveryDensitySecondNumber = 80;
    const deliveryDensityThirdNumber = 50;

}


//problem-4: perfectFriend
function maxCharacter(str){
    const charMap = {};
    let max = 0, maxChar = "";
  
    for(let char of str){
      charMap[char] = charMap[char] + 1 || 1;
    }
  
    for(let char in charMap){
      if(charMap[char] > max){
        max = charMap[char];
        maxChar = char;
      }
    }
    
    return maxChar;
  }
const largestCharcter = maxCharacter('Mishu', 'Lima', 'Shahajadi', 'shimu');
console.log(largestCharcter); 