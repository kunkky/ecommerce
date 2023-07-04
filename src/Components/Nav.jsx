import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const CartItem = sessionStorage.getItem('Cart')
console.log(CartItem);
  let CartNum = null;
  if (CartItem!==null){
    CartNum = CartItem.length;
  }
  else{
    CartNum=0;
  }
  return (
    <div className='h-[90px] w-screen bg-white border-b-2 shadow-sm flex justify-between items-center px-10'>
        <div className="flex items-start w-[50%]">
        <Link to="/" className='text-purple-900 hover:font-bold hover:underline'>Home</Link>        
        </div>
        <div className="flex flex-row justify-between items-center w-[50%]">
            <Link to='/about' className='text-purple-900 hover:font-bold hover:underline'>About</Link>
        <Link to='/contact' className='text-purple-900 hover:font-bold hover:underline'>Contact</Link>
        <Link to='/login' className='text-purple-900 hover:font-bold hover:underline'>Buy Product</Link>
          <div className=" text-red-600 flex items-center justify-center cursor-pointer">
          <span className="material-symbols-outlined">
            shopping_cart_checkout
          </span> ({CartNum})
          </div>
        </div>
    </div>
  )
}

export default Nav