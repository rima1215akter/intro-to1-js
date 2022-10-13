//variable
var mobilePhone = 33;

//array
var mobilePhones = ['Vivo', 'Xiamoi', 'Walton', 'Symphoni', 'Samsung', 'iPhone', 'itel'];
console.log(mobilePhones.length);
// loop
for(i=0; i<mobilePhones.length; i++){
    var mobilePhone = mobilePhones[i];
    console.log(mobilePhone);
}

// condition
if(mobilePhones.indexOf('Nokia') == -1){
    console.log('Buy Nokia');
}
else if(mobilePhones.indexOf('iphone') == 0){
    console.log('Buy iphone');
}
else{
    console.log('Can not buy any phone');
}

function addTwoNumbers(num1, num2){
    var result = num1+num2;
    return result;
}
console.log(addTwoNumbers(3,5));
// Object
var vivoPhone ={
    name : 'vivo Y11',
    modelNumber: 'vivo 1906',
    version: 11,
    processor: 'Octa-core',
    ram: '3 GB',
    storage: '32 GB',
    vivoRom: 'Funtouch OS_10.5'
}
console.log(vivoPhone);
console.log(vivoPhone.storage);