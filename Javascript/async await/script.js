
async function makeCall(){
   
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    return data
    
}


// hi tab tak print nhi higa jab tak data nhi aaega 

// await keyword is only valid inside async functions 
// but if you want to use it you have to give attribute type='module' in script tag

// return data karte ho to --> promise return hota hai PromiseResult : Object

// makeCall() is giving a Promise 

makeCall().then((data) => {
    console.log(data.products)
})