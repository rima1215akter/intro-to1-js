const numbers = [12, 34, 45, 56, 78, 25, 79];
let sum = 0;
for(let i=0; i<numbers.length; i++){
    const element = numbers[i];
    sum = sum+element;
}
console.log(sum);

function arraysum(numbers){
    let sum =0;
    for(let i=0; i<numbers.length; i++){
        const element = numbers[i];
        sum = sum+element;
    }
    return sum;
}
const total = arraysum([12, 1, 3]);
console.log(total);