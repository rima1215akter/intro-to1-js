function bringSomosa(taka){ //input parameter
     console.log('somosa er jonno taka dice', taka);
     console.log('mama somosa den');
     var somosaPrice= 10;
     var somosaQuantity=taka/somosaPrice;
     return somosaQuantity;
}

var money= 80;
var somosa = bringSomosa(money);
console.log('ai nen somosa', somosa);