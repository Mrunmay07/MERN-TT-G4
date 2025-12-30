/* const p = fetch('https://dummyjson.com/products')


p.then((data) => {
    return data.json() // PromiseResult : Object
})
.then((data2) => {
    console.log(data2.products)
}) */


// Async await

async function loadProducts(){
    const  p =await fetch('https://dummyjson.com/products')
    const data =await p.json()
    console.log(data.products)
}
loadProducts()