import React from 'react'

function Card ({id,title,price,description,image,count,eventModal, stateModal}) {
  return (
    <div className="container-card">
      <div className="card">
        <div className="card-head" 
             onClick={()=>{eventModal({id,title,price,description,image,count})}}
        >
          <img src={image} 
               alt="product"               className="product-img"
          />
        </div>
        <div className="card-body">
          <div className="product-desc">
            <span className="product-title">
              <b>{title}</b>
            </span>
          </div>
          <div className="product-properties">
            {stateModal === false 
              ? <></>
              : <>
                  <div className="product-detail">
                    {description}
                  </div>
                </>
            }
            <div className="product-price">
                S./<b>{price}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;