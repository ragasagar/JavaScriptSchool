function mergeSort(array1, array2) {
    const mergedData = [];
    let length1 = array1.length;
    let length2 = array2.length;
    let i = 0;
    let j = 0;

    if (!array1) {
        return array2;
    }
    if (!array2) {
        return array1;
    }

    while (i < length1 || j < length2) {
        if (array1[i] < array2[j])
            mergedData.push(array1[i++]);
        else
            mergedData.push(array2[j++]);
    }
    return mergedData;
}
console.log(mergeSort([3, 4, 6], [0, 1, 5, 6, 7]));

/*
Output:
  [ 0, 1, 3, 4, 5, 6, 6, 9, 7 ]
*/