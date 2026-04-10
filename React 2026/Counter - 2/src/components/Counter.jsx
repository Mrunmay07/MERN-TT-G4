import { useEffect, useState } from "react";

function Counter() {

    const [count , setCount] = useState(0)
    const [products , setProducts] = useState([])

    const handleClick = () => {
        setCount(count + 1)
    }

   async function getProducts(){
     const res = await fetch('https://dummyjson.com/products')
     const data = await res.json()
     console.log(data)
     setProducts(data.products)
   }

   useEffect(() => {
       getProducts()
   } , [])


  return (
    <>
        <h1>{count}</h1>
      <button onClick={handleClick}>INCREMENT</button>

      <ul>
        {
            products.map((currProduct) => {
                return  <div>
                    <img src={currProduct.images[0]} alt="" />
                    <li>{currProduct.title}</li>
                </div>
            })
        }
      </ul>
    </>
  );
}

export default Counter;
