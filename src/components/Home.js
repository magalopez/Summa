import React, { useContext, useState } from 'react'

//API Contex
import { ProductsContext, CategoriesContext, CartContext } from '../Context'

//Components
import Header from './Home/Header'
import ContainerProducts from './Home/Products'
import ModalDetail from './Home/Modal'

function Home () {
  const [PRODUCTS,] = useContext(ProductsContext);
  const [CATEGORIES, SETCATEGORIES] = useContext(CategoriesContext);
  const [MODAL, SETMODAL] = useState(false)
  const [PRODMODAL, SETPRODMODAL] = useState({})
  const [cart, setCart] = useContext(CartContext);

  //Categories
  const uniqueItems = (x, i, array) => array.indexOf(x) === i;

  const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(uniqueItems);
  PRODUCT_CATEGORIES.push("todos");
  PRODUCT_CATEGORIES.sort();

  // Events
  const changeCategory = (category) => {
    SETCATEGORIES(category)
  }

  const showModal = ({id,title,price,description,image}) => {
    SETMODAL(true)
    SETPRODMODAL({id,title,price,description,image})
  }
 
  const hideModal = () => SETMODAL(false) 

  const addProductCart = (object) => {
    const newProducts =[...cart, object]
    setCart(newProducts)
    SETMODAL(false)
  }

    
  return (
    <>
      <Header eventlogo={changeCategory}/>
      { MODAL !== true ? 
      <ContainerProducts data={PRODUCTS} categories={PRODUCT_CATEGORIES} changeCategory={changeCategory} displayCategory={CATEGORIES}  modal={showModal}/> :
      <ModalDetail object={PRODMODAL} addCart={addProductCart} handleClose={hideModal} show={MODAL}/>}
    </>
  )
}

export default Home