/* const names = ['Rima', 'Mishu', 'Shahjadhi', 'Lima', 'Rima', 'Shimu', 'Shahjadhi', 'Lima', 'Nipi'];

function removeDuplicate(names){
    const unique = [];
    /* for(let i=0; i<names.length; i++){
        const element = names[i];
        console.log(element);
    }
     //
    for(const element of names){
        console.log(element);
       if(unique.indexOf(element) == -1){
        unique.push(element);
       }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); */


const numbers = [1, 2, 3, 4, 5, 6, 77, 88, 4, 76, 3, 5];
// console.log('length of array', numbers.length);
function removeDuplicate(numbers){
    const unique = [];
    for(const element of numbers){
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    // console.log('length of array', unique.length);
    return unique;
}

const uniqueNumbers = removeDuplicate(numbers);
console.log('now', uniqueNumbers);