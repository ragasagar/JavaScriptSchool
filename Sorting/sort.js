function BubbleSort(array){
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

function SelectionSort(array){
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


let array = [2,4,1,6,33,5,6,44,36,3];
console.log(BubbleSort(array));
console.log(array);
console.log(SelectionSort(array));