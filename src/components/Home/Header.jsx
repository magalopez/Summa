import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { AuthUserContext } from '../../Context'

function Header ({event, eventlogo}) {
  
  const [ auth ] = useContext(AuthUserContext)

  return (
    <header>
      <div className="logo">
        <Link to="/"><h1 onClick={()=>{eventlogo('todos')}}>Summa</h1></Link>
      </div>
     
      <div className="btn-admin">
        {auth === true ?  
        <Link to="/admin">
          <button className="button" >Administrador</button>
        </Link> :  
        <Link to="/login">
           <button className="button" >Administrador</button>
        </Link>}  
      </div>

      <div className="box-input">
        {auth === true ? <> </> : 
        <>
          <input type="text" onChange={event}/>
          <span class="bar"></span>
          <label>Buscar</label>
        </>}
      </div>
    </header>
  )
}

export default Header;