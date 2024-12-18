//Bubble Sort Program;;;
function bubble(array){
    let swap , temp;
    n = array.length;
    do{
        swap = false;
        for(let i = 0 ; i <= n - 1 ; i++)
        {
            if(array[i] > array[i + 1])
            {    
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;  
                swap = true; 
            }
        }
        n--;
    }while(swap);
    return array;
}

let arr = [12 , 14 , 1 , 6 , 31 , 69];
console.log("Unsorted Array:- ", arr);
console.log("Sorted Array:- " , bubble(arr));















































// function bubbleSort(arr) {
//     let n = arr.length;
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < n - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//                 swapped = true;
//             }
//         }
//         n--;
//     } while (swapped);
//     return arr;
// }

// const numbers = [64, 34, 25, 12, 22, 11, 90];
// console.log("Unsorted Array:", numbers);
// console.log("Sorted Array:", bubbleSort(numbers));



