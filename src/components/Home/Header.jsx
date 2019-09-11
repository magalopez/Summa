import React from 'react'
import { Link } from "react-router-dom"

function Header ({event, eventlogo}) {
  
  return (
    <header>
      <div className="logo">
        <Link to="/"><h1 onClick={()=>{eventlogo('todos')}}>Summa</h1></Link>
      </div>
     
      <div className="btn-login">
        <Link to="/login"><button>Administrador</button></Link>
      </div>   

      <div>
        <input type="text" onChange={event}/>
      </div>
    </header>
  )
}

export default Header;