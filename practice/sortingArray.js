let sorting = (arr) => {
    let n = arr.length

    for(let i = 0 ; i < n  ; i++ ){
        for(let j = 0 ; j < n - 1 - i ; j++ ){
            if(arr[j] > arr[j + 1]){ // choose the order (> = ascending order) , (< = descending order)
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
         
    }return arr;
}



let sorting1 = (arr) => {
    arr.sort((a,b) => b - a)

    return arr;
}


let array = [1,5,4,2,7,9,8];

console.log(sorting(array))