import React, {useContext, useState} from 'react'
import {CartContext, CategoriesContext} from '../Context'
import {firestore} from '../services/Firebase-config'

// Components
import Client from './Shopping/client'
import ProductList from './Shopping/productList';
import Header from './Home/Header'

function ShoppingCart () {
  const [PRODUCTS, SETPRODUCTS] = useContext(CartContext);
  const [, setCategory] = useContext(CategoriesContext)
  const [client, setClient] = useState('')

  //Eliminar producto de la lista
  const deleteFromCart = id => {
    let productsNew = [...PRODUCTS];
    productsNew.forEach((prod, index) => {
      if (prod.object.id === id) {
        return productsNew.splice(productsNew[index], 1);
      }
    });
    return SETPRODUCTS(productsNew);
  };

  
  const sendOrders = async (products, clientName) => {
    try 
    { 
      await firestore.collection("orders").add({
        name: clientName,
        cart: products,
        status: "pendiente",
        time: new Date()
      });
      setClient("");
      SETPRODUCTS([]);  
    }
    catch (e)
    {
      alert(e)
    }
  };

  const changeCategory = (category) => {
    setCategory(category)
  }

  return (
    <>
      <Header eventlogo={changeCategory} />
      <Client client={client} 
              setClient={setClient} 
      />
      <ProductList products={PRODUCTS}
                   deleteFromCart={deleteFromCart}
                   sendOrders={sendOrders}
                   client={client}
      />
    </>
  )
}

export default ShoppingCart