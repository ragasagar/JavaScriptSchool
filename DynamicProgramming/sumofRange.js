/**
 * Problem Statement:
 * You are given array of integer named array. you need to find the sum of the interger between i and j where i<=j. 
 * Solution:
 * There are two steps in solving this problem.
 * 1. First calculate the sumUntil[i] for each indices of array.
 * 2. The answer for range i and j would be: sumUntil[j] - sumUntil[i-1] 
 */

function preProcessing(array){
    let sumUntil = [];
    sumUntil[0] = array[0];
    for(let i = 1; i< array.length;i++){
        sumUntil[i] = array[i] + sumUntil[i-1];
    }
    return sumUntil;
}

function sumOfRange(array, start, end){
    let sumUntil = preProcessing(array);
    return sumUntil[end] - sumUntil[start-1];
}


let array = [1,-2,3,10,-8,0]
console.log(sumOfRange(array,3,3));
console.log(sumOfRange(array,1,3));
console.log(sumOfRange(array,3,5));
