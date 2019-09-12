import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthUserContext } from '../Context'
import * as firebase from "firebase/app";
import "firebase/auth";


function Admin () {
  const [, setAuth ] = useContext(AuthUserContext)
  
  const logout = async () => {
    try {
      await firebase.auth().signOut()
      setAuth(false)
    } catch (e) {
      alert(e)
    }
  }

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