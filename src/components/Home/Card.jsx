import React from 'react'

function Card ({id,title,price,image,count,modal}) {
  return (
    <div class="container-card">
      <div class="card">
        <div class="card-head" onClick={()=>{modal({id,title,price,image,count})}}>
          <img src={image} alt="product" class="product-img"/>
        </div>
        <div class="card-body">
          <div class="product-desc">
            <span class="product-title">
              <b>{title}</b>
            </span>
          </div>
          <div class="product-properties">
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