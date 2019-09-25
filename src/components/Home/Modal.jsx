import React from 'react'
// import './modal.css'

function ModalDetail ({object, show, handleClose,addCart}) {

  const showHideClassName = show ? "modaltwo display-block" : "modaltwo display-none";
  
  return (
    <>
      <div className={showHideClassName}>	
	      <div className="product-details">
          <h1>{object.title}</h1>
          <p className="information">{object.description}</p>
          <h3 className="price">{`S./${object.price}`}
          </h3>
          <div className="control">
            <button className="btn" 
                    onClick={()=>{addCart({object})}}
            >
              <span className="buy">
                Añadir
              </span>
            </button>
            <button className="btn btncancel" onClick={()=>handleClose()}>
              <span>
                cancelar
              </span>
            </button>
          </div>    
        </div>
      <div className="product-image">
        <img src={object.image} 
             alt={object.title}
        />
      </div>
      </div>
    </>
  )
}

export default ModalDetail