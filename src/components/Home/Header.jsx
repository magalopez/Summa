import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { AuthUserContext } from '../../Context'

function Header ({event, eventlogo}) {
  
  const [ auth ] = useContext(AuthUserContext)

  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><h1 onClick={()=>{eventlogo('todos')}}>Summa</h1></Link>
      </div>
     
      <div className="btn-admin">
        <Link to="/carrito">
          <button className="button" >Carrito</button>
        </Link> 
          {auth === true ?  
        <Link to="/admin">
          <button className="button" >Administrador</button>
        </Link> :  
        <Link to="/login">
          <button className="button" >Administrador</button>
        </Link>}  
      </div>

      <div className="box-input">
          <input type="text" onChange={event}/>
          <span class="bar"></span>
          <label>Buscar</label>
      </div>
    </header>
  )
}

export default Header;