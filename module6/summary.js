/* const number = 49.5435;
const floor = Math.floor(number);
console.log(floor);
const ceil = Math.ceil(number);
console.log(ceil);
const round = Math.round(number);
console.log(round);
// Returns a random integer from 1 to 10:
const rounded = Math.round(Math.random()*10) + 1;
console.log(rounded);
const ramdom = Math.random();
// console.log(ramdom);
// Returns a random integer from 0 to 10:
const between10 = ramdom*10;
const rounded = Math.round(between10);//rounded = Math.round(Math.ramdom()*10)
console.log(rounded); */

for(let i=0; i<5; i++){
    const random = Math.random()*10;
    const selected = Math.round(random);
    console.log(selected);
}

const selected = []
for(let i=0; i<9; i++){
    const random = Math.random()*10;
    const picked = Math.round(random);
    if(selected.indexOf(picked) == -1){
        selected.push(picked);
    }
    else{
        console.log('found duplicate', selected, picked);
    }
    console.log(selected);
}
