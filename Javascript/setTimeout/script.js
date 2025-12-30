/* // JS -> single Threaded

// sync JS 
console.log('Hello 3')
console.log('Hello 4')

// Async JS
setTimeout(() => {
    console.log('Hello 2')
} ,6000)

setTimeout(() => {
    console.log('Hello world')
})

setTimeout(() => {
    console.log('Hello 1')
} , 5000) */


const timerId= setInterval(() => {
    console.log('Hello world')
} , 3000)
console.log(timerId)