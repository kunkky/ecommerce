import React from 'react'
import forgetBg from './../assets/images/notfound.avif'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
  <>
    <div className='flex flex-col h-screen items-center justify-center'>
    <div className='h-[40%] mt-2'>
        <img src={forgetBg} alt="Forget"  className='h-[100%]'/>
    </div>
    <div className='h-[60%] flex justify-center items-center flex-col'>
                  <h1 className='text-5xl font-extrabold m-2 text-center'> Waka Waka <br /> You don Lost</h1>
        <Link to="/" className='bg-purple-800 hover:bg-purple-700 text-white p-5 rounded-md'>Go Back Home</Link>
    </div>
    </div>
  
  </>
  )
}

export default NotFound