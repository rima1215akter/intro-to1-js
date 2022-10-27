/* 
chairWood = 3 cft/chair
tableWood = 10 cft/table
bedWood = 50 cft/bed 
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    //wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity +bedWoodQuantity;
    return totalWood;
}
const firstPosition = woodCalculator(1, 1, 1);
console.log(firstPosition);