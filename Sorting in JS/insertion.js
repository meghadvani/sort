//Insertion Sort;;;
function insertion(array){

    for(let i = 1; i < array.length; i++)
    {
        let key = array[i];
        let j = i - 1;


        while(j >= 0 && array[j] > key){
            array[j + 1] = array[j];
            j--;

        }
        array[j + 1] = key;
    }
    return array;
}


let numbers = [65 , 84 , 8 , 1 , 69];
console.log("Sorted Array:- " , insertion(numbers));
