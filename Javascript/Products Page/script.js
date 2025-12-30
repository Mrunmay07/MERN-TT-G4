
const container = document.querySelector('.container')

fetch('https://dummyjson.com/products')
.then((res) => {
    return res.json()
})
.then((data) => {
    const products = data.products;
    console.log(products)
    // [{id : , title} , {} , {} , {} ]

    products.forEach((product) => {
       const card = document.createElement('div') 
       card.classList.add('card')
       card.innerHTML = `
        <img src=${product.images[0]} alt="">
        <h1>${product.title}</h1>
        <p>${product.description}</p>
        <b>price : ${product.price}</b>
        <button>Add to Cart</button>
       `
        container.appendChild(card)
    })
})

// <div class='card'>
// </div>
