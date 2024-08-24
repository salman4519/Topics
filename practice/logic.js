let duplicate = (arr) => {
    let length = arr.length;

    for(let i = 0 ; i < length ; i++ ){
        for(let j = i + 1 ; j < length ; j++ ){
            if(arr[i] == arr[j]){
                for(let k = j ; k < length - 1 ; k++ ){
                    arr[k] = arr[k + 1];
                   
                    
                }  length--;
                j--
            }
        }
    }
    arr.length = length;
    return arr;
}

let reverse = (arr) => {
    let first = 0;
    let last = arr.length - 1;

    while(first <= last ){
        let temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        
        first++;
        last--;
    }
    return arr
}


let sorting = (arr) => {
    let n = arr.length

    for(let i = 0 ; i < arr.length ; i++ ){
        for(let j = 0 ; j < arr.length - 1 - i ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
            }
        }
    }return arr;
}

let nthElement = (arr,val) => {
    let length = arr.length;
    for(let i = 0 ; i < arr.length ; i++ ){
        for(let j = 0 ; j < arr.length - 1 - i ; j++ ){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
   }


    return arr[val-1];
}


let oddEven = (arr) => {
    for(let i = 0 ; i < arr.length ; i++ ){
        for(let j = 0 ; j < arr.length - 1 - i ; j++ ){
            if(arr[j] % 2 ){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }return arr;
}


let array = [1,2,3,4,5,6,7,8]
let val = 1;

//console.log(reverse(duplicate(array)))
console.log(oddEven(array))





