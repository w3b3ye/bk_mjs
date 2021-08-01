let a = 6
let b = 7
let x

console.log(a * b)
console.log(typeof (a)) //Will print number.
console.log(typeof (x)) //Will print undefined

const notQuitePi = parseFloat('3.14')
console.log("This is a float :", notQuitePi) //Print number 3.14
const evenLessPi = parseInt('3.14')

console.log("This is an integer :", evenLessPi) //Print number 3 because we parse it to integer.
console.log("This is just a string :", notQuitePi.toString()) //Print 3.14 as string.
console.log("This will return a NaN (Not a Number) :", 0 / 0) //Will return a NaN.

let counter = 0
let riddle = counter++
console.log(riddle)

let enigma = ++counter
console.log(enigma)