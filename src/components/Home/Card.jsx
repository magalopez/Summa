import React from 'react'
// import './Styles/card.css'
import { Link } from "react-router-dom"


function Card ({id,title,price,description,image,modal}) {
  return (
    <div class="container-card">
      <div class="card">
      {/* <Link to={`/detalle/${id}`}> */}
        <div class="card-head" onClick={()=>{modal({id,title,price,description,image,})}}>
          <img src={image} alt="product" class="product-img"/>
        </div>
      {/* </Link> */}
 
    <div class="card-body">
      <div class="product-desc">
        <span class="product-title">
                <b>{title}</b>
        </span>
      </div>
      <div class="product-properties">
        <div class="product-detail">
          {/* <h2>{title}</h2>  */}
          {description}
        </div>
        <div class="product-price">
                S./<b>{price}</b>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Card;