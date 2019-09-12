import React from "react";
import Product from "./product";
import ButtonOfTotal from "./totalPrice";

const ProductList = ({
  products,
  addToCart,
  removeFromCart,
  deleteFromCart,
  getTotal,
  sendOrders,
  client
}) => {


  console.log('productlist', products)
  return (
      <div >
        <h2>{client}</h2>
        <div>
          {products.map(prod => (
            <Product
              key={prod.object.id}
              title={prod.object.title}
              price={prod.object.price}
              inventory={prod.object.count}
              addToCart={() => addToCart(prod.object.id)}
              removeFromCart={() => removeFromCart(prod.object.id)}
              deleteFromCart={() => deleteFromCart(prod.object.id)}
            />
          ))}
        </div>
        <ButtonOfTotal
          total={()=>getTotal(products)}
          products={products}
          sendOrders={sendOrders}
          client={client}
        />
      </div>
  );
};

export default ProductList;
