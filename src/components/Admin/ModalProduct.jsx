import React from 'react'



function ModalProduct ({handleClose, show, children }) {
  
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <>
      <div className={showHideClassName}>
        <section className="form ">
          {children}
        <button onClick={()=>handleClose()}>Cancelar</button>
      </section>
      </div>
    </>
  )
}
export default ModalProduct

