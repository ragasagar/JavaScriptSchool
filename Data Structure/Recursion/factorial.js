

/**
 * 
 *Given a number return the factorial of it which can be explained as:
 if n= 5 5! = 5*4*3*2*1 = 120.
 For calculating the factorial of particular we can perform n! = n * (n-1)!.
 */


/**
 * This method provides the recursive solution for factorial problem. The ending case is if number is 1 return 1. Due to the return statement, the method is poped out from the call stack. The number is multiplied with the number in top of stack and return the value. This process is continued till all methods is poped and gives the final answer. 
 * @param {*} number 
 */
function findFactorialRecursive(number) {
    if (number == 1) {
        return 1;
    }
    else {
        return number * findFactorialRecursive(number - 1);
    }
}

/**
* This method gives the iterative apporach to solve the factorial.
*/
function findFactorialIterative(number) {
    let value = 1;
    for (let i = 1; i <= number; i++) {
        value *= i;
    }
    return value;
}


console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));