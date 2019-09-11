import React from 'react'
import { Link } from 'react-router-dom'


function Admin () {
  return (
    <>
      <Link to={'/Login'}>
      <button>Salir</button>
      </Link>

      <h1>ADMIN VIEW</h1>
    </>
  )
}

export default Admin