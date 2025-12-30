/* const user1 = {
    firstName : 'Akash',
    lastName : 'Singh'
} // 123

// Spread Operator
const user2 = {...user1} // 124
user2.firstName= 'Pratham'
console.log(user1)

const arr1 = [1,3,4 ,5]
const arr2 = [...arr1]
console.log(arr2) */

// Rest parameter
// c = [10 , 20]
function sum(a , b , ...c){
    let total = a + b // 30 + 40 + 10 + 20 

    for(let el of c){
        total += el
    }
    return total

}
const result = sum(30 , 40 , 10 , 20)
console.log(result)