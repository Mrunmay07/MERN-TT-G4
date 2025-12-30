const user = {
    firstName : 'Akash',
    lastName : 'Singh',
    age : 20,

    address : {
        city : 'Bhilai',
        state:'Chattisgarh',

        name : {
            hi : 'hello'
        }
    }
}

console.log(user.firstName) // dot notation
console.log(user['lastName']) // bracket notation

console.log(user.address.state)