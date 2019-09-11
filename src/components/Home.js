import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from './Home/Header'
import Container from './Home/Products'
import { ProductsContext, CategoriesContext, SearchContext } from '../Context'



function Home () {
  const [PRODUCTS, SETPRODUCTS] = useContext(ProductsContext);
  const [CATEGORIES, SETCATEGORIES] = useContext(CategoriesContext);
  const [SEARCH, SETSEARCH] = useContext(SearchContext);

  // console.log('home', PRODUCTS)
  // console.log('home', CATEGORIES)
  // console.log('home', SEARCH)

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

  return (
    <>
      <Header event={handlerSearch} eventlogo={changeCategory}/>
      <Container data={PRODUCTS} categories={PRODUCT_CATEGORIES} changeCategory={changeCategory} displayCategory={CATEGORIES} search={SEARCH}/>
    </>
  )
}

export default Home