//add(a, b)
//subtract(a, b)
//multiply(a, b)
//divide(a, b)

const add = (a,b) => a+b
const subtract = (a,b) => a-b
const multiply = (a,b) => a*b
const divide = (a,b) => a/b

console.log(add(2,5))
console.log(subtract(7,4))
console.log(multiply(16,7))
console.log(divide(100,2))

//console.log("Hi, my name is " + firstName + "I live in " + location + "and enjoy "+hobby);

const introduce = (firstName,location,hobby) => console.log(`Hi, my name is ${firstName} I live in ${location} and enjoy ${hobby}`)

introduce('nuk','bangkok','sleeping')
