import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Addtocart from '../components/Addtocart'

function Product() {

  const { productId } = useParams()  

  const [productDetails, setProductDetails] = useState({})

  useEffect(() => {
    fetchListProducts()
  }, [])  

  const fetchListProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const data = await response.json()
    console.log(data)
    setProductDetails(data)
  }  


  return (
    <div className='flex items-center justify-center w-full h-screen mt-[40px]'>
       <div className=' border-2 lg:w-[50%] lg:min-h-[500px] mx-auto p-8 flex sm:flex-row w-[90%] flex-col gap-3 sm:gap-6'>
          <div className=' sm:w-2/4 w-full flex items-center justify-center'>
            <img className=' w-[70%] h-auto' src={productDetails?.image} alt="" />
          </div>
          <div className=' sm:w-2/4 w-full flex flex-col gap-4'>
            <h1 className=' text-2xl font-bold'>{productDetails?.title}</h1>
            <p className=' text-red-500 text-2xl'>Rs.{productDetails?.price}</p>
            <p className=' text-slate-500'>{productDetails?.description}</p>
            <Addtocart product={productDetails}/>
          </div>
       </div>
    </div>
  )
}

export default Product