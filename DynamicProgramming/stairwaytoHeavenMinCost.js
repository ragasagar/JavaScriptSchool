/**
 * @ProblemStatement
 * You want to reach the heaven which is at the  top of the staicase. There are n steps to reach the top. Each step is assocaited with some cost. For each cost you can take either 1,2,3 steps. You can starts with the lowermost steps.
 * Find the minimum cost to reach the top of the stair.
 * 
 * @Solution
 * 1. First find the way in which the user can take final step. Here we can take 3 atmost steps, thus user have three choices. n-1,n-2 and n-2 .
 * 2. Find the minimum ways to reach the n-1,n-2,n-3 ways.
 * 3. Find the minimum among  the three.
 *  For each min_way[i], min_way[i] = min(fee[i-1] + min_way[i-1],
 *                                        fee[i-2] + min_way[i-2],
 *                                        fee[i-3] + min_way[i-3])
 */

 function minCost(fee){
     let min_way = [];
     min_way[0] = 0;
     min_way[1] = min_way[2] = fee[0];
     for(let i = 3; i<fee.length+1 ; i++){
         min_way[i] = Math.min(fee[i-1] + min_way[i-1],
                         fee[i-2] + min_way[i-2],
                         fee[i-3] + min_way[i-3])
     }
     console.log(min_way)
     return min_way[fee.length];
 }

 let fee = [2,1,3,1,2];
 console.log(minCost(fee));