import React from "react";

const ButtonOfTotal = ({getTotal, sendOrders, products, client }) => {

  console.log(getTotal)
 
      
  // console.log(handlr,'whaaat')
  const formatNumber = number =>
    new Intl.NumberFormat("en-US", {
      mininumFractionDigits: 2,
      maximunFractionDigits: 2
    }).format(number);

  return (
    <div>
      <button className="button">S./{formatNumber(getTotal)}
      </button>
      <a
        href="/#"
        className="button"
        onClick={() => {
          sendOrders(products, client);
        }}>
        <span>enviar orden</span>
      </a>
    </div>
  );
};

export default ButtonOfTotal;
