let reversedArray = (arr) => {
    let first = 0;
    let last = arr.length - 1;

    while(first < last ){
        [arr[first],arr[last]] = [arr[last],arr[first]]

        first++
        last--
    }
    return arr;
}


let array = [11,2,45,33,4,55]

console.log(reversedArray(array))





