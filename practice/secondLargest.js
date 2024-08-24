let secondLargest = (arr) => {
    for(let i = 0 ; i < arr.length ; i++ ){
        for(let j = i + 1 ; j < arr.length - 1 - i ; j++ ){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        } 
    }return arr[arr.length - 2];
}


let array = [1,3,2,11,4,6,8,7,9];

console.log(secondLargest(array))