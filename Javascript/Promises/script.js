const  p = new Promise((resolve , reject) => {
  resolve('Hello')
})
p.then((data) => {
    return data.toUpperCase()
})
.then((data2) => {
    return data2.toLowerCase()
})
.then((data3) => {
    console.log(data3)
})
.catch(() => {
    console.log('Promise Rejected')
})

console.log(p)

// Promise State
// pending
// fullfilled 
// rejected 

// Promise is a object that tells the eventual completion or failure of any asynchronous task