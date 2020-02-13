/**
 * Problem Statement:
 * You are given the array of size n, each indexs has  values that represents the stock value that day.
 * You have to find the max profit in which you bought the stock and sold it.
 * The stock cannot be sold before the date you bought.
 * 
 * Solution:
 * First Calculate the MinPrice Till Date. Min_Uptil[i] = min(MinUptil[i-1], Price[i])
 * Calcualte the MaxProfit by subtraction current with minUptil Value: Max[i] = Price[i] - MinUptil[i]]
 */

 function getMax(Stock){
     MinUptil = [];
     MinUptil[0] = Stock[0];
     Max_Profit = [];
     
     highest_profit = -Infinity;

     for(let i = 1; i < Stock.length; i++){
         MinUptil[i]  = Math.min(MinUptil[i-1], Stock[i]);
     }

     for( let i = 0; i<Stock.length; i++){
         Max_Profit[i] = Stock[i] - MinUptil[i];
         highest_profit = Math.max(highest_profit, Max_Profit[i]);
     }

     return highest_profit;
 }

 console.log(getMax([8,1,2,4,6,7]));