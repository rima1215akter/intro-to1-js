function largestElement(numbers){
    let max = numbers[0];
    for(let i=0; i<numbers.length; i++){
        const element = numbers[i];
        if(element>max){
            max = element;
            console.log(max);
        }
    }
    return max;
}
const largest = largestElement(5);
console.log(largest);


function smallestElement(numbers){
    let = numbers[0];
    for(let i=0; i<=numbers.length; i++){
        const element = numbers[i];
        if(element<min){
            min = element;
        }
    }
}