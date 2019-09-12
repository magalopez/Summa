import React from "react";
import Product from "./product";
import ButtonOfTotal from "./totalPrice";

const ProductList = ({
  products,
  addToCart,
  removeFromCart,
  deleteFromCart,
  sendOrders,
  client
}) => {
  
  const getTotal = products => {
    let emptyArray = [];
    let emptyArrayContent = 0;
    products.forEach(prod => {
      return emptyArray.push(prod.object.price);
    });

    emptyArray.forEach(prod => {
      return (emptyArrayContent += prod);
    });
    return emptyArrayContent;
  };

  return (
      <div className="container-cart">
        <h2>{client}</h2>
        <table className="table-cart">
          <tr>
            <th>Producto</th>
            <th>Precio </th>
            <th></th>
          </tr>
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
        </table>
        <ButtonOfTotal
          products={products}
          sendOrders={sendOrders}
          client={client}
          getTotal={getTotal(products)}
        />
      </div>
  );
};

export default ProductList;
