import React, {useState } from 'react'

//Firebase
import { authentication } from '../../services/Firebase-config'

function SectionUsers () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const registerUser = async () => {
    try {
      await authentication.createUserWithEmailAndPassword(email, password)
      setEmail('')
      setPassword('')
    } catch (e) {
      alert(e)
    }
  }
 
  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className="form-wrap">
		 		<div className="tabs-content">
			    <div>
				    <form className="login-form">
              <input type="text" 
                     className="input" 
                     placeholder="Email" 
                     value={email} 
                     onChange={changeEmail}
              />
              <input type="password" 
                     className="input" 
                     placeholder="Password" 
                     value={password} 
                     onChange={changePassword}
              />
				    </form>
            <button className="button" 
                    value="Registrar" 
                    onClick={()=>registerUser()}>Registrar
            </button>
			    </div>
		    </div>
	    </div> 
    </>
  )
}

export default SectionUsers