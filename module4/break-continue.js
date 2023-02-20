var i=0;
while(i<=10){
    console.log(i);
    if(i==5){
        break;
    }
    i++;
}

for(var i=0; i<10; i++){
    console.log(i);
    if(i==7){
        break;
    }
}

var numbers = [12, 34, 23, 45, 67, 89, 11, 90, 102];

for(var i=0; i<numbers.length; i++){
    var number = numbers[i];
    console.log('number', number);
    if(number>45){
        break;
    }
}

for(var i=0; i<numbers.length; i++){
    var number = numbers[i];
    if(number>67){
        continue; //skip
    }
    console.log(number);
}