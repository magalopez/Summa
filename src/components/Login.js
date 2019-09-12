import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

//Context API
import { AuthUserContext } from '../Context'

//Firebase
import { authentication } from '../services/Firebase-config'

//Components
import FormLogIn from './Login/Form'


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
 
  const getUser = () => {
    return authentication.currentUser;
  }

  const submit = async () => {
    try {
      await authentication.signInWithEmailAndPassword(email, password)
      onlooker();
    } catch (e) {
      alert(e)
    }
  }

  const onlooker = () => {
    let user = getUser();
    user === null ? console.log('NOTUSER') : setAuth(true);
  }
  onlooker();

  return (
    <>
      <Link to={'/'}><img src={"https://image.flaticon.com/icons/svg/263/263115.svg"} className="home"/></Link>
      <FormLogIn login={submit} email={changeEmail} password={changePassword} />
    </>
  )
}

export default Login
