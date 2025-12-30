/* let userName1 = 'Akash' // 123
let userName2 = userName1   //124
userName2 = 'Ansh'
console.log('userName 2 : ' , userName2)
console.log('userName 1 :' ,userName1) */

// 123
/* let user1 = {
    firstName : 'Akash',
    lastName:'Singh'
}

let user2 = user1 // 123
user2.firstName = 'Ansh'
user2.lastName = 'Patel'
console.log(user2)
console.log(user1) */
// 123
let user1 = {
    firstName : 'Akash',
    lastName:'Singh'
}

// Spread Operator
let user2 = {...user1} // 124
/* Object.assign(user2 , user1) */
user2.firstName = 'Ansh'
console.log(user2)
console.log(user1)