//Selection Sort;;
function selection(array) {
    
    for (let i = 0; i < array.length - 1; i++) {

        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }


        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}


const numbers = [64, 25, 12, 22, 11];
console.log("Sorted Array:- ", selection(numbers));
