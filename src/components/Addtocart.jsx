import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/CartSlice'

function Addtocart({ product }) {

  const dispatch = useDispatch()
  
  const addTocart = (product) => {
    dispatch(add(product))
  }

  return (
    <button onClick={() => addTocart(product)} className=' py-2 px-4 bg-orange-400 text-white rounded-md'>Add to Cart</button>
  )
}

export default Addtocart