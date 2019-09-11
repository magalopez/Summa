import React, { useContext } from 'react'
import { ProductsContext, CategoriesContext } from '../Context'
import HeaderDetails from './Details/Header'
import ProductDetails from './Details/Product';


function Details () {
  const [PRODUCTS, SETPRODUCTS] = useContext(ProductsContext);
  const [CATEGORIES, SETCATEGORIES] = useContext(CategoriesContext);

  
  const changeCategory = (category) => {
    SETCATEGORIES(category)
  }

  return (
    <>
      <HeaderDetails eventlogo={changeCategory}/>
      <ProductDetails />
    </>
  )
}

export default Details