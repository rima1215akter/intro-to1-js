//string unchangable and can't push any character
const putString = 'Hello how are you';


function reverseString(text){
    let reverse = '';
    for(const letter of text){
        console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}

const reversed = reverseString(putString);
console.log(reversed);