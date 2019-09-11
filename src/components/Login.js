import React from 'react'
import { Link } from 'react-router-dom'
import FormLogIn from './Login/Form'


function Login () {
  return (
    <>
      <Link to={'/'}>
      <button>Volver</button>
      </Link>
      <h1>LOGIN VIEW</h1>

      <FormLogIn />
    </>
  )
}

export default Login