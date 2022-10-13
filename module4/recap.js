//variable
var mousePrice = 34;

//array
var laptops = ['Dell', 'Lenovo', 'Asus', 'Macbook', 'HP', 'Xiaomi', 'MSI'];
//loop
for(var i=0; i<laptops.length; i++){
    var laptop = laptops[i];
    console.log(laptop);
}

//condition
if(laptops.indexOf('Walton')==-1){
    console.log('buy Walton');
}
else if(laptops.indexOf('Lenovo')==0){
    console.log('buy Lenovo');
}
else{
    console.log('can not buy')
}

//function
function addTwoNumbers(number1, number2){
    var total = number1+number2;
    return total;
}

console.log(addTwoNumbers(2, 4));

// var result = addTwoNumbers(2, 4);
// console.log(result);

//object
var laptop ={
    price :60000,
    model:'Insprion-153000',
    color:"silver"
} 
console.log(laptop);
console.log(laptop.price);

laptop.price = 70000;
laptop['color']='gray';

var laptopPrice = 'price';
laptop[laptopPrice]=80000;
