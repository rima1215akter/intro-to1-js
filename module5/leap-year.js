/*function isLeapYear(year){
    
    if((year%4 == 0)){
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2022;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year leap year:', isMyYearLeapYear);


const herYear = 2028;
const isHerYearLeapYear = isLeapYear(herYear);
console.log('is her year leap year:', isHerYearLeapYear)
*/

function isLeapYear(year){
    if((year%4 == 0) && (year%4 != 100) || (year%4 ==400)){
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2021;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year leap year:', isMyYearLeapYear);


const herYear = 2028;
const isHerYearLeapYear = isLeapYear(herYear);
console.log('is her year leap year:', isHerYearLeapYear)