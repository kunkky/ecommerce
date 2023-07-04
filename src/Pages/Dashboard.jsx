import React from 'react'
import SideBar from './../Components/SideBar'
import Product from './../Layouts/Product'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
    const location = useLocation();
    console.log(location);

    return (
        <>
            <div className='grid grid-cols-[1fr_4fr] h-screen overflow-auto'>
                <SideBar/>                
                <Product pageUrl="products" pageTitle="Dashboard | BEND DOWN SELECT" />
            </div>
        </>
        )
}

export default Dashboard