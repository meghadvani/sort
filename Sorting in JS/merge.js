//Merge Sort;;

function mergesort(array){
    if(array.length <= 1)
    {
        return array;
    }


    let mid = Math.floor(array.length / 2);
    let left = array.slice(0,mid);
    let right = array.slice(mid);

    return merge(mergesort(left) , mergesort(right));
}

function merge(left , right){
    let result = [];
    let leftindex = 0;
    let rightindex = 0;

    while(leftindex < left.length && rightindex < right.length)
    {
        if(left[leftindex] < right[rightindex])
        {
            result.push(left[leftindex]);
            leftindex++;
        }    
        else{
            result.push(right[rightindex]);
            rightindex++;
        }
    }

    return result.concat(left.slice(leftindex)).concat(right.slice(rightindex));
}

let numbers = [64 , 57 , 25 , 2 , 3];
console.log("Sorted Array:- " , mergesort(numbers));