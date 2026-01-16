// Promises
// promise ki 3 state --> pending , resolved , reject


const ResolveBtn = document.querySelector('.resolve-btn')
const RejectBtn = document.querySelector('.reject-btn')

const p = new Promise((resolve , reject) => {
    ResolveBtn.addEventListener('click' , () => {
        resolve('Promise Resolved');
    })
    
    RejectBtn.addEventListener('click' , () => {
        reject('Promise Rejected')
    })
})
// jab promise resolve hota hai to .then() wala chalta hai 
// jab promise reject hota hai to .catch() wala chalta hai 

const result = p.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log('HIii')
})

// .then() bhi ek promise return karta hai , usko tum ek variable meiin save kar ke dekh sakte hi 


// mutation observer
// micortask queue ke andar promises aur mutation obeserver