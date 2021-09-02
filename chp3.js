//Array and Map function

const numbers = [65, 44, 12, 4]
const newArr = numbers.map(myFunction)
console.log(newArr)

function myFunction(num) {
    return num * 10
}

//Arrow function
//You can use => to create function instead of using 'keyword' function

const average = (x, y) => (x + y) / 2 //variable to hold function = parameters ==> function body
console.log("Example function with => and two parameters. Output is ", average(4, 5))

//Example with on parameter
const multiplyBy10 = x => x * 10
console.log("Example function with => and one parameter. Output is ", multiplyBy10(4))

//Example without any parameter
const dieToss = () => Math.trunc(Math.random() * 6) + 1
console.log("Example function with => and without parameters. Output is a random number ", dieToss())

//Complex function 
//A function to return the index of a passed array value
const indexOf = (arr, value) => {
    for (let i in arr) {
        if (arr[i] === value) return i
    }
    return -1
}

console.log(indexOf([10, 20, 4, 30], 4)) //Here we want to know the index of 4, which is '2'
