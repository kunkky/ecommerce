import React from 'react'
import SingleProduct from './../Layouts/SingleProduct'
import SideBar from '../Components/SideBar'
import { useParams } from "react-router-dom";


const SinglePage = () => {
  const { id } = useParams();
  return (
      
      <div className='grid grid-cols-[1fr_4fr] h-screen overflow-auto'>
        <SideBar />
          <SingleProduct pageUrl={`products/${id}`} pageTitle={`  | BEND DOWN SELECT`} />
      </div>

  )
}

export default SinglePage