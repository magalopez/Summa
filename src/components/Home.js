import React, { useContext, useState } from 'react'

//API Contex
import { ProductsContext, CategoriesContext, SearchContext } from '../Context'

//Components
import Header from './Home/Header'
import ContainerProducts from './Home/Products'
import ModalDetail from './Home/Modal'

function Home () {
  const [PRODUCTS,] = useContext(ProductsContext);
  const [CATEGORIES, SETCATEGORIES] = useContext(CategoriesContext);
  const [SEARCH, SETSEARCH] = useContext(SearchContext);
  const [MODAL, SETMODAL] = useState(false)
  const [PRODMODAL, SETPRODMODAL] = useState({})

  //Categories
  const uniqueItems = (x, i, array) => array.indexOf(x) === i;

  const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(uniqueItems);
  PRODUCT_CATEGORIES.push("todos");
  PRODUCT_CATEGORIES.sort();

  // Events
  const changeCategory = (category) => {
    SETCATEGORIES(category)
  }

  const handlerSearch = (e) => {
    SETSEARCH(e.target.value);
  }

  const showModal = ({id,title,price,description,image}) => {
    SETMODAL(true)
    SETPRODMODAL({id,title,price,description,image})
  }
 
  const hideModal = () => SETMODAL(false) 
  
  return (
    <>
      <Header event={handlerSearch} eventlogo={changeCategory}/>
      { MODAL !== true ? 
      <ContainerProducts data={PRODUCTS} categories={PRODUCT_CATEGORIES} changeCategory={changeCategory} displayCategory={CATEGORIES} search={SEARCH} modal={showModal}/> :
      <ModalDetail object={PRODMODAL} handleClose={hideModal} show={MODAL}/>
    }
      
    </>
  )
}

export default Home