const request = fetch('https://dummyjson.com/products')

request.then((res) => {
    return res.json();
    
})
.then((data) => {
    console.log(data)
})