import React, { useState } from 'react'
import './Styles/form.css'
import { Link } from 'react-router-dom'


function FormLogIn ({login}) {


  return (
    <>
      <div className="form-wrap">
		    <div className="tabs">
			    <h3 className="login-tab">Login</h3>
		    </div>

		    <div className="tabs-content">
			    <div id="login-tab-content">
				    <form className="login-form" action="" method="post">
					    <input type="text" className="input" id="user_login" autocomplete="off" placeholder="Email or Username"/>
					    <input type="password" className="input" id="user_pass" autocomplete="off" placeholder="Password"/>
              <Link to="/admin"><input type="submit" className="button" value="Login" onClick={()=>login()} /></Link>
				    </form>
				    <div className="help-text">
					    <p><a href="/#">Forget your password?</a></p>
				    </div>
			    </div>
		    </div>
	    </div>
    </>
  );
}

export default FormLogIn