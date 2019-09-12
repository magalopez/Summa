import React from 'react'
import { Link } from 'react-router-dom'

function MenuOps ({logout}) {
  return (
    <>
      <aside className='menu-options'>
        <ul>
          <li><a>Productos</a></li>
          <li><a>Categorias</a></li>
          <li><a>Usuarios</a></li>
          <li><a>Pedidos</a></li>
          <li><Link to={'/Login'} onClick={()=>logout()}>Cerrar Sesion</Link></li>
        </ul>
      </aside>
    
    </>
  )
}
export default MenuOps