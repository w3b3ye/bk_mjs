//Array and Map function
'use strict'

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

console.log("Elements of previously defined 'numbers' array with index.")
numbers.forEach((element, index) => { console.log(`${index}: ${element}`) })

console.log("Elements of previously defined 'numbers' array.")
numbers.forEach(element => { console.log(`${element}`) })

const enclose = (tag, contents) => `<${tag}>${contents}</${tag}>`
const listItems = console.log(numbers.map(i => enclose('li', i)))


/* const listItems1 = console.log(numbers
    .map(htmlEscape)
    .map(i => enclose('li', i)))
 */

const items = ['Green eggs>', ' ', 'ham', 'Mr <& Mrs T Bloody Mary mix']
console.log('// Pipeline: First escape elements, then enclose them')

const htmlEscape = str => [...str].map(c => c === '<' ? '&lt;'
    : c === '&' ? '&amp;' : c).join('')

let listItems1 = enclose('ul',
    items
        .filter(i => i.trim() !== '') //This will filter out empty strings
        .map(htmlEscape) //This will remove escape characters like >
        .map(i => enclose('li', i)) //This will create HTML tags from array items
        .join('')) //This will join everything together

console.log('listItems:', listItems1) // ['<li>Green eggs</li>', '<li>ham</li>', '<li>Mr &amp; Mrs T Bloody Mary mix</li>']

// setTimeout(() => console.log('Goodbye'), 10000) // Function will say Goodbye after 10 sec pause 

const sayLater = (text, when) => {
    let task = () => console.log(text)
    setTimeout(task, when)
}

sayLater('Hello', 5000)  // Function will say Hello after 5 sec pause
sayLater('Goodbye', 10000) // Function will say Goodbye after 10 sec pause

