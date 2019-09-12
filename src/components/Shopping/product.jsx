import React from "react";

const Product = ({
  title,
  price,
  deleteFromCart
}) => {
  return (
    <tr>
      <td><strong>{title}</strong></td>
      <td>{price}</td>
      <td><button className="button" onClick={deleteFromCart}>Eliminar</button></td>
    </tr>
  );
};

export default Product;
