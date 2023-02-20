// if(condition){

// }

var chickenPrice = 190;
var myMoney = 190;
if (chickenPrice<myMoney){
    console.log('buy chicken');
}

// if(condition){

// }
// else{

// }
if (chickenPrice<myMoney){
    console.log('buy chicken');
}
else{
    console.log('not buy chicken');
}
if (chickenPrice==myMoney){
    console.log('buy chicken');
}
else{
    console.log('not buy chicken');
}

if (chickenPrice>myMoney){
    console.log('not buy chicken');
}
else{
    console.log('buy chicken');
}

// multiple condition
var gotJob = true;
var moneySaved = 30000;
var hasFlat = true;
var hasHouse = false;

if(gotJob==true){
    console.log('success');
}
else{
    console.log('not success');
}

if(gotJob==true && moneySaved>200000){
    console.log('successful');
}
else{
    console.log('not success');
}
if((gotJob==true && moneySaved>20000) || hasFlat==true){
    console.log('successful');
}
else{
    console.log('not success');
}
