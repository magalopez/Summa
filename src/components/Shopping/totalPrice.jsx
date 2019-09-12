import React from "react";

const ButtonOfTotal = ({ total, sendOrders, products, client }) => {

  console.log(total,'whaaat')
  const formatNumber = number =>
    new Intl.NumberFormat("en-US", {
      mininumFractionDigits: 2,
      maximunFractionDigits: 2
    }).format(number);

  return (
    <div className="buttons has-addons box is-centered">
      <button className="button is-dark">
        <span className="icon">
          <i className="fas fa-money-bill"></i>
        </span>
        <span>${formatNumber(total)}</span>
      </button>

      <a
        href="/#"
        className="button is-dark"
        onClick={() => {
          console.log("sjsjs");
          sendOrders(products, client);
        }}
      >
        <span className="icon">
          <i className="fas fa-receipt"></i>
        </span>
        <span>enviar orden</span>
      </a>
    </div>
  );
};

export default ButtonOfTotal;
