function person(first,last,age,gender){
    this.firstName = first;
    this.lastName = last;
    this.age =age;
    this.gender = gender;
}


let me = new person("salman","faris","19","male");

console.log(me.gender);

