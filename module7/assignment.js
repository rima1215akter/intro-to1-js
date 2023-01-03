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

    if(number<=100){
      const count = number*deliverDensityFirstNumber;
      return count;
    }
    else if(number<=200){
      const firstDelivery = 100*deliverDensityFirstNumber;
      const restNumber = number-100;
      const secondDelivery = restNumber*deliverDensityFirstNumber;
      const totalDelivery = firstDelivery+secondDelivery;
      return totalDelivery;
    }
    else{
      const firstDelivery = 100*deliverDensityFirstNumber;
      const secondDelivery = 100*deliveryDensitySecondNumber;
      const restNumber = number-200;
      const restDeliveryNumber = restNumber*deliveryDensityThirdNumber;
      const totalDelivery = firstDelivery+secondDelivery+restDeliveryNumber;
      return totalDelivery;
    }

}
const delivery = deliveryCost(25);
console.log(delivery);

//problem-4: perfectFriend

/* const Friend =['Mishu', 'Lima', 'Shahajadi', 'shimu'];
function perfectFriend(arr){
    let charMap = [];
    let max = 5;
    for(let i=0; i<arr.length; i++){
      const element = arr[i];
      console.log(element);
      if( arr.length== max){
        charMap.push(arr[i]);
      }
    }
    
    return charMap;
  }
const largestCharcter = perfectFriend(Friend);
console.log(largestCharcter);  */