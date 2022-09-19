var eggPrice = 33;
var myBudget = 33;

if(eggPrice<=myBudget){
    console.log('ami egg khabo');
}
else if (eggPrice>=myBudget){
    console.log('lemon khabo');
}
else{
    console.log('kono kicoi khabo na');
}


// array

var tourDestinations = ['coxbazar', 'nepal', 'vutan', 'paris'];
tourDestinations.indexOf('vutan');
console.log(tourDestinations.indexOf('vutan'));

var fourDestination = tourDestinations[2];
console.log(fourDestination);
tourDestinations[1] = 'Bangladesh';
console.log(tourDestinations);

// conditionals

if(tourDestinations[1]=='nepal'){
    console.log('nepal a jabo');
}
else if(tourDestinations[1]=='Bangladesh'){
    console.log('Bangladesh gurbo');
}
else if(tourDestinations.length==4){
    console.log('onno jaigai jabo')
}
else{
    console.log('kothao gurbo na');
}


