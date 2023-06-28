import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex flex-col w-[100%]'>
      <form action="">
        <label htmlFor="Full Name" className='text-purple-800'>Full Name</label>
        <input type="text" name='fullname' className='w-[100%] h-10 border-2 rounded-md  hover:border-purple-700' />
        <label htmlFor="phone Number" className='text-purple-800'>Phone Number</label>
        <input type="tel" name='phone' className='w-[100%] h-10 border-2 rounded-md  hover:border-purple-700' />
        <label htmlFor="Full name" className='text-purple-800'>Message</label>
        <textarea name="message" id="" className='w-[100%] h-40 border-2 rounded-md  hover:border-purple-700'></textarea>
        <button to='/login' className='p-4 bg-purple-700 mt-4 text-white rounded-md flex'>
          <span class="material-symbols-outlined">
            send
          </span>
        Oya Send</button>
      </form>
    </div>
  )
}

export default ContactForm