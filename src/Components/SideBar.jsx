import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'


const SideBar = () => {
//get stored variables 
//select from api
    const LoginUrl = 'https://dummyjson.com/products/categories';
    const [loading, setLoading] = useState(true);
    const [feedback, setfeedback] = useState(null);
    const [category, setCategory] = useState(null);


    const fetchNav = async () => {
        setLoading(true);
        try {
            const response = await fetch(LoginUrl);
            const data = await response.json();
            if (response.ok) {
                setLoading(false);
                setCategory (data);
               
            } else {
                setLoading(false);
                setfeedback(data.message)

            }
        } catch (error) {
            setLoading(false);
            setfeedback(error)
        }
    };

    //    fetch user product with useeffect
    useEffect(() => {
        fetchNav()
    }, [])
  return (
      <div className=" shadow border-r-slate-600 h-[100%] overflow-auto flex flex-col">
          <NavLink to={'/dashboard/'} key="dashboard" className=
              {({ isActive }) => {
                  return `${isActive
                      ? "capitalize w-[100%] p-5 bg-purple-900 px-7 font-bold text-white hover:text-purple"
                      : "capitalize w-[100%] p-5 text-purple-700 hover:text-white hover:bg-purple-900 hover:px-7 hover:font-bold"
                      }`;
              }}
          >Dashboard</NavLink>
            {
              loading !== true ? category.map((categories)=>(
                  <NavLink to={'/category/' + categories} key={categories} className=
                      {({ isActive }) => {
                          return `${isActive
                              ? "capitalize w-[100%] p-5 bg-purple-900 px-7 font-bold text-white hover:text-purple"
                              : "capitalize w-[100%] p-5 text-purple-700 hover:text-white hover:bg-purple-900 hover:px-7 hover:font-bold"
                              }`;
                      }}
                  >{categories.replace("-", " ")}</NavLink>
              )) : '...Loading'
            }
            {
              feedback !==null ? feedback : ''
            }
      </div>
  )
}

export default SideBar