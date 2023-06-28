import React from 'react'
import ContactForm from './../Components/ContactForm'
import contactBg from './../assets/images/contactBg.gif'


const Contact = () => {
    return (
        <>

            <div className='flex flex-row h-[auto]'>
                
                <div className="w-[40%] flex justify-start items-start">
                    <img src={contactBg} alt="" className='w-[100%]' />
                </div>
                <div className="w-[60%] flex flex-col p-20 justify-start items-start">
                    <h1 className='text-3xl text-purple-700 font-extrabold uppercase'>24/7 We dey </h1>
                    <h1 className='text-8xl text-purple-700 font-extrabold uppercase'>online</h1>
                    <h1 className='text-xl text-purple-900 italic'>So you fit get Cheap Items</h1>
                    <div className='flex my-5 border-t-2 w-[100%]'><span class="material-symbols-outlined">
                        call
                    </span>08104048887
                    </div>
                    <div className='flex my-5 border-t-2 w-[100%]'><span class="material-symbols-outlined">
                        mail
                    </span> <span> kunkkykukky@gmail.com</span>
                    </div>
                    <ContactForm/>
                </div>

            </div>


        </>
    )
}

export default Contact