import React, {useState, useEffect } from 'react';
import { PRODUCTSDATA } from "./services/Firebase-config";

export const ProductsContext = React.createContext();
export const CategoriesContext = React.createContext();
export const SearchContext = React.createContext();
export const AuthUserContext = React.createContext();

const Storage = ({children}) => {
  const [PRODUCTS,SETPRODUCTS] = useState([])
  const [CATEGORIES, SETCATEGORIES] = useState('todos')
  const [SEARCH,SETSEARCH] = useState('')
  const [AUTH, SETAUHT] = useState(false)

  useEffect(() => {
    PRODUCTSDATA.onSnapshot(snap => {
      let products = [];
      snap.forEach(doc => {
        products.push(doc.data());
      });
      SETPRODUCTS(products);
    });
  }, []);

 return (
  <>
    <ProductsContext.Provider value={[PRODUCTS,SETPRODUCTS]}>
      <CategoriesContext.Provider value={[CATEGORIES, SETCATEGORIES]}>
        <SearchContext.Provider value ={[SEARCH,SETSEARCH]}>
          <AuthUserContext.Provider value={[AUTH, SETAUHT]}>
          {children}
          </AuthUserContext.Provider>
        </SearchContext.Provider>
      </CategoriesContext.Provider>
    </ProductsContext.Provider>
  </>
 )
}

export default Storage