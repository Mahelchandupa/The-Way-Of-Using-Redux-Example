import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchListProducts()
  }, [])  

  const fetchListProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`)
    const data = await response.json()
    setProducts(data)
  }  

  return (
    <div className=' flex flex-wrap gap-2 lg:gap-5 items-center justify-center'>
       {
         products.map((product) => (
            <div key={product.id} className=' flex flex-col items-center w-[250px] h-[300px] lg:w-[300px] lg:h-[350px] justify-between border-2 p-2 lg:p-4 rounded-md'>
               <img className=' h-[100px] lg:h-[150px] object-cover' src={product?.image} alt={product?.title}/>
               <div>
                    <div className=' text-center'>
                        <Link to={`/product/${product?.id}`} className='font-bold mb-1 text-green-700'>{product?.title}</Link>
                    </div>
                    <p className=' text-center'>Rs.{product?.price}</p>
               </div>
               <button className=' py-2 px-4 bg-orange-400 text-white rounded-md'>Add to Cart</button>
            </div>
         ))
       } 
    </div>
  )
}

export default Products