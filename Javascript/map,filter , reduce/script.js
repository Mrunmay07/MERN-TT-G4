
// question : [3 , 4 , 5 , 6 ,7]

/* const result = numbers.map((num) => {
    return num + 2;
})

console.log(result) */


// ['AKASH' ,'PRATHAM' ,'ANSH']
/* const result1 = names.map((name) => {
    return name.toUpperCase()
})
console.log(result1) */


/* const names = ['akash' , 'pratham' , 'ansh']

const filterNum = numbers.filter((num) => {
    return num > 3
})
console.log(filterNum)

// ['akash' , 'ansh']
const filterNames = names.filter((name) => name.startsWith('a')
).map((el) => el.toUpperCase())
// chaining
console.log(filterNames) */


const numbers = [1 , 2 , 3 , 4 , 5] // 15

// accumulator , current

const result = numbers.reduce((acc , curr) => {
    return acc+ curr
} , 10)
console.log(result)
