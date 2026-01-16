
const p1 = new Promise((resolve , reject) =>{
    resolve('Promise Resolved')
    reject('Promise Rejected')
});
const p2 = new Promise((resolve , reject) =>{
    resolve('Promise Resolved')
    reject('Promise Rejected')
});

const p3 = new Promise((resolve , reject) =>{
    resolve('Promise Resolved')
    reject('Promise Rejected')
});

setTimeout(() => {
    console.log('I came from callback queue')
})

// microtask queue ki priorirty  > callback queue
p1.then(() => {
    console.log('Promise 1 came from microtask queue')
})
.catch(() => {
    console.log('hiiii')
})

p2.then(() => {
    console.log('Promise 2 came from microtask queue')
})
.catch(() => {
    console.log('hiiii')
})

p3.then(() => {
    console.log('Promise 3 came from microtask queue')
})
.catch(() => {
    console.log('hiiii')
})




