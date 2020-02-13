/**
 * Problem Statement:
 * You are given rod with size n, and an array of piece. The array contains the prices of each pieces. You have to find maximum cost by cutting them in small piece.
 * 
 * Solution:
 *  Starts from the smaller and find the max cost for it. Use that cost in future values.
 */

 function getMaxCost(cost, size){
     let rod = [];
     rod [0] = 0;
     
     for ( let i = 1; i < size+1; i++){
         let max_val = -Infinity
         for(let j = 1; j<=i; j++){
             max_val = Math.max(max_val, cost[j]+ rod[i-j]);
         }
         rod[i]=max_val;
     }
     console.log(rod);
 }

 getMaxCost([0,2,4,5,7], 4);
