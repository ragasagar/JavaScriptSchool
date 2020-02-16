/**
 * @ProblemStatement
 * A brugler has come to the society and he will rob the houses. The houses in the society is arranged in a linear manner. The brugler can rob as money as he want. The brugler cannot rob two consecutive house at a time.
 * The money from the each houses is given in house array.
 * Find the maximum money that a brigler can rob in a night.
 * 
 * @Solution
 * The problem can be divided into sub part.
 * i.e max cost =  house[0] = max (house[0] + max[2]  , max[1])
 * max[2] means maximum amout brugler can get if he starts from house 1.
 * 0 and 1 will be starting point always.
 */

function maxCost(house){
    let maxCost =[];
    maxCost[house.length]=0
    maxCost[house.length-1] = house[house.length-1];
    for(let i= house.length-2; i>=0; i--){
        maxCost[i] = Math.max(house[i]+ maxCost[i+2], maxCost[i+1]);
    }
    console.log(maxCost)
    return maxCost[0];
}

let house = [3,8,10,4,1,7,2];
console.log(maxCost(house));

/**
 * @Output
 * [ 20, 19, 17, 11, 7, 7, 2, 0 ]
 * 20
 */