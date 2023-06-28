import React from 'react'
import LoginBg from './../assets/images/loginBg.gif'
import ForgetForm from './../Components/ForgetForm'


const Forget = () => {
  return (
      <>
          <div>
              <div className='flex flex-row h-[auto]'>

                  <div className="w-[40%] flex justify-start items-start">
                      <img src={LoginBg} alt="" className='w-[100%]' />
                  </div>
                  <div className="w-[60%] flex flex-col justify-start items-start">
                      <ForgetForm />
                  </div>

              </div>


          </div>
      </>
  )
}

export default Forget