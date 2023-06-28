import React, { useCallback, useState, useEffect, useLayoutEffect } from 'react'


const BaseUrl = 'https://dummyjson.com/';

const SingleProduct = ({ pageUrl, pageTitle }) => {
    //select from api
    const LoginUrl = BaseUrl + pageUrl;
    console.log(LoginUrl);
    //uselayout effect to set title
    useLayoutEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);


    const [loading, setLoading] = useState(true);
    const [feedback, setfeedback] = useState(null);
    const [products, setProducts] = useState(null);
    const [stateImg, setstateImg] = useState(null);

    const Cart =[];
    const fetchProduct = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(LoginUrl);
            const data = await response.json();
            if (response.ok) {
                setLoading(false);
                setProducts(data);

            } else {
                setLoading(false);
                setfeedback(data.message)
            }
        } catch (error) {
            setLoading(false);
            setfeedback(error)
        }
    }, [LoginUrl]
    )

    const addToCart = () => {

    }

    //    fetch with useeffect if its general category

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    //change image tumb nail
    return (
        < div className="h-[100%] grid grid-flow-row grid-cols-2 p-10 overflow-auto" >
            {
                loading !== true ?
                    <>  <div className="h-[100%]">
                        <img src={stateImg !== null ? stateImg : products.images[0]} alt={products.title} className='w-[80%]  aspect-square mb-10' />
                        <div className="grid grid-flow-col gap-10 justify-between w-[80%]">
                            {
                                products.images.map((image, index)=>(
                                    <div className="h-[100%] aspect-square rounded bg-black" key={index}>
                                        <img src={image} alt="" className='h-full w-full cursor-pointer' onClick={()=>(setstateImg(image))}/>
                                    </div>
                                
                                ))
                            }
                        </div>
                    </div>
                        <div className=" flex flex-col justify-center ">
                            <h1 className='text-purple-800 font-bold text-2xl mb-2'>{products.title}</h1>
                            <h1 className='capitalize text-purple-800 mb-2'>Category: {products.category}</h1>
                            <h1 className='text-slate-400 mb-2'>{products.description}</h1>
                            <h1 className='font-bold text-3xl py-5 mb-2'>{products.price} USD</h1>
                            <button onClick={addToCart} className='hover:bg-purple-900 flex justify-center items-center capitalize bg-purple-600 p-5 text-white rounded'><span className="material-symbols-outlined">
                                add_shopping_cart
                            </span> Put for bag</button>
                        </div>
                    </>
                    :
                    '...Loading'
            }

        </div >

    )
}

export default SingleProduct