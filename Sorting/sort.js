function BubbleSort(data){
    array = data;
    for( let i = 0; i< array.length; i++){
        for(let j = 0 ; j<array.length-i; j++){
            if(array[j]>array[j+1]){
                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

function SelectionSort(data){
    array = data;
    for( let i = 0; i< array.length; i++){
        let min = array[i];
        let index = i;
        for (let j = i+1; j< array.length; j++){
            if(array[j]< min){
                min = array[j];
                index = j;
            }
        }
        temp = array[i];
        array[i] = min;
        array[index] = temp;
    }
    return array;
}

function insertionSort(data){
    array = data;
    let length = array.length;
    for(let i = 0;i<length ; i++){
        if(array[i]< array[0]){
            array.unshift(array.splice(i,1)[0]);
        } else{
            for(let j = 1; j< i; j++){
                if(array[i] > array[j-1] && array[i]<array[j]){
                    array.splice(j,0,array.splice(i,1)[0]);
                }
            }
        }

    }
    return array;
}

let array = [2,4,1,6,33,5,16,44,36,3];
// console.log(BubbleSort(array));
// console.log(array);
// console.log(SelectionSort(array));
console.log(insertionSort(array));