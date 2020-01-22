function firstReurringSolution(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return array[i];
            }
        }
    }
    return undefined;
}


function firstReurringSolution2(array) {
    let map = {};
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]]) {
            return array[i];
        }
        else {
            map[array[i]] = 1;
        }
    }
    return undefined;
}

console.log(firstReurringSolution([1, 2, 5, 3, 7, 9, 1, 5, 7, 3, 6]));
console.log(firstReurringSolution2([1, 2, 5, 3, 7, 9, 1, 5, 7, 3, 6]));

// The above solutions may give different answer for following array: [1,2,2,1,3,4,6]
/**
 * First solution gives 1 as output because the outer loop  of 1 will match with inner 1 before 2.
 * 2nd solitution gives 2 as 2 occur first before 1.
 */

 