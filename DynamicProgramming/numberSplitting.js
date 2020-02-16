/**
 * @ProblemStatement
 * You are given an integer. You need to split the integer in such a way that atleast 2 numbers sum get integer.
 * Split the number in such a way that splitted numbers give the max product.
 * 
 * @Solution
 * When you break the problem into sub problem, you may see that max[i] = max( (1* max[i-1], (2* max[i-2] ...... i-1*1)
 *
 */

 function maxProductSplit(number){
     maxProduct = Array.apply(null, { length: number+1}).map(function () { return -Infinity; });
     maxProduct[1]=0
     maxProduct[2]=1
     for(let i = 3 ; i<=number; i++){
         for(let j=1; j<i;j++){
            maxProduct[i] = Math.max(j* maxProduct[i-j], j*(i-j), maxProduct[i])
         }
     }
     console.log(maxProduct);
     return maxProduct[number];
 }

 console.log(maxProductSplit(6));

 /**
  * @Output
  * [ -Infinity, 0, 1, 2, 4, 6, 9 ]
  * 9
  */