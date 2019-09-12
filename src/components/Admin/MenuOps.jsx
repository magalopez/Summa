import React from 'react'

function MenuOps ({products, users, orders}) {
  return (
    <>
      <nav className='nav_categories'>
        <ul>
          <li><a onClick={()=>products()}>Productos</a></li>
          <li><a onClick={()=>users()}>Usuarios</a></li>
          <li><a onClick={()=>orders()}>Pedidos</a></li>
        </ul>
      </nav>
    
    </>
  )
}
export default MenuOps