/**
 * Given the number return the index value of Finonacci series which can be given as:
 * 
 * 0,1,1,2,3,5,8,13,21,34,55,89,144,233.....
 * 
 * The pattern of the sequence is that each value is calcuated by adding previous two numbers. i.e 5=> 2+3 
 */

function FibonacciIterative(number) {
    arr = [0, 1];
    for (let i = 2; i < number + 1; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[number];
}

function FibonacciRecursive(number) {
    if (number < 2) {
        return number;
    } else {
        return FibonacciRecursive(number - 1) + FibonacciRecursive(number - 2);
    }
}

console.log(FibonacciIterative(5));
console.log(FibonacciRecursive(5));