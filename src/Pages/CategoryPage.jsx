
import SideBar from './../Components/SideBar'
import Product from './../Layouts/Product'
import { useParams } from "react-router-dom";


const CategoryPage = () => {
  //reach out to param
  const { id } = useParams();

  //set navigation
  return (
    <>
      <div className='grid grid-cols-[1fr_4fr] h-screen overflow-auto'>
        <SideBar />
        <Product pageUrl={`products/category/${id}`} pageTitle={`${id}  | BEND DOWN SELECT`} />
      </div>
    </>
  )
}

export default CategoryPage