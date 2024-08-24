const buf = Buffer.from("heyy")

console.log(buf.toString()) // only take value by binary so converting into string

console.log(buf[0]) //code of each letters 
console.log(buf[1])
console.log(buf[2])

const buf1 = Buffer.alloc(6); // defining the size

buf1.write("salman")// defining the letters or input

buf1[0] = 111; // 111 is code number od O
buf1[3] = 121; // 121 is code number of Y

console.log(buf1.toString())