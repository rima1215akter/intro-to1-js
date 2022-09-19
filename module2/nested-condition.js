var danishPrice = 50;
var butterPrice = 90;
var toastPrice = 70;
var myBudget = 60;
var packed = true;

// if(danishPrice<myBudget){
//     console.log('danish khabo');
// }
// else if(butterPrice<myBudget){
//     console.log('butter khabo');
// }
// else if(toastPrice>myBudget){
//     console.log('toast khabo na');
// }
// else{
//     console.log('konotai khabo na');
// }


if(danishPrice<myBudget){
   if(packed == true){
    console.log('danish khabo');
   }
   else{
    console.log('danish khabo na')
   }
   
}

else{
    console.log('konotai khabo na');
}