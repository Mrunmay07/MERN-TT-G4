const request = fetch('https://dummyjson.com/products', {
    method : 'GET',
   /*  headers : {'Content-Type': 'application/json'},
    body:JSON.stringify({
        title:'DBZ beast gohan figure'
    }) */
})

request.then((res) => {
    
    return res.json()  // this will return a promise with PromiseResult : Object  and we we only return res then it will give a Response which contains a body and a headers 
})
.then((data) => {
    
   console.log(data) // this will return an object which contains that products array
})


