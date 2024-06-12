import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { remove } from '../store/CartSlice'

function Cart() {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const removeFromCart = (proId) => {
    // dispatch remove action
    dispatch(remove({ id: proId}))
  }

  return (
    <div className=' mt-16 flex flex-col items-center'>
      <h1 className=" text-blue-800 font-bold font-serif my-8 text-4xl">Cart</h1>
      <div className=' flex flex-wrap gap-2 lg:gap-5 items-center justify-center'>
        {
          cart.map((product) => (
            <div key={product.id} className=' flex flex-col items-center w-[250px] h-[300px] lg:w-[300px] lg:h-[350px] justify-between border-2 p-2 lg:p-4 rounded-md'>
              <img className=' h-[100px] lg:h-[150px] object-cover' src={product?.image} alt={product?.title} />
              <div>
                <div className=' text-center'>
                  <Link to={`/product/${product?.id}`} className='font-bold mb-1 text-green-700'>{product?.title}</Link>
                </div>
                <p className=' text-center'>Rs.{product?.price}</p>
              </div>
              <button onClick={() => removeFromCart(product.id)} className=' py-2 px-4 bg-orange-400 text-white rounded-md'>Remove Item</button>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default Cart