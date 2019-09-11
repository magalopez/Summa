import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthUserContext } from '../Context'


function Admin () {
  const [, setAuth ] = useContext(AuthUserContext)
  
  const logout = () => setAuth(false);


  return (
    <>
      <Link to={'/Login'}>
      <button onClick={()=>logout()}>Salir</button>
      </Link>

      <Link to="/"><h1>HOME</h1>
</Link>
      <h1>ADMIN VIEW</h1>
    </>
  )
}

export default Admin