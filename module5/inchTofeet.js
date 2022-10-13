//Inch to feet
function inchToFeet(inches){
    var feet = inches/12;
    return feet;
}

var myInches = 234;
var feet = inchToFeet(myInches);
console.log('myInches:', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log("dadiInches:", feet);

var naniInches = 122;
var feet = inchToFeet(naniInches);
console.log('naniInches:', feet);

//mile to km

function mileToKilometer(miles){
    var km = miles*1.60934;
    return km;
}

var marathon = mileToKilometer(24.2);
console.log('marathon in km:', marathon);