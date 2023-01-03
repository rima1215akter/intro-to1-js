/* function animalCount(miles){
    if(miles <=10){
        const count = miles*10;
        return count;
    }
}
const animals = animalCount(8);
console.log(animals); */

function animalCount(miles){
    const animalDensityFirst10Miles = 10;
    const animalDensitySirst10Miles = 50;
    const animalDensityThird10Miles = 100;
    if(miles <=10){
        const count = miles*animalDensityFirst10Miles;
        return count;
    }
    else if(miles<=20){
        const firstDenseAnimals = 10*animalDensityFirst10Miles;
        const restMiles1 = miles-10;
        const secondDenseAnimals = restMiles1*animalDensitySirst10Miles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else{
        const firstDenseAnimals = 10*animalDensityFirst10Miles;
        const secondDenseAnimals = 10
        *animalDensitySirst10Miles;
        const restMiles = miles-20;
        const restDenseAnimals = restMiles*animalDensityThird10Miles
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
        return totalAnimals;
    }
}
const animals = animalCount(15);
console.log(animals);