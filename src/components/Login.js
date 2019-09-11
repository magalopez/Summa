import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FormLogIn from './Login/Form'
import { AuthUserContext } from '../Context'


function Login () {

  const [, setAuth ] = useContext(AuthUserContext)

  // const AuthService = {
  //   isAuthenticated: false,
  //   authenticate(cb) {
  //     this.isAuthenticated = true
  //     setTimeout(cb, 100)
  //   },
  //   logout(cb) {
  //     this.isAuthenticated = false
  //     setTimeout(cb, 100)
  //   }
  // }

  const login = () => setAuth(true);

  return (
    <>
      <Link to={'/'}>
      <button>Volver</button>
      </Link>
      <h1>LOGIN VIEW</h1>

      <FormLogIn login={login} />
    </>
  )
}

export default Login