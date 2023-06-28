import React from 'react'
import { Link } from 'react-router-dom'

const ForgetForm = () => {
  return (
      <div className='flex flex-col w-[70%] mt-20 justify-center items-center'>
        <h1 className='text-6xl text-purple-950 font-extrabold m-5 w-[100%]'>forget password</h1>
          <form action="" className='w-[100%]'>
              <label htmlFor="Full Name" className='text-purple-800'>Email Address</label>
              <input type="text" name='fullname' className='w-[100%] h-10 border-2 rounded-md mb-5 hover:border-purple-700' />
              <button to='/login' className='p-4 bg-purple-800 mt-4 w-[100%] text-white rounded-md flex justify-center hover:bg-purple-900'>

                 Reset Password</button>

          </form>
          <p className='mt-10 text-center'>Abi you don remember <br /> <Link to="/login" className='text-purple-700'>Oya go bend down</Link></p>
      </div>

  )
}

export default ForgetForm