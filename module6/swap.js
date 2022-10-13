var first = 3;
var second = 5;

console.log(first, second);
//multiline comment shortcut-shift + alt + A 
/*
var temp = first;
first = second;
second = temp;

console.log(first, second);
*/

[first, second] = [second, first];
console.log(first, second);