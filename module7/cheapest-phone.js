const phones =[
    {name: 'samsung s5',
    price: 45000,
    camera:10,
    storage:64
    },
    {name: 'oppo f21',
    price: 15000,
    camera:8,
    storage:32
    },
    {name: 'vivo y11',
    price: 13000,
    camera:6,
    storage:32
    },
    {name: 'xiaomi',
    price: 10000,
    camera:6,
    storage:32
    }

];

/* let cheapest = phones[0];
for(const phone of phones){
    //cpmpare price only
     if(phone.price<cheapest.price){
        cheapest = phone;
     }
}
console.log(cheapest); */

//use in function
function cheapestPrice(object){
    let cheapest = phones[0];
    for(const phone of phones){
        //cpmpare price only
         if(phone.price<cheapest.price){
            cheapest = phone;
         }
    }
    return cheapest;
} 
const cheapestPhone = cheapestPrice(phones);
console.log(cheapestPhone);