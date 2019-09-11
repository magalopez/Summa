import React from 'react'
import { Link } from 'react-router-dom'


function Login () {
  return (
    <>
      <Link to={'/'}>
      <button>Volver</button>
      </Link>
      <h1>LOGIN VIEW</h1>
      <Link to={'/Admin'}>
      <button>Entrar</button>
      </Link>
    </>
  )
}

export default Login