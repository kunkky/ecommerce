import React from 'react'
import SideBar from './../Components/SideBar'
import Product from './../Layouts/Product'

const Dashboard = () => {
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