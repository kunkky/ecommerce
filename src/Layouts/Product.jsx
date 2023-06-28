import React, { useCallback, useState, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

const BaseUrl = 'https://dummyjson.com/';
const Product = ({ pageUrl, pageTitle }) => {
    //select from api
    const LoginUrl = BaseUrl + pageUrl;

//uselayout effect to set title
    useLayoutEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);


    const [loading, setLoading] = useState(true);
    const [feedback, setfeedback] = useState(null);
    const [products, setProducts] = useState(null);


    const fetchProduct = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(LoginUrl);
            const data = await response.json();
            if (response.ok) {
                setLoading(false);
                setProducts(data.products);
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

    //    fetch with useeffect if its general category
    
    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);
    //    fetch with useeffect if its dashboard

  return (
      <div className="h-[100%] grid grid-flow-row grid-cols-3 p-10 overflow-auto gap-10">
        {
              loading !== true  ? products.map((product, indexNumber) => (
                  <div key={indexNumber} className='rounded-sm shadow p-5 hover:shadow-md h-fit'>
                      <div className="flex justify-center items-center mb-5">
                      <img src={product.images[0]} alt={product.title} className='h-[200px] w-[100%]'/>
                      </div>
                      <div className="font-bold  text-purple-700">{product.title}</div>
                      <div className=' text-slate-400'>{product.brand} - {product.category}</div>
                      <div className=' text-slate-300 text-justify'>{product.description.length >90 ? product.description.slice(0,90)+ '...'
                      :
                          product.description
                      }</div>
                      <div className="font-bold text-xl  text-purple-700"><strike>({Number(product.price) + (Math.floor((Math.random() * 10) + 1))})</strike> {product.price} USD</div>
                      <div className="w-[100%] mt-3">
                          <Link to={`../products/${product.id}`} className='p-2 text-white text-center w-[100%] bg-purple-800 hover:bg-purple-950 rounded'>Check Am Out</Link>
                      </div>
                  </div>  
              )) : '...Loading'              
        }
      
      </div>
  )
}

export default Product