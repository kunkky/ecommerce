import React from 'react'
import { Link } from 'react-router-dom'
import heroBg from './../assets/images/herobg.gif'

const Home = () => {
  return (
      <>
          <div className='flex flex-row h-[700px]'>
          <div className="w-[50%] flex flex-col p-20 justify-center items-start">
            <h1 className='text-4xl text-purple-700 font-extrabold uppercase'>Bend Down </h1>
                  <h1 className='text-8xl text-purple-700 font-extrabold uppercase'>Select!</h1>
            <h1 className='text-xl text-purple-900 italic'>Your Number Store for Cheap items</h1>
                  <p className=' pt-5 text-purple-800'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
             Quaerat rem sequi adipisci exercitationem dolorem doloremque <br />
              quidem maxime! Dignissimos, sequi.
              </p>
                  <Link to='/login' className='p-4 bg-purple-700 mt-4 text-white rounded-md flex'><span className="material-symbols-outlined">
                      add_shopping_cart
                  </span> Shop Now</Link>
          </div>
              <div className="w-[50%] flex justify-start items-start">
                  <img src={heroBg} alt="" className='w-[100%]'/>
              </div>              
          </div>
      </>


  )
}

export default Home