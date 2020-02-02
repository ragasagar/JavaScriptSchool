/**
 * Quick Sort is divide and conqour algorithm. It picked the pivot element perform the partition the basis of this element
 */


/**
 * This fuction perform the partition task. This element take last element of the array as the pivot element.
 * It places pivot element in the correct postion of the array and divide an array.
 * The left array have all elements smaller than pivot element
 * The right element have all the elements greater than pivot
 * @param {*} arr Intial array to be sort.
 * @param {*} low The first element in an arrays
 * @param {*} high The last element in arrays
 */

function partition(arr, low, high) {
    let i = low - 1;
    let pivot = arr[high];
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    console.log(arr)
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        temp = partition(arr, low, high);

        quickSort(arr, low, temp-1)
        quickSort(arr, temp + 1, high);
    }
    return arr
}

let array = [2, 4, 1, 6, 33, 5, 16, 44, 36, 3];
console.log(quickSort(array, 0, array.length - 1));