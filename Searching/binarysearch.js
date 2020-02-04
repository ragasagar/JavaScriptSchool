/**Binary search search algorithm which perform searching operatio on sorted array.
 * This search algorith search on the basis of divide and conqour approach.
 * The search operation takes O(logn) time.
 * The mid_index is calcualted, if key is less than mid element, high index reduces to medium-1 else low increases to medium + 1
 * @param {*} array  sorted array where key is to be searched
 * @param {*} key data to be searched
 */
function binarySearch(array, key){
    let high = array.length-1;
    let low = 0;
    while(low<=high){
        let medium = Math.floor((high+low)/2);
        if(array[medium] === key) return medium;
        else if(array[medium]< key) low = medium+1;
        else high = medium -1;
    }
    return undefined;
}

let array = [ 2,4,5,7,9,77,88,99,999];
console.log(binarySearch(array, 2));
console.log(binarySearch(array,5555));

/**
 * Output:
0
undefined
 */