import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import FormLogIn from './Login/Form'
import { AuthUserContext } from '../Context'
import * as firebase from "firebase/app";
import "firebase/auth";


function Login () {

  const [, setAuth ] = useContext(AuthUserContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }
 
  const submit = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      alert(e)
    }
  }

  const getUser = () => {
    return firebase.auth().currentUser;
  }

  const onlooker = () => {
    let user = getUser();
    user === null ? console.log('NOTUSER') : setAuth(true);
  }

  onlooker();

  const activeUser = () => {

    
  }

  return (
    <>
      <Link to={'/'}>
      <h1>HOME</h1>
      </Link>
      <h1>LOGIN VIEW</h1>

      <FormLogIn login={submit} email={changeEmail} password={changePassword} />
    </>
  )
}

export default Login


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