import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Addtocart from './Addtocart'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/ProductSlice'
import StatusCode from '../utils/StatusCode'

function Products() {

  const dispatch = useDispatch()
  const {data: products, status} = useSelector(state => state.products)

  useEffect(() => {
    fetchListProducts()
  }, [])  

  const fetchListProducts = async () => {
    // const response = await fetch(`https://fakestoreapi.com/products`)
    // const data = await response.json()
    // setProducts(data)

    //dispatch an action for get products
    dispatch(getProducts())
    
  }  

  
  if(status === StatusCode.LOADING) {
    return <h1 className='text-2xl text-center mb-20'>Loading...</h1>
  }

  if(status === StatusCode.FAILED) {
    return <h1 className='text-2xl text-center mb-20'>Failed to load products</h1>
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
               <Addtocart product={product}/>
            </div>
         ))
       } 
    </div>
  )
}

export default Products