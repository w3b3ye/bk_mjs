//Array and Map function

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)
console.log(newArr)

function myFunction(num) {
    return num * 10;
}