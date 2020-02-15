/**
 * Problem Statement:
 * You are given an array of integers. Your job is to calcuate the largest increasing sunsequence  from the array.
 * The final subsequent array should have all the elements in the increasing orders.
 * Solution:
 * Find the LIS(Longest Increasing Subsequent till that index).
 * Check if it can fit. if it does, add the number in this LIS.
 */

function largestSubsequence(array) {
    let LIS = Array.apply(null, { length: array.length }).map(function () { return 1; });
    let max_length = 0
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[i] > array[j] && LIS[i] < LIS[j] + 1) {
                LIS[i]++;
            }
        }
    }
    for (let i = 0; i < LIS.length; i++) {
        if (max_length < LIS[i]) {
            max_length = LIS[i];
        }
    }
    return max_length;
}

console.log(largestSubsequence([30, 45, 56, 67, 12, 11, 14, 23, 37, 50, 80]));