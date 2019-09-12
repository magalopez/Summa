import React, {useContext, useState} from 'react'
import {CartContext, CategoriesContext} from '../Context'
import {ORDERSDATA} from '../services/Firebase-config'

// Components
import Client from './Shopping/client'
import ProductList from './Shopping/productList';
import Header from './Home/Header'



function ShoppingCart () {
  const [PRODUCTS, SETPRODUCTS] = useContext(CartContext);
  const [category, setCategory] = useContext(CategoriesContext)
  const [client, setClient] = useState('')
  console.log(PRODUCTS); 


  //Aumentar contidad de productos de la lista
  const addToCart = id => {
    let productsNew = [...PRODUCTS];
    productsNew.forEach(prod => {
      if (prod.id === id) {
        return (prod.counter = prod.counter + 1);
      }
    });
    return SETPRODUCTS(productsNew);
  };

  //Disminuir cantidad de productos de la lista
  const removeFromCart = id => {
    let productsNew = [...PRODUCTS];
    productsNew.forEach(prod => {
      if (prod.id === id && prod.counter > 0) {
        return (prod.counter = prod.counter - 1);
      }
    });
    return SETPRODUCTS(productsNew);
  };

  //Eliminar producto de la lista
  const deleteFromCart = id => {
    let productsNew = [...PRODUCTS];
    productsNew.forEach((prod, index) => {
      if (prod.id === id) {
        return productsNew.splice(productsNew[index], 1);
      }
    });
    return SETPRODUCTS(productsNew);
  };

  //Suma de todos los elementos de la matriz
  const getTotal = products => {
    let emptyArray = [];
    let emptyArrayContent = 0;
    products.forEach(prod => {
      return emptyArray.push(prod.price);
    });

    emptyArray.forEach(prod => {
      return (emptyArrayContent += prod);
    });
    return emptyArrayContent;
  };

  const sendOrders = (products, clientName) => {
    ORDERSDATA.add({
      name: clientName,
      cart: products,
      status: "pendiente",
      time: new Date()
    });
    setClient("");
    SETPRODUCTS([]);
  };

  const changeCategory = (category) => {
    setCategory(category)
  }

  return (
    <>
      <Header eventlogo={changeCategory}/>
      <Client client={client} setClient={setClient} />
      <ProductList 
        products={PRODUCTS}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        deleteFromCart={deleteFromCart}
        getTotal={getTotal}
        sendOrders={sendOrders}
        client={client}
      />
    </>
  )
}

export default ShoppingCart