import React from 'react'
import './Styles/card.css'
import { Link } from "react-router-dom"


function Card ({id,title,price,description,image,badge}) {
  return (
    <div class="container">
      <div class="card">
        
        <div class="card-head">
          <img src={image} alt="product" class="product-img"/>
        </div>
 
    <div class="card-body">
      <div class="product-desc">
        <span class="product-title">
                <b>{title}</b>
                <span class="badge">
                  {badge}
                </span>
        </span>
        {/* <span class="product-caption">
                Basket Ball Collection Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness
        </span> */}
      </div>
      <div class="product-properties">
        <div class="product-detail">
          <h2>{title}</h2> 
          {description}
        </div>
        <span class="product-price">
                S./<b>{price}</b>
        </span>
      </div>
    </div>
  </div>
</div>
  )
}

export default Card;