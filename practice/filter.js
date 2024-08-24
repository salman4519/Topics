let ages = [11,33,12,36,47,13,45];

function minor(a){
    return a%2;
}
console.log(ages.filter(minor))