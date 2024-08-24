let prime = (num) => {
    if(num <= 1)return false;

    for(let i = 2 ; i < num ; i++){
        if(num % i == 0)return false;
    }
    return true;
}


prime(11)? console.log("is prime number") : console.log("not a prime number"); 