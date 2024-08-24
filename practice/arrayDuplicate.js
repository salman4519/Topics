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





let array = [1,2,2,3,4,4,5,5,6,7,8,3,2,2]

console.log(duplicate(array))