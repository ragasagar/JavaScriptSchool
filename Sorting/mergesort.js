/**
 * Merge Sort is one of the example of divide and conquor sorting. It reduce the element into small individaul and perfom the sorting operation.
 */

/**
 * This method divides the array into equal half and call the merge fuction.
 * The array is split into single element array by this function.
 * The value is then merged by merge function
 * The Time complexity for this method is O(nlogn).
 * @param {*} array 
 */
function mergesort(array) {
    if (array.length === 1) {
        return array;
    }
    let length = array.length;
    let mid = Math.floor(length / 2)
    const leftdata = array.slice(0, mid);
    const rightdata = array.slice(mid);


    return merge(mergesort(leftdata), mergesort(rightdata));
}

/**
 * This method perform the actual comparision and place it in result array.
 */
const merge = function (left, right) {
    let result = []
    let l = 0
    let r = 0
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }
    return result.concat(left.splice(l)).concat(right.splice(r));
}

let array = [2, 4, 1, 6, 33, 5, 16, 44, 36, 3];
console.log(mergesort(array));