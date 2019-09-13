import React from "react";

const ButtonOfTotal = ({getTotal, sendOrders, products, client }) => {

  console.log(getTotal)
     
  const formatNumber = number =>
    new Intl.NumberFormat("en-US", {
      mininumFractionDigits: 2,
      maximunFractionDigits: 2
    }).format(number);

  return (
    <div>
      <button className="button-total">S./{formatNumber(getTotal)}
      </button>
      <button
        className="button"
        onClick={() => {
          sendOrders(products, client);
        }}>
        <span>enviar orden</span>
      </button>
    </div>
  );
};

export default ButtonOfTotal;
