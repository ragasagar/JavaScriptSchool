/**
 * Problem Statement:
 *  You are given 2*N gird and infinite numbers of dominos size 1*2. Your task to find the maximum number of ways in which dominos can be fit inside the grid.
 * Rules: The dominos can be arranged in the form of  horizontal(1*2) or vertical (2*1)
 *
 * Solution:
 *  While placing the last dominos, It will be either horizontal or vertical. If it is horizontal. Find the way[n-2]. If it is vertical find way[n-1]. Add both .
 * thus way[n] = way[n-1] +way[n-2](i.e fibonacci Series)
 */

 function dominosArrangement(n){
     let ways = [];
     ways[0] = 1;
     ways[1] = 1;
     for(let i= 2; i<n+1; i++){
         ways[i] = ways[i-1] + ways[i-2];
     }
     return ways[n];
 }

 console.log(dominosArrangement(3));


 //This problem can also solved in recursive way. The link is: fibonacci.js