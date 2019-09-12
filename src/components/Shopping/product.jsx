import React from "react";

const Product = ({
  title,
  price,
  inventory,
  addToCart,
  removeFromCart,
  deleteFromCart
}) => {
  return (
    <div style={{ marginBotton: "1.5rem" }}>
      <p>
        <strong>{title}</strong> ${price}
      </p>
      <div>
        <p>
          <span >{inventory}</span>
        </p>
          <button onClick={addToCart}>+</button>
          <button onClick={removeFromCart}>-</button>
          <button onClick={deleteFromCart}>x</button>
      </div>
    </div>
  );
};

export default Product;
