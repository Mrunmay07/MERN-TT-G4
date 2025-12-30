// for of loop // arrays , strings
/* for(let fruit of fruits){
    console.log(fruit)
    
} */

// for in loop
// objects

/* const users = {
    firstName : 'Pratham',
    lastName : 'Kumar'
    
}

for(let user in users){
    console.log(users[user])
} */

let fruits = ["apple", "mango", "banana", "orange"];

const result = fruits.forEach((el) => {
    console.log(el)
    return 'Hello'
})  

console.log(result)